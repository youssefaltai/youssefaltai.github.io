import "./globals.css";

import type { Metadata } from "next";

import { bodyFont } from "@/lib";
import Header from "./Header";
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Youssef al-Tai",
  description: "I build, design, and mentor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={bodyFont.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
