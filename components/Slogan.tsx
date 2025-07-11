import { PropsWithChildren } from "react";

export function Emphasis({ children }: PropsWithChildren) {
    return <strong className="text-spring-400 font-bold">{children}</strong>;
}

export default function Subtitle({ children }: PropsWithChildren) {
    return <h1 className="text-4xl lg:text-5xl">
        {children}
    </h1>;
}