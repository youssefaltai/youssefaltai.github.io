"use client";

import { linkStyle } from "@/components/NavLink";
import { useContactForm } from "../FormContext";
import { handleStepChange, StepNavigation } from "../Step";
import { inputStyle } from "@/lib";

export default function MessageStep() {
  const {
    values: { message },
    nextStep,
    setMessage,
  } = useContactForm();

  const handleNextClicked = () =>
    handleStepChange({
      onTransitionComplete: nextStep,
      onTransitionReverseComplete: () => {},
    });

  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold text-center">
        Briefly explain what you need.
      </h2>
      <textarea
        name="message"
        className={inputStyle("max-w-lg")}
        rows={5}
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <StepNavigation>
        <button
          className={linkStyle(false)}
          disabled={!message}
          onClick={!!message ? handleNextClicked : undefined}
        >
          Next
        </button>
      </StepNavigation>
    </>
  );
}
