export type Service = {
  title: string;
  sections: {
    overview: string[];
    whyMe: {
      title: string;
      description: string;
    }[];
    process: {
      title: string;
      description: string;
    }[];
    pricing: {
      title: string;
      description: string;
      price: number;
    }[];
  };
};

export const services: {
  web: Service;
  mobile: Service;
  design: Service;
} = {
  web: {
    title: "Web Development",
    sections: {
      overview: [
        "I design and build responsive, scalable, and high-performance websites using modern technologies like Next.js, React, and Node.js.",
        "My focus is on creating websites that drive business growth by being fast, SEO-friendly, and optimized for conversions.",
      ],
      whyMe: [
        {
          title: "Proven Expertise",
          description:
            "2+ years of experience delivering high-quality websites that prioritize speed and user experience.",
        },
        {
          title: "Custom Solutions",
          description: "Every website is tailored to meet your business goals.",
        },
        {
          title: "SEO and Performance",
          description:
            "Your site will be optimized for search engines and fast load times.",
        },
        {
          title: "Ongoing Support",
          description:
            "I provide post-launch support to ensure your site evolves with your needs.",
        },
      ],
      process: [
        {
          title: "Consultation",
          description: "Understanding your business, goals, and vision.",
        },
        {
          title: "Design",
          description: "Creating a custom design that aligns with your brand.",
        },
        {
          title: "Development",
          description: "Building the site with performance and SEO in mind.",
        },
        {
          title: "Testing",
          description: "Ensuring everything works smoothly on all devices.",
        },
        {
          title: "Launch & Support",
          description: "Deploying your site and offering ongoing maintenance.",
        },
      ],
      pricing: [
        {
          title: "Basic",
          description: "For small, static websites.",
          price: 1500,
        },
        {
          title: "Standard",
          description:
            "For dynamic websites with multiple pages and integrations.",
          price: 3000,
        },
        {
          title: "Custom",
          description: "Tailored for large-scale, feature-rich websites.",
          price: 0, // Contact for pricing
        },
      ],
    },
  },
  mobile: {
    title: "Mobile Development",
    sections: {
      overview: [
        "I develop sleek, fast, and cross-platform mobile applications using Flutter.",
        "Whether you need an Android or iOS app, I ensure the user experience is smooth and that the app is optimized for performance.",
      ],
      whyMe: [
        {
          title: "Cross-Platform Expertise",
          description:
            "I build apps for both iOS and Android using one codebase, saving you time and money.",
        },
        {
          title: "UI/UX Focused",
          description:
            "My apps are designed with user experience at the forefront.",
        },
        {
          title: "Performance Optimization",
          description:
            "Your app will load quickly, run smoothly, and handle user traffic efficiently.",
        },
        {
          title: "App Store Ready",
          description:
            "I handle app publishing and ensure everything meets platform guidelines.",
        },
      ],
      process: [
        {
          title: "Discovery",
          description: "Understanding your app's functionality and user needs.",
        },
        {
          title: "Wireframing & Design",
          description: "Designing an intuitive user interface.",
        },
        {
          title: "Development",
          description:
            "Building your app with attention to speed and responsiveness.",
        },
        {
          title: "Testing & QA",
          description:
            "Thorough testing across multiple devices and OS versions.",
        },
        {
          title: "Launch & Maintenance",
          description: "Publishing to app stores and ongoing support.",
        },
      ],

      pricing: [
        {
          title: "Simple App",
          description: "For basic apps with limited functionality.",
          price: 2000,
        },
        {
          title: "Standard App",
          description: "For apps with moderate complexity, multiple features.",
          price: 5000,
        },
        {
          title: "Advanced App",
          description: "For large-scale apps with complex features.",
          price: 0, // Custom pricing
        },
      ],
    },
  },
  design: {
    title: "UI/UX Design",
    sections: {
      overview: [
        "I craft intuitive and visually appealing designs that not only look great but deliver a seamless user experience.",
        "I focus on both the look (UI) and the feel (UX) to ensure your users have a great time interacting with your product.",
      ],
      whyMe: [
        {
          title: "Design Excellence",
          description:
            "Expertise in creating designs that are both beautiful and functional.",
        },
        {
          title: "User-Centric Approach",
          description:
            "Every design is based on user research and behavior to ensure engagement.",
        },
        {
          title: "End-to-End Service",
          description:
            "From wireframing to final designs, I handle the entire design process.",
        },
        {
          title: "Cross-Platform Consistency",
          description:
            "I ensure a consistent look and feel across web and mobile.",
        },
      ],
      process: [
        {
          title: "Discovery & Research",
          description: "Understanding user needs and your business goals.",
        },
        {
          title: "Wireframing",
          description:
            "Creating a layout and structure for your app or website.",
        },
        {
          title: "High-Fidelity Design",
          description:
            "Crafting pixel-perfect designs that align with your brand.",
        },
        {
          title: "Prototyping & Feedback",
          description: "Interactive prototypes for user testing and feedback.",
        },
        {
          title: "Handoff",
          description:
            "Providing final designs ready for development with all assets.",
        },
      ],
      pricing: [
        {
          title: "Basic UI/UX",
          description: "For small apps or websites.",
          price: 1000,
        },
        {
          title: "Complete UI/UX",
          description: "For full-scale applications or websites.",
          price: 3000,
        },
        {
          title: "Custom Design",
          description: "Tailored to complex, multi-platform projects.",
          price: 0, // Contact for pricing
        },
      ],
    },
  },
};
