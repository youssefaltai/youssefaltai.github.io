"use client";

import { ContactFormProvider } from "./FormContext";
import ContactForm from "./ContactForm";
import Page from "@/components/Page";

export default function ContactPage() {
  return (
    <>
      <ContactFormProvider>
        <Page showBack={false}>
          <ContactForm />
        </Page>
      </ContactFormProvider>
    </>
  );
}
