import { ReactNode } from "react";

export type WhatIOfferType = {
  title: string;
  description: string;
};
export type HowItWorksType = {
  title: string;
  description: string;
};
export type WhyChooseMeType = {
  icon: ReactNode;
  title: string;
  description: string;
};
export type PricingType = {
  title: string;
  description: string;
  price: string;
  includes: string[];
};
export type ServiceType = {
  title: string;
  description: string;
  whatIOffer: WhatIOfferType[];
  howItWorks: HowItWorksType[];
  whyChooseMe: WhyChooseMeType[];
  pricing: PricingType[];
};

const whyChooseMe: WhyChooseMeType[] = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.666 22.6667L27.9993 28.0001"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 14.6667C4 20.5577 8.77563 25.3333 14.6667 25.3333C17.6173 25.3333 20.2881 24.1353 22.2192 22.1991C24.1436 20.2696 25.3333 17.6071 25.3333 14.6667C25.3333 8.77563 20.5577 4 14.6667 4C8.77563 4 4 8.77563 4 14.6667Z"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Attention to Detail",
    description:
      "I focus on every aspect of your app, from design to functionality.",
  },
  {
    icon: (
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M29.9987 11.8163C29.9987 13.8783 29.207 15.8588 27.7931 17.3238C24.5385 20.6974 21.3819 24.215 18.0058 27.4663C17.2319 28.2007 16.0042 28.1738 15.2638 27.4063L5.53704 17.3238C2.59703 14.2763 2.59703 9.3563 5.53704 6.30876C8.50595 3.23127 13.3426 3.23127 16.3115 6.30876L16.6651 6.67522L17.0184 6.30897C18.4419 4.83267 20.3806 4 22.4058 4C24.431 4 26.3695 4.83259 27.7931 6.30876C29.2071 7.77393 29.9987 9.75436 29.9987 11.8163Z"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Client-Centric Approach",
    description:
      "I work closely with you throughout the process to ensure your vision is realized.",
  },
  {
    icon: (
      <svg
        width="33"
        height="32"
        viewBox="0 0 33 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M27.0013 16.0001V7.58194C27.0013 7.42281 26.9381 7.2702 26.8256 7.15768L22.5104 2.84248C22.3978 2.72996 22.2452 2.66675 22.0861 2.66675H6.26797C5.9366 2.66675 5.66797 2.93538 5.66797 3.26675V28.7334C5.66797 29.0648 5.9366 29.3334 6.26797 29.3334H15.0013"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 13.3333H21.6667M11 8H16.3333M11 18.6667H15"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M27.668 27.3333L29.668 29.3333"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20.334 24C20.334 26.2091 22.1248 28 24.334 28C25.4405 28 26.442 27.5507 27.1662 26.8247C27.8878 26.1011 28.334 25.1027 28.334 24C28.334 21.7909 26.5431 20 24.334 20C22.1248 20 20.334 21.7909 20.334 24Z"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M21.668 2.66675V7.40008C21.668 7.73145 21.9366 8.00008 22.268 8.00008H27.0013"
          stroke="#2563EB"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Thorough Research",
    description:
      "I conduct in-depth research into the project requirements, target audience, and market trends to ensure your app meets and exceeds expectations.",
  },
];

export const mobileDevelopment: ServiceType = {
  title: "Mobile Development",
  description:
    "I specialize in mobile application development using Flutter, providing end-to-end solutions from design to deployment.",
  whatIOffer: [
    {
      title: "Custom Mobile App Development",
      description: "Tailored to your needs, from concept to launch.",
    },
    {
      title: "In-Depth Research",
      description:
        "With whatever you'd like—custom backend, third-party APIs, Firebase, etc.",
    },
    {
      title: "UI/UX Design",
      description: "Creating user-friendly and visually appealing designs.",
    },
    {
      title: "Complex State Management",
      description:
        "Using Riverpod, ensuring smooth and responsive app performance.",
    },
    {
      title: "Backend Integration",
      description:
        "With whatever you'd like—custom backend, third-party APIs, Firebase, etc.",
    },
    {
      title: "Publishing to App Stores",
      description:
        "Handling the submission process to Google Play Store and Apple's App Store.",
    },
  ],
  howItWorks: [
    {
      title: "Discovery & Requirements",
      description: "We'll discuss your needs and goals to outline the project.",
    },
    {
      title: "Design",
      description:
        "I'll create wireframes and design prototypes for your review.",
    },
    {
      title: "Development",
      description:
        "I'll build your app using Flutter, ensuring high performance and functionality.",
    },
    {
      title: "Testing & Feedback",
      description: "Thorough testing to ensure everything works perfectly.",
    },
    {
      title: "Launch & Support",
      description:
        "I'll publish the app and provide ongoing support as needed.",
    },
  ],
  whyChooseMe,
  pricing: [
    {
      title: "Basic",
      description: "Ideal for straightforward apps with limited features.",
      price: "$2,000 - $4,000 USD",
      includes: [
        "Basic UI/UX Design",
        "Simple Functionality",
        "Basic Backend Integration",
        "Publishing to App Stores",
        "Source Code",
      ],
    },
    {
      title: "Standard",
      description: "For more complex apps with additional features.",
      price: "$5,000 - $8,000 USD",
      includes: [
        "Custom UI/UX Design",
        "Advanced Functionality",
        "Extended Backend Integration",
        "Publishing to App Stores",
        "2 months of post-launch support",
        "Source Code",
      ],
    },
    {
      title: "Premium",
      description:
        "Tailored for large-scale apps with extensive features and research.",
      price: "Contact for pricing",
      includes: [
        "Extensive Research",
        "Comprehensive UI/UX Design",
        "Extensive Functionality",
        "Advanced Backend Integration",
        "Publishing to App Stores",
        "Ongoing post-launch support",
        "Source Code",
      ],
    },
  ],
};

export const fullStackDevelopment: ServiceType = {
  title: "Full-Stack Development",
  description:
    "I provide end-to-end solutions for web applications, covering both frontend and backend development.",
  whatIOffer: [
    {
      title: "Frontend Development",
      description:
        "Using React or Next.js to create responsive, performant and user-friendly interfaces.",
    },
    {
      title: "Backend Development",
      description:
        "Utilizing Node.js or Python to build efficient, scalable server-side solutions.",
    },
    {
      title: "Database Management",
      description:
        "Integration and management of databases to handle your data needs.",
    },
    {
      title: "UI/UX Design",
      description: "Creating user-friendly and visually appealing designs.",
    },
    {
      title: "API Integration",
      description:
        "Developing and integrating APIs to ensure smooth communication between different parts of your system.",
    },
    {
      title: "Deployment & Hosting",
      description:
        "Deployment to cloud platforms like GCP, AWS, or others, ensuring your application is accessible and reliable.",
    },
  ],
  howItWorks: [
    {
      title: "Discovery & Requirements",
      description: "We'll discuss your needs and goals to outline the project.",
    },
    {
      title: "Design & Planning",
      description:
        "I'll create wireframes and architecture, including tech stack and project roadmap.",
    },
    {
      title: "Development",
      description:
        "I'll build the frontend and backend, integrate APIs, and ensure everything works seamlessly.",
    },
    {
      title: "Testing & Feedback",
      description: "Thorough testing to ensure everything works perfectly.",
    },
    {
      title: "Deployment & Support",
      description: "I'll deploy the app and provide ongoing support as needed.",
    },
  ],
  whyChooseMe,
  pricing: [
    {
      title: "Basic",
      description: "Ideal for straightforward apps with limited features.",
      price: "$1,500 - $3,000 USD",
      includes: [
        "Basic web application with essential features",
        "Simple database setup",
        "Basic API integration",
        "Deployment to a cloud platform",
        "Source Code",
      ],
    },
    {
      title: "Standard",
      description: "For more complex apps with additional features.",
      price: "$3,500 - $7,000 USD",
      includes: [
        "More complex web application with multiple features",
        "Advanced database management and integrations",
        "Comprehensive API integration",
        "Deployment to a cloud platform ",
        "2 months of post-launch support",
        "Source Code",
      ],
    },
    {
      title: "Premium",
      description:
        "Tailored for large-scale apps with extensive features and research.",
      price: "Contact for pricing",
      includes: [
        "Extensive Research",
        "Comprehensive web application with advanced features and integrations",
        "Scalable database architecture",
        "Advanced API integration",
        "Deployment to a cloud platform ",
        "Ongoing post-launch support",
        "Source Code",
      ],
    },
  ],
};

export const design: ServiceType = {
  title: "UI/UX Design",
  description:
    "I create visually appealing and user-friendly designs that enhance the user experience and drive engagement.",
  whatIOffer: [
    {
      title: "UI Design",
      description:
        "Crafting visually appealing interfaces using Figma, ensuring consistency and brand alignment.",
    },
    {
      title: "UX Research",
      description:
        "Conducting user research and testing to inform design decisions and improve usability.",
    },
    {
      title: "Wireframing and Prototyping",
      description:
        "Creating wireframes and prototypes to visualize and test design concepts.",
    },
    {
      title: "Design Optimization",
      description:
        "Refining designs based on feedback and performance metrics to ensure the best user experience",
    },
  ],
  howItWorks: [
    {
      title: "Discovery & Requirements",
      description: "Understand your brand, goals, and target audience.",
    },
    {
      title: "Research & Strategy",
      description:
        "I will research the target audience, competitors, and industry trends to create a design strategy.",
    },
    {
      title: "Design & Prototype",
      description: "Create wireframes, prototypes, and final designs.",
    },
    {
      title: "Feedback & Revisions",
      description: "Gather feedback and make necessary revisions.",
    },
    {
      title: "Delivery & Support",
      description: "Provide final design files and support for implementation.",
    },
  ],
  whyChooseMe,
  pricing: [
    {
      title: "Basic",
      description: "Ideal for straightforward apps with limited features.",
      price: "$400 - $1,200 USD",
      includes: ["UI Design", "Basic UX Research", "Wireframing"],
    },
    {
      title: "Standard",
      description: "For more complex apps with additional features.",
      price: "$1,800 - $3,400 USD",
      includes: [
        "UI Design",
        "Advanced UX Research",
        "Wireframing and Prototyping",
        "Design Optimization",
      ],
    },
    {
      title: "Premium",
      description:
        "Tailored for large-scale apps with extensive features and research.",
      price: "$4,000 - $6,000 USD",
      includes: [
        "UI Design",
        "Comprehensive UX Research",
        "Wireframing and Prototyping",
        "Design Optimization",
        "Feedback & Revisions",
        "Delivery & Support",
      ],
    },
  ],
};

export const mentoring: ServiceType = {
  title: "Mentoring",
  description:
    "I offer courses, packages, and offers to help you learn and grow in your career.",
  whatIOffer: [
    {
      title: "Mentoring",
      description:
        "I offer courses, packages, and offers to help you learn and grow in your career.",
    },
    {
      title: "Courses",
      description:
        "I offer online courses on mobile development, web development, and design.",
    },
    {
      title: "Packages",
      description:
        "I offer mentoring packages to provide ongoing support and guidance.",
    },
    {
      title: "Offers",
      description:
        "I offer special offers and discounts on mentoring services.",
    },
  ],
  howItWorks: [
    {
      title: "Consultation",
      description:
        "I will discuss your goals, interests, and expectations to create a mentoring plan.",
    },
    {
      title: "Learning",
      description:
        "I will provide learning materials, resources, and exercises to help you improve your skills.",
    },
    {
      title: "Feedback",
      description:
        "I will provide feedback on your progress and help you overcome challenges.",
    },
    {
      title: "Support",
      description:
        "I will provide support and guidance to help you achieve your goals.",
    },
    {
      title: "Completion",
      description:
        "I will review your achievements and provide recommendations for future growth.",
    },
  ],
  whyChooseMe,
  pricing: [
    {
      title: "Basic",
      description:
        "I will provide a 1-hour mentoring session on a topic of your choice.",
      price: "$50",
      includes: [],
    },
    {
      title: "Standard",
      description:
        "I will provide a 3-hour mentoring package on a topic of your choice.",
      price: "$100",
      includes: [],
    },
    {
      title: "Premium",
      description:
        "I will provide a 5-hour mentoring package on a topic of your choice.",
      price: "$150",
      includes: [],
    },
  ],
};
