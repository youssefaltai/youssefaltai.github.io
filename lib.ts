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

export const inputStyle = (className: string = "") =>
  cn(
    "input w-full max-w-sm rounded-2xl border border-gray-600 transition duration-300",
    className
  );

const awsS3BucketBaseUrl =
  "https://youssefaltai-first-bucket.s3.eu-north-1.amazonaws.com";

export const AwsS3Bucket = {
  gallery: (image: string) => `${awsS3BucketBaseUrl}/galleries/${image}`,
  logo: (image: string) => `${awsS3BucketBaseUrl}/logos/${image}`,
  other: (image: string) => `${awsS3BucketBaseUrl}/${image}`,
};
