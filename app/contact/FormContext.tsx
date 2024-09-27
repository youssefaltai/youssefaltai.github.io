import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

const preferredContactMethods = ["email", "phone", "whatsapp"] as const;
export type PreferredContactMethodType =
  (typeof preferredContactMethods)[number];

export type ContactFormValuesType = {
  name: string;
  message: string;
  preferredContactMethod?: PreferredContactMethodType;
  email?: string;
  phone?: string;
};

interface ContactFormState {
  currentStep: number;
  values: ContactFormValuesType;
}

interface ContactFormContextProps {
  currentStep: number;
  values: ContactFormValuesType;
  nextStep: () => void;
  prevStep: () => void;
  setName: (name: string) => void;
  setMessage: (message: string) => void;
  setPreferredContactMethod: (method: PreferredContactMethodType) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
}

const ContactFormContext = createContext<ContactFormContextProps | undefined>(
  undefined
);

export const useContactForm = () => {
  const context = useContext(ContactFormContext);

  if (!context) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }

  return context;
};

const firstStep = 1;

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [formState, setFormState] = useState<ContactFormState>({
    currentStep: firstStep,
    values: {
      name: "",
      message: "",
    },
  });

  const updateFormValues = (newValues: Partial<ContactFormValuesType>) => {
    setFormState((prev) => ({
      ...prev,
      values: { ...prev.values, ...newValues },
    }));
  };

  const nextStep = () => {
    setFormState((prev) => ({ ...prev, currentStep: prev.currentStep + 1 }));
  };

  const prevStep = () => {
    setFormState((prev) => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, firstStep),
    }));
  };

  const setName = (name: string) => updateFormValues({ name });
  const setMessage = (message: string) => updateFormValues({ message });
  const setPreferredContactMethod = (method: PreferredContactMethodType) =>
    updateFormValues({ preferredContactMethod: method });
  const setEmail = (email: string) => updateFormValues({ email });
  const setPhone = (phone: string) => updateFormValues({ phone });

  return (
    <ContactFormContext.Provider
      value={{
        currentStep: formState.currentStep,
        values: formState.values,
        nextStep,
        prevStep,
        setName,
        setMessage,
        setPreferredContactMethod,
        setEmail,
        setPhone,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
