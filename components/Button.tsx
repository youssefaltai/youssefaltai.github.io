import { PropsWithChildren } from "react";

export type ButtonProps = PropsWithChildren<{
  variant?: "primary" | "secondary";
}>;
export default function Button({ children, variant }: Readonly<ButtonProps>) {
  const cn = variant === "secondary" ? "button-secondary" : "button-primary";
  return (
    <button className={`button ${cn}`}>
      <div className="flex justify-center items-center gap-4">{children}</div>
    </button>
  );
}
