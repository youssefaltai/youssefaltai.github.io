"use client";

import Loader from "../Loader";
import { ContactFormProvider } from "./FormContext";
import Logo from "@/components/Logo";
import ContactForm from "./ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me. Let's work together!",
};

export default function Contact() {
  return (
    <>
      <Loader scrollToTop />
      <ContactFormProvider>
        <main className="flex flex-col justify-center items-center gap-16 py-16 w-full max-w-screen-sm">
          <Logo />
          <ContactForm />
        </main>
      </ContactFormProvider>
    </>
  );
}
