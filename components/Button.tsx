import Link from "next/link";
import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  variant?: "primary" | "secondary" | "link";
  href?: string;
}>;
export default function Button({
  children,
  variant,
  href,
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
        <div className="flex justify-center items-center gap-4">{children}</div>
      </Link>
    );
  }

  return (
    <button className={`button ${cn}`}>
      <div className="flex justify-center items-center gap-4">{children}</div>
    </button>
  );
}
