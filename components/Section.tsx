import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{}>;
export default function Section({ children }: SectionProps) {
  return (
    <>
      <section className="flex flex-col justify-start items-center py-16 h-min">
        <div className="container h-full flex-col">{children}</div>
      </section>
      <div className="w-full h-6 bg-neutral-50" />
    </>
  );
}
