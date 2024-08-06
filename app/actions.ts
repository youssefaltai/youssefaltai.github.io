"use server";
import { schema } from "./contactSchema";
import { ContactSchemaType } from "./ContactSection";

export type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function submitContactMeAction(
  data: ContactSchemaType
): Promise<FormState> {
  const formData = Object.fromEntries(Object.entries(data));
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  const updatedFormData = new FormData();

  for (const key of Object.keys(formData)) {
    updatedFormData.append(key, formData[key].toString());
  }

  updatedFormData.append("access_key", "1443e782-0f47-49b6-a9b5-d0201d35493d");
  updatedFormData.append(
    "subject",
    "Contact Form Submission From Your Website"
  );

  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: updatedFormData,
  });

  if (!response.ok) {
    return {
      message: "Failed to submit form",
    };
  }

  return {
    message: "Form submitted successfully",
  };
}
