import type { Metadata } from "next";

import NavBar from "@/components/NavBar/NavBar";

import "./globals.css";


export const metadata: Metadata = {
  title: "Youssef al-Tai",
  description: "I design & build frontends that work.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col items-center py-16 h-full antialiased">
        <NavBar />

        <main className="container flex justify-center items-center">
          {children}
        </main>

        <footer className="text-center text-sm text-muted">
          © {new Date().getFullYear()} Youssef al-Tai. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
