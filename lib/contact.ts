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
        icon: '/linkedin.svg'
    },
    {
        url: `mailto:${env.email}`,
        label: env.email,
        icon: '/email.svg'
    },
    {
        url: `tel:${env.phone}`,
        label: env.phone,
        icon: '/phone.svg'
    },
]