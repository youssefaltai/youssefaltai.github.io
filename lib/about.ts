export type TextSectionBodyType = string | { text: string, icon?: string }[];

export type TextSectionType = {
    heading?: string;
    body: TextSectionBodyType[];
}

export const textSections: TextSectionType[] = [
    {
        heading: "How I work",
        body: [
            "I care about clarity — in interfaces, in code, and in how I work with people.",
            "I help teams fix slow, confusing, or broken UIs, and I help new projects get started with clean foundations. That means thoughtful structure, good dev experience, and design systems that scale.",
            "If you want me on your team as a developer, I'm only proficient in Next.js, React Native, and Flutter."
        ]
    },
    {
        heading: "What it's like to work with me",
        body: [
            "I work best with people who want clarity, momentum, and a bit of calm. I'm fast, I communicate well, and I won't disappear on you.",
            "You'll always know what I'm working on and why."
        ]
    },
    {
        heading: "Clients and industries",
        body: [
            "I've worked with teams in fintech, internal tools, SaaS platforms, and early-stage startups.",
            "I work with startups and product teams who care about doing things right.",
            "Most of my clients come back or refer me to others."
        ]
    },
    {
        heading: "What I don't work on",
        body: [
            "I aim to build things that are ethical, useful, and aligned with my principles.",
            "For that reason, I don't take on projects that involve:",
            [
                {
                    text: "Gambling, betting, or lottery",
                },
                {
                    text: "Conventional finance involving interest",
                },
                {
                    text: "Adult content, pornography, or sexually explicit platforms",
                },
                {
                    text: "Alcohol, vaping, recreational drugs",
                },
                {
                    text: "Weapons, arms, or military-related technologies",
                },
                {
                    text: "Surveillance tech, spyware, or unethical monitoring tools",
                },
                {
                    text: "Crypto, NFTs, or speculative digital assets",
                },
                {
                    text: "Hatred, division, or oppression",
                }
            ]
        ]
    },
    // {
    //     heading: "I'm easy to talk to",
    //     body: [
    //         "If you've got a clear scope, that's great. But even if you have just a fuzzy idea, I'm happy to chat.",
    //         "You can reach me here:",
    //         [
    //             {
    //                 text: env.socialLinks.linkedin,
    //                 icon: '/linkedin.svg'
    //             },
    //             {
    //                 text: env.email,
    //                 icon: '/email.svg'
    //             },
    //             {
    //                 text: env.phone,
    //                 icon: '/phone.svg'
    //             },
    //         ]
    //     ]
    // }
];