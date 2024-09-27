"use client";

import { linkStyle } from "@/components/NavLink";
import { useContactForm } from "../FormContext";
import { handleReverseTransition, handleTransition } from "@/lib";
import { contactStepDivSelector } from "../ContactForm";
import { handleStepChange } from "../Step";

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
        className="w-full p-4 border border-gray-200 rounded-2xl focus:border-blue-600 transition duration-300"
        rows={5}
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className={linkStyle(false)}
        disabled={!message}
        onClick={!!message ? handleNextClicked : undefined}
      >
        Next
      </button>
    </>
  );
}
