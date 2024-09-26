import "./globals.css";

import type { Metadata } from "next";

import { font } from "@/lib";

export const metadata: Metadata = {
  title: "Youssef al-Tai",
  description: "Full-Stack & Mobile Engineer",
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
      <link rel="icon" type="image/png" href="/favicon-16x16.png" />
      <body
        className={`${font.className} flex flex-col justify-center items-center min-w-full min-h-full bg-gradient-to-b from-white to-[#EFEFEF]`}
      >
        {children}
        <footer className="my-12">
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
