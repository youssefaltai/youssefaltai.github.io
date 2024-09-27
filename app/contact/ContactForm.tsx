import Step from "./Step";
import MessageStep from "./(steps)/MessageStep";
import NameStep from "./(steps)/NameStep";
import PreferredContactMethodStep from "./(steps)/PreferredContactMethodStep";
import { useContactForm } from "./FormContext";
import ThankYouStep from "./(steps)/ThankYouStep";

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
        <ThankYouStep />
      </Step>
    ),
  },
];

export default function ContactForm() {
  const { currentStep } = useContactForm();

  return (
    <div
      className="trans flex flex-col items-center gap-8 w-full px-8"
      id={contactStepId}
    >
      {steps.find((step) => step.id === currentStep)?.component}
    </div>
  );
}
