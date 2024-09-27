"use client";

import { linkStyle } from "@/components/NavLink";
import { PreferredContactMethodType, useContactForm } from "../FormContext";
import { cn } from "@/lib";

type OptionProps = {
  onClick: () => void;
  label: string;
  selected?: boolean;
};

function Option({ onClick, label, selected = false }: OptionProps) {
  return (
    <button
      className={cn(
        "rounded-2xl p-8 font-semibold text-xl border border-gray-800 opacity-50 transition-all duration-300 ease-in-out hover:opacity-100",
        {
          "border-blue-600 text-blue-600": selected,
        },
        {
          "opacity-100": selected,
        }
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

function PreferredContactMethodOption({
  label,
  option,
}: {
  label: string;
  option: PreferredContactMethodType;
}) {
  const {
    values: { preferredContactMethod },
    setPreferredContactMethod,
  } = useContactForm();

  return (
    <Option
      label={label}
      selected={preferredContactMethod === option}
      onClick={() => {
        if (preferredContactMethod !== option) {
          setPreferredContactMethod(option);
        }
      }}
    />
  );
}

function PreferredContactMethodInputField() {
  const {
    values: { preferredContactMethod, email, phone },
    setEmail,
    setPhone,
  } = useContactForm();

  let inputField;

  if (preferredContactMethod === "email") {
    inputField = (
      <>
        <h2 className="text-xl md:text-2xl font-bold text-center">
          What is your email address?
        </h2>
        <input
          className="w-full p-4 border border-gray-200 rounded-2xl focus:border-blue-600 transition duration-300"
          placeholder="Type your email here..."
          value={email || ""}
          onChange={(e) => setEmail(e.target.value)}
        />
      </>
    );
  } else if (
    preferredContactMethod === "phone" ||
    preferredContactMethod === "whatsapp"
  ) {
    inputField = (
      <>
        <h2 className="text-xl md:text-2xl font-bold text-center">
          What is your phone number?
        </h2>

        <input
          className="w-full p-4 border border-gray-200 rounded-2xl focus:border-blue-600 transition duration-300"
          placeholder="Type your phone number here..."
          value={phone || ""}
          onChange={(e) => setPhone(e.target.value)}
        />
      </>
    );
  }

  return inputField;
}

export default function PreferredContactMethodStep() {
  const {
    values: { preferredContactMethod, email, phone },
    nextStep,
    prevStep,
  } = useContactForm();

  const handleNextClicked = () => {
    nextStep();
  };

  const handleBackClicked = () => {
    prevStep();
  };

  const canProceed = preferredContactMethod === "email" ? !!email : !!phone;

  return (
    <div className="flex flex-col items-center gap-8 w-full px-16">
      <h2 className="text-xl md:text-2xl font-bold text-center">
        What is your preferred method of contact?
      </h2>
      <div className="flex gap-4">
        <PreferredContactMethodOption label="Email" option="email" />
        <PreferredContactMethodOption label="Phone" option="phone" />
        <PreferredContactMethodOption label="WhatsApp" option="whatsapp" />
      </div>
      <PreferredContactMethodInputField />
      <div className="flex items-center justify-center gap-16">
        <button className={linkStyle(false)} onClick={handleBackClicked}>
          Go Back
        </button>
        <button
          className={linkStyle(false)}
          disabled={!canProceed}
          onClick={!!canProceed ? handleNextClicked : undefined}
        >
          Next
        </button>
      </div>
    </div>
  );
}
