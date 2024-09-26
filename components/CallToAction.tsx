import { cn } from "@/lib";
import { ButtonHTMLAttributes } from "react";

type CallToActionProps = ButtonHTMLAttributes<HTMLButtonElement>;
function CallToAction({ children, className, ...props }: CallToActionProps) {
  return (
    <button
      {...props}
      className={cn(
        "px-8 py-4 rounded-full bg-blue-600 text-white text-xl font-semibold transition-all duration-500 ease-out hover:bg-white hover:text-blue-600 hover:shadow-lg",
        className
      )}
    >
      {children}
    </button>
  );
}

export default CallToAction;
