"use client";

import Section from "@/components/Section";
import { submitContactMeAction } from "./actions";
import { Merriweather } from "next/font/google";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { schema } from "./contactSchema";
import { PropsWithChildren } from "react";
import Button from "@/components/Button";
import Link from "next/link";
import {
  email,
  github,
  githubUsername,
  instagram,
  instagramUsername,
  linkedin,
  linkedinUsername,
  phone,
} from "@/contact";
import {
  Email,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  Phone,
} from "@/components/Icons";

const font = Merriweather({ weight: "700", subsets: ["latin"] });

export type ContactSchemaType = z.infer<typeof schema>;
export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitSuccessful, errors, isSubmitting, isLoading },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const pending = isSubmitting || isLoading;

  if (isSubmitSuccessful) {
    return (
      <Section variant="secondary">
        <h2 className={`${font.className} text-4xl font-bold`}>
          Thank you for contacting me!
        </h2>
      </Section>
    );
  }

  return (
    <Section variant="secondary">
      <div id="contact">
        <h2 className={`${font.className} text-4xl font-bold`}>Contact Me</h2>

        <div className="flex w-full pt-8 gap-8">
          <form
            onSubmit={handleSubmit(async (data) => {
              if (pending) return;
              await submitContactMeAction(data);
            })}
            className="flex flex-col gap-4 w-full"
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                {...register("name")}
                placeholder="Enter your full name"
              />
              {errors.name && <FieldError>{errors.name.message}</FieldError>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                {...register("email")}
                placeholder="Enter your email"
              />
              {errors.email && <FieldError>{errors.email.message}</FieldError>}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                placeholder="Enter your message"
              />
              {errors.message && (
                <FieldError>{errors.message.message}</FieldError>
              )}
            </div>
            <Button type="submit" disabled={pending}>
              {pending ? "Sending..." : "Send Message"}
            </Button>
          </form>
          <div className="flex flex-col w-full gap-6">
            <ContactLinksSection title="Reach Me">
              <ContactRow>
                <Email />
                <Link href={`mailto:${email}`}>{email}</Link>
              </ContactRow>
              <ContactRow>
                <Phone />
                <Link href={`tel:${phone}`}>{phone}</Link>
              </ContactRow>
            </ContactLinksSection>
            <ContactLinksSection title="Social Media">
              <ContactRow>
                <InstagramIcon />
                <Link href={instagram}>{instagramUsername}</Link>
              </ContactRow>
              <ContactRow>
                <LinkedInIcon />
                <Link href={linkedin}>in/{linkedinUsername}</Link>
              </ContactRow>
            </ContactLinksSection>
            <ContactLinksSection title="GitHub">
              <ContactRow>
                <GitHubIcon />
                <Link href={github}>{githubUsername}</Link>
              </ContactRow>
            </ContactLinksSection>
          </div>
        </div>
      </div>
    </Section>
  );
}

type ContactSectionProps = PropsWithChildren<{ title: string }>;
function ContactLinksSection({ children, title }: ContactSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className={`${font.className} text-2xl font-bold`}>{title}</h3>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function ContactRow({ children }: PropsWithChildren<{}>) {
  return <div className="flex items-center gap-2">{children}</div>;
}

type FieldErrorProps = PropsWithChildren<{}>;
function FieldError({ children }: FieldErrorProps) {
  return <span className="text-error">{children}</span>;
}
