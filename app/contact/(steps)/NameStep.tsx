"use client";

import { linkStyle } from "@/components/NavLink";
import { useContactForm } from "../FormContext";
import CallToAction from "@/components/CallToAction";
import { handleStepChange } from "../Step";
import { handleTransition, sleep } from "@/lib";
import { useRouter } from "next/navigation";

export default function NameStep() {
  const {
    values: { name },
    nextStep,
    prevStep,
    setName,
  } = useContactForm();
  const router = useRouter();

  const handleSubmitClicked = () =>
    handleStepChange({
      onTransitionComplete: nextStep,
      onTransitionReverseComplete: () =>
        sleep(2000).then(() =>
          handleTransition({
            onComplete: () => router.push("/"),
          })
        ),
    });

  const handleBackClicked = () => {
    handleStepChange({
      onTransitionComplete: prevStep,
      onTransitionReverseComplete: () => {},
    });
  };

  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold text-center">
        May I know your name?
      </h2>
      <input
        name="name"
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
    </>
  );
}
