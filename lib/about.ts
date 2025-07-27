export type TextSectionBodyType = string | { text: string, icon?: string }[];

export type TextSectionType = {
    heading?: string;
    body: TextSectionBodyType[];
}

export const textSections: TextSectionType[] = [
    {
        body: [
            "I'm a software engineer focused on building MVPs that scale.",
            "I believe good software should feel simple and work the way people expect all while still looking beautiful."
        ],
    },
    {
        heading: "How I work",
        body: [
            "I care about clarity. In what I build, in how I code, and in how I work with people.",
            "I help teams build MVPs that can grow with their business, and I help new projects get started with clean foundations.",
            "That means thoughtful architecture, good dev experience, and systems that scale from day one.",
            "If you need me on your team as a developer, I'm using Next.js, React Native, and Flutter.",
        ]
    },
    {
        heading: "What it's like to work with me",
        body: [
            "You'll always know what I'm working on and why. I deliver in small, steady pieces. Not in big, late drops."
        ]
    },
    {
        heading: "Clients and industries",
        body: [
            "My experience spans multiple industries including service marketplaces, logistics, education, developer tools, nonprofits, travel, and more.",
            "I work with teams who value high standards.",
            "Most of my clients come back or refer me."
        ]
    },
    {
        heading: "What I don't work on",
        body: [
            "I do not work on anything that's not aligned with my principles.",
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