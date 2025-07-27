import PageTemplate from "@/components/PageTemplate";
import ContactSection from "@/components/ContactSection";
import RequestForm from "./RequestForm";
import { env, pageUrl } from "@/lib/env";
import { Suspense } from "react";

export const metadata = {
    title: "Get in touch | Youssef al-Tai",
    description: "Ready to start? Request Youssef al-Tai's services for your next MVP project and set it up for success from day one.",
    openGraph: {
        url: pageUrl('/request'),
        type: "website",
        title: "Get in touch | Youssef al-Tai",
        description: "Ready to start? Request Youssef al-Tai's services for your next MVP project and set it up for success from day one.",
        images: [pageUrl('/images/og/og-image.jpg')],
        siteName: env.name,
    },
    twitter: {
        card: "summary_large_image",
        domain: env.siteUrl.replace(/^https?:\/\//, ''),
        url: pageUrl('/request'),
        title: "Get in touch | Youssef al-Tai",
        description: "Ready to start? Request Youssef al-Tai's services for your next MVP project and set it up for success from day one.",
        images: [pageUrl('/images/og/og-image.jpg')],
    },
};

export default function Page() {
    return (
        <PageTemplate title="Talk to me">
            <Suspense>
                <RequestForm />
            </Suspense>
            <ContactSection />
        </PageTemplate>
    );
} 