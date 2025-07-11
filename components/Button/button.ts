import { ClassValue } from "clsx";
import React from "react";

export type ButtonLinkProps = {
    children: React.ReactNode;
    href: string
    external?: boolean;
    className?: ClassValue
}