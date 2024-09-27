import { handleReverseTransition, handleTransition } from "@/lib";
import { PropsWithChildren } from "react";
import { contactStepDivSelector } from "./ContactForm";

export default function Step({ children }: PropsWithChildren) {
  return (
    <>
      <div className="flex flex-col items-center gap-8 w-full px-16">
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
