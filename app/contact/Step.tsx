import { handleReverseTransition, handleTransition } from "@/lib";
import { PropsWithChildren } from "react";
import { contactStepDivSelector } from "./ContactForm";
import { linkStyle } from "@/components/NavLink";

export default function Step({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-16 w-full">
        {children}
      </div>
    </>
  );
}

export function handleStepChange({
  onTransitionComplete,
  onTransitionReverseComplete,
}: {
  onTransitionComplete: () => void;
  onTransitionReverseComplete: () => void;
}) {
  handleTransition({
    bodySelector: contactStepDivSelector,
    onComplete: () => {
      onTransitionComplete();
      handleReverseTransition({
        bodySelector: contactStepDivSelector,
        onComplete: () => {
          onTransitionReverseComplete();
        },
      });
    },
  });
}

export function StepNavigation({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-16">
      {children}
    </div>
  );
}
