"use client";

import { linkStyle } from "@/components/NavLink";
import { useContactForm } from "../FormContext";
import CallToAction from "@/components/CallToAction";
import { handleStepChange, StepNavigation } from "../Step";
import { handleTransition, inputStyle, sleep } from "@/lib";
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
        className={inputStyle()}
        type="text"
        placeholder="Type your name here..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <StepNavigation>
        <button className={linkStyle(false)} onClick={handleBackClicked}>
          Go Back
        </button>
        <CallToAction disabled={!name} onClick={handleSubmitClicked}>
          Submit
        </CallToAction>
      </StepNavigation>
    </>
  );
}
