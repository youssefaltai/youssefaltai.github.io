import Step from "./Step";
import MessageStep from "./(steps)/MessageStep";
import NameStep from "./(steps)/NameStep";
import PreferredContactMethodStep from "./(steps)/PreferredContactMethodStep";
import { useContactForm } from "./FormContext";

const contactStepId = "contactStep";
export const contactStepDivSelector = `#${contactStepId}`;

const steps = [
  {
    id: 1,
    component: (
      <Step>
        <MessageStep />
      </Step>
    ),
  },
  {
    id: 2,
    component: (
      <Step>
        <PreferredContactMethodStep />
      </Step>
    ),
  },
  {
    id: 3,
    component: (
      <Step>
        <NameStep />
      </Step>
    ),
  },
  {
    id: 4,
    component: (
      <Step>
        <h2 className="text-3xl font-bold">Thank you for reaching out!</h2>
        <p className="text-xl"> I&apos;ll contact you within 24 hours.</p>
      </Step>
    ),
  },
];

export default function ContactForm() {
  const { currentStep } = useContactForm();

  return (
    <div
      className="trans flex flex-col items-center gap-8 w-full px-16"
      id={contactStepId}
    >
      {steps.find((step) => step.id === currentStep)?.component}
    </div>
  );
}
