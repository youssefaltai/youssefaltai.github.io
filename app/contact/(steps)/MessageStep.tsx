"use client";

import { linkStyle } from "@/components/NavLink";
import { useContactForm } from "../FormContext";

export default function MessageStep() {
  const {
    values: { message },
    nextStep,
    setMessage,
  } = useContactForm();

  const handleNextClicked = () => {
    nextStep();
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full px-16">
      <h2 className="text-xl md:text-2xl font-bold text-center">
        Briefly explain what you need.
      </h2>
      <textarea
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
    </div>
  );
}
