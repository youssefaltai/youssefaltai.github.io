"use client";

import { cn } from "@/lib";
import { useRouter } from "next/navigation";
import { ButtonHTMLAttributes } from "react";

type CallToActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
};

function CallToAction({
  children,
  className,
  href,
  ...props
}: CallToActionProps) {
  const router = useRouter();
  return (
    <button
      {...props}
      onClick={
        !!href
          ? (e) => {
              e.preventDefault();
              router.push(href);
            }
          : props.onClick
      }
      className={cn(
        "px-8 py-4 rounded-full bg-blue-600 text-white text-xl font-semibold transition-all duration-500 ease-out hover:bg-white hover:text-blue-600 hover:shadow-lg",
        className,
        { "cursor-not-allowed": props.disabled },
        { "opacity-50": props.disabled },
        {
          "hover:shadow-none hover:bg-blue-600 hover:text-white":
            props.disabled,
        }
      )}
    >
      {children}
    </button>
  );
}

export default CallToAction;
