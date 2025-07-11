export type Service = {
    name: string;
    description: string;
    slug: string;
};

export const services: Service[] = [
    {
        slug: 'frontend-development',
        name: 'Frontend Development',
        description: 'Production-grade Next.js, React Native, or Flutter apps. Performant, maintainable, built to scale.',
    },
    {
        slug: 'ui-design',
        name: 'UI Design',
        description: 'Translating your brand vision into polished, pixel-perfect interfaces that resonate.',
    },
    {
        slug: 'ux-research',
        name: 'UX Research',
        description: 'Understanding your users through interviews, usability tests, and journey mapping—so your product actually solves real problems.',
    },
    {
        slug: 'technical-consulting',
        name: 'Technical Consulting',
        description: 'Code reviews, architecture audits, and developer tools guidance — to unblock your team and boost long-term velocity.',
    },
];