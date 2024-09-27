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

export const handleTransition = async ({
  delay = 300,
  bodySelector,
  onComplete,
}: {
  delay?: number;
  bodySelector?: string;
  onComplete: () => void;
}) => {
  const body = document.querySelector(bodySelector || "body");

  body?.classList.add("page-transition", "blur-transition");

  await sleep(delay);
  onComplete();
};

export const handleReverseTransition = async ({
  delay = 0,
  bodySelector,
  onComplete,
}: {
  delay?: number;
  bodySelector?: string;
  onComplete: () => void;
}) => {
  const body = document.querySelector(bodySelector || "body");
  await sleep(delay);
  body?.classList.remove("page-transition", "blur-transition");
  onComplete();
};

export const inputStyle =
  "w-full rounded-2xl p-4 border border-gray-600 transition duration-300";
