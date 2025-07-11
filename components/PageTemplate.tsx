import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ title: string; }>;
export default function PageTemplate({ title, children }: Props) {
    return (
        <div className="flex flex-col items-start px-4 md:px-8 py-8 md:py-16 gap-8 md:gap-16">
            <h1 className="text-4xl md:text-6xl font-bold">
                {title}
            </h1>
            <div className="w-full flex flex-col items-start gap-8 md:gap-12">
                {children}
            </div>
        </div>
    );
}