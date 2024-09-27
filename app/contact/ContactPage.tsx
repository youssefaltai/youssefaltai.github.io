"use client";

import { ContactFormProvider } from "./FormContext";
import Logo from "@/components/Logo";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <ContactFormProvider>
        <main className="flex flex-col justify-center items-center gap-16 py-16 w-full max-w-screen-sm">
          <Logo />
          <ContactForm />
        </main>
      </ContactFormProvider>
    </>
  );
}
