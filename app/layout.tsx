import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const font = Urbanist({ subsets: ["latin"] });

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
      <body className={font.className}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
