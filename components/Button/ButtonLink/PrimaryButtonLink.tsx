import clsx from "clsx";
import Link from "next/link";
import { type ButtonLinkProps } from "../button";

export default function PrimaryButtonLink({ children, href, className, external=false }: ButtonLinkProps) {
    const buttonClasses = clsx(
        "bg-spring-500 hover:bg-spring-400 active:bg-spring-600 text-white hover:shadow rounded-sm px-4 py-3 transition-all duration-300 flex justify-center items-center text-center",
        className
    );

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses}
            >
                {children}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className={buttonClasses}
        >
            {children}
        </Link>
    );
}
