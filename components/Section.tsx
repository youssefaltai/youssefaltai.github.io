import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
  variant?: "primary" | "secondary";
}>;
export default function Section({ children, variant }: SectionProps) {
  const bgColor = variant === "secondary" ? "bg-blue-600" : "bg-white";
  const textColor =
    variant === "secondary" ? "[&_*]:text-white" : "[&_*]:text-neutral-800";
  return (
    <>
      <section
        className={`flex justify-center items-center py-16 h-min gap-8 ${bgColor} ${textColor}`}
      >
        <div className="w-full max-w-screen-2xl px-responsive">{children}</div>
      </section>
      {variant === "primary" && <div className="w-full h-6 bg-neutral-50" />}
    </>
  );
}
