import { env, githubUrl, linkedInUrl, pageUrl } from '@/lib/env';
import type { Person, WithContext, Organization, ProfessionalService } from 'schema-dts';

const personJsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Youssef al-Tai",
    "url": env.siteUrl,
    "image": pageUrl('/images/me.jpeg'),
    "sameAs": [
        linkedInUrl,
        githubUrl,
    ],
    "jobTitle": "Frontend Engineer",
    "worksFor": {
        "@type": "Organization",
        "name": "Freelance"
    },
    "description": "Youssef al-Tai is a frontend engineer specializing in building user-friendly, performant web applications. He helps teams improve UI clarity, speed, and maintainability, and sets up strong foundations for new projects.",
    "email": env.email,
    "telephone": env.phone,
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "EG"
    },
    "knowsAbout": [
        "Frontend Development",
        "React",
        "Next.js",
        "TypeScript",
        "UI/UX Design",
        "Web Performance",
        "User Experience"
    ],
    "knowsLanguage": "English",
    "nationality": {
        "@type": "Country",
        "name": "Egypt"
    }
}

const organizationJsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Youssef al-Tai",
    "url": env.siteUrl,
    "logo": pageUrl('/images/me.jpeg'),
    "description": "Frontend engineering services specializing in React, Next.js, and user experience design. Building performant, maintainable web applications that users love.",
    "founder": {
        "@type": "Person",
        "name": "Youssef al-Tai"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": env.email,
        "telephone": env.phone
    },
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "EG",
        "addressLocality": "Cairo",
        "streetAddress": "Remote",
        "postalCode": "00000"
    },
    "sameAs": [
        linkedInUrl,
        githubUrl
    ],
    "serviceArea": {
        "@type": "Country",
        "name": "Worldwide"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Frontend Development Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Frontend Development",
                    "description": "Production-grade Next.js, React Native, or Flutter apps"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "UI Design",
                    "description": "Translating brand vision into polished, pixel-perfect interfaces"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "UX Research",
                    "description": "Understanding users through interviews, usability tests, and journey mapping"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Technical Consulting",
                    "description": "Code reviews, architecture audits, and developer tools guidance"
                }
            }
        ]
    }
}

// ProfessionalService schema that properly supports reviews
const professionalServiceJsonLd: WithContext<ProfessionalService> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Youssef al-Tai Frontend Engineering",
    "description": "Professional frontend engineering services including React, Next.js, Flutter, UI design, UX research, and technical consultancy",
    "url": env.siteUrl,
    "logo": pageUrl('/images/me.jpeg'),
    "image": pageUrl('/images/me.jpeg'),
    "telephone": env.phone,
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "addressCountry": "EG",
        "addressLocality": "Cairo",
        "streetAddress": "Remote",
        "postalCode": "00000"
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": env.email,
        "telephone": env.phone
    },
    "areaServed": {
        "@type": "Country",
        "name": "Worldwide"
    },
    "review": [
        {
            "@type": "Review",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "author": {
                "@type": "Person",
                "name": "Corae Young"
            },
            "reviewBody": "Thank you so much for your flexibility and suggestions to enhance my website and upcoming conference. It was great to continue working with you and I appreciate your detailed work and responsiveness to this project. It is truly appreciated, thank you!",
            "datePublished": "2024-01-01"
        }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "1"
    }
}

export default function JsonLd() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationJsonLd).replace(/</g, '\\u003c'),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(professionalServiceJsonLd).replace(/</g, '\\u003c'),
                }}
            />
        </>
    );
}