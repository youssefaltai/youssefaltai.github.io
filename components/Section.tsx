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
        className={`flex flex-col justify-start items-center py-16 h-min ${bgColor} ${textColor}`}
      >
        <div className={`container h-full flex-col ${bgColor} ${textColor}`}>
          {children}
        </div>
      </section>
      <div className="w-full h-6 bg-neutral-50" />
    </>
  );
}
