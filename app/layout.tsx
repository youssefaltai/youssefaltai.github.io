import "./globals.css";

import type { Metadata } from "next";

import { font } from "@/lib";

const title = "Youssef al-Tai | Full-Stack & Mobile Engineer";
const description =
  "I am Youssef al-Tai, a full-stack and mobile engineer with a focus on building high-performance websites and applications. I specialize in the MERN stack, Next.js, and Flutter.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s - ${title}`,
  },
  description,
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth min-w-full min-h-full flex flex-col justify-center items-center"
    >
      <body
        className={`trans blur-transition page-transition ${font.className} flex flex-col justify-center items-center min-w-full min-h-full bg-gradient-to-b from-white to-[#EFEFEF]`}
      >
        {children}
        <footer className="my-16">
          <p className="text-sm text-gray-500 px-6 text-center">
            &copy; {new Date().getFullYear()} Youssef al-Tai.{" "}
            <span className="whitespace-nowrap text-inherit">
              All rights reserved.
            </span>
          </p>
        </footer>
      </body>
    </html>
  );
}
