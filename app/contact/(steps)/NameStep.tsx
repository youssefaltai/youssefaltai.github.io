"use client";

import { linkStyle } from "@/components/NavLink";
import { useContactForm } from "../FormContext";
import CallToAction from "@/components/CallToAction";
import { handleStepChange, StepNavigation } from "../Step";
import { handleTransition, inputStyle, sleep } from "@/lib";
import { useRouter } from "next/navigation";
import { sendMessageAction } from "../actions";
import { useState } from "react";

export default function NameStep() {
  const { values, nextStep, prevStep, setName } = useContactForm();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmitClicked = () => {
    setLoading(true);
    sendMessageAction(values)
      .then(() => {
        setLoading(false);
        handleStepChange({
          onTransitionComplete: nextStep,
          onTransitionReverseComplete: () =>
            sleep(2000).then(() =>
              handleTransition({
                onComplete: () => router.push("/"),
              })
            ),
        });
      })
      .catch((error) => {
        alert(JSON.stringify(error));
        setLoading(false);
      });
  };

  const handleBackClicked = () => {
    handleStepChange({
      onTransitionComplete: prevStep,
      onTransitionReverseComplete: () => {},
    });
  };

  const canSubmit = !!values.name && !loading;

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
        value={values.name}
        onChange={(e) => setName(e.target.value)}
      />
      <StepNavigation>
        <button className={linkStyle(false)} onClick={handleBackClicked}>
          Go Back
        </button>
        <CallToAction
          disabled={!canSubmit}
          onClick={canSubmit ? handleSubmitClicked : undefined}
        >
          {loading ? "Sending..." : "Submit"}
        </CallToAction>
      </StepNavigation>
    </>
  );
}
