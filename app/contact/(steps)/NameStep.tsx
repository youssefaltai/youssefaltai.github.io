"use client";

import { linkStyle } from "@/components/NavLink";
import { useContactForm } from "../FormContext";
import CallToAction from "@/components/CallToAction";

export default function NameStep() {
  const {
    values: { name },
    nextStep,
    prevStep,
    setName,
  } = useContactForm();

  const handleSubmitClicked = () => {
    nextStep();
  };

  const handleBackClicked = () => {
    prevStep();
  };

  return (
    <div className="flex flex-col items-center gap-8 w-full px-16">
      <h2 className="text-xl md:text-2xl font-bold text-center">
        May I know your name?
      </h2>
      <input
        className="w-full p-4 border border-gray-200 rounded-2xl focus:border-blue-600 transition duration-300"
        type="text"
        placeholder="Type your name here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div className="flex items-center justify-center gap-16">
        <button className={linkStyle(false)} onClick={handleBackClicked}>
          Go Back
        </button>
        <CallToAction disabled={!name} onClick={handleSubmitClicked}>
          Submit
        </CallToAction>
      </div>
    </div>
  );
}
