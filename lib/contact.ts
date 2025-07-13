import { env } from "./env";

export type ContactLinkType = {
    label: string;
    icon: string;
    url: string;
}

export const contactLinks: ContactLinkType[] = [
    {
        url: `https://linkedin.com/in/${env.socialLinks.linkedin}`,
        label: env.socialLinks.linkedin,
        icon: '/icons/linkedin.svg'
    },
    {
        url: `mailto:${env.email}`,
        label: env.email,
        icon: '/icons/email.svg'
    },
    {
        url: `tel:${env.phone}`,
        label: env.phone,
        icon: '/icons/phone.svg'
    },
]