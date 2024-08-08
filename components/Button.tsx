import Link from "next/link";
import { PropsWithChildren } from "react";
import { NavArrowRight } from "./Icons";

export type ButtonProps = PropsWithChildren<{
  variant?: "primary" | "secondary" | "link";
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}>;
export default function Button({
  children,
  variant,
  href,
  type = "button",
  disabled = false,
}: Readonly<ButtonProps>) {
  const cn =
    variant === "secondary"
      ? "button-secondary"
      : variant === "link"
      ? "button-link"
      : "button-primary";

  if (href) {
    return (
      <Link href={href} className={`button ${cn}`}>
        <div className="flex justify-center items-center gap-2 md:gap-4">
          {children}
        </div>
      </Link>
    );
  }

  return (
    <button className={`button ${cn}`} type={type} disabled={disabled}>
      <div className="flex justify-center items-center gap-2 md:gap-4">
        {children}
      </div>
    </button>
  );
}

type LinkButtonProps = PropsWithChildren<{ href: string }>;
export function LinkButton({ children, href }: LinkButtonProps) {
  return (
    <Button variant="link" href={href}>
      {children}
      <NavArrowRight />
    </Button>
  );
}
