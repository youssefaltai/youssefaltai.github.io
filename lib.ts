import { Urbanist } from "next/font/google";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const font = Urbanist({ subsets: ["latin"] });

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export const baseUrl = "https://youssefaltai.com";
export const serviceSections = ["overview", "why-me", "process", "pricing"];
