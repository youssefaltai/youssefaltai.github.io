import MessageStep from "./(steps)/MessageStep";
import NameStep from "./(steps)/NameStep";
import PreferredContactMethodStep from "./(steps)/PreferredContactMethodStep";
import { useContactForm } from "./FormContext";

export default function ContactForm() {
  const { currentStep } = useContactForm();

  const steps = [
    { id: 1, component: <MessageStep /> },
    { id: 2, component: <PreferredContactMethodStep /> },
    { id: 3, component: <NameStep /> },
    { id: 4, component: <h2 className="text-3xl font-bold">Thank you!</h2> },
  ];

  return (
    <div className="flex flex-col items-center gap-8 w-full px-16">
      {steps.find((step) => step.id === currentStep)?.component}
    </div>
  );
}
