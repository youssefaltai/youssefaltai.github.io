export type Project = {
    name: string;
    description: string;
    logo: string;
    role: string;
    slug: string;
}

export const projectsBuiltFromScratch: Project[] = [
    {
        name: 'Home Service',
        description: `Platform connecting luxury customers in MENA with top home service providers—technicians, plumbers, carpenters, cleaners, and at-home spa & beauty experts. I was responsible for the entire frontend, from initial concept and UX/UI design to deployment and publishing. I built two separate apps: one for customers and one for workers, each tailored to their unique workflows and needs. I also designed and implemented the design system from scratch, ensuring a consistent, high-end user experience across both apps.`,
        role: 'Frontend Engineer',
        logo: '/projects/home-service.png',
        slug: 'home-service',
    },
    {
        name: 'Eram Express',
        description: 'A package shipping and delivery platform designed for fast, reliable, and trackable express shipments. I laid down the project structure, set up a clean environment, and led the junior dev team to help them get started effectively. I provided ongoing support, technical advice, and code reviews to ensure high-quality development and smooth collaboration.',
        role: 'Frontend Engineer / Team Lead',
        logo: '/projects/eram-express.png',
        slug: 'eram-express',
    },
    {
        name: 'Consult With Young',
        description: `A consulting platform supporting faith-based and nonprofit organizations with training, technical assistance, grant writing, and nonprofit formation services. I completely revamped their website, migrating it from a basic Mailchimp site to a fully custom, extensible, and flexible solution with a beautiful new design and additional features tailored to their needs.`,
        role: 'Full Stack Engineer',
        logo: '/projects/consult-with-young.png',
        slug: 'consult-with-young'
    },
];

export const projectsBuiltWithTeams: Project[] = [
    {
        name: 'Meridian',
        description: "All-in-one collaborative platform for travel professionals, streamlining itinerary creation, client management, and personalized proposals with AI-powered tools. As a core frontend engineer, I worked closely with product, design, and backend teams to deliver a seamless user experience. The platform features real-time collaboration, drag-and-drop itinerary building, integrated supplier management, and automated document generation. I contributed to building reusable UI components, optimizing performance for large datasets, and implementing robust state management. My work included integrating third-party APIs, ensuring accessibility, and supporting rapid iteration based on user feedback.",
        role: 'Frontend Engineer',
        logo: '/projects/meridian.png',
        slug: 'meridian'
    },
    {
        name: "FCAI CU SIS",
        description: "A comprehensive educational management platform built specifically for the Faculty of Computers and Artificial Intelligence, Cairo University (Student Information System). Developed as a graduation project, the system was designed in close collaboration with all stakeholders—students, staff, and administrators—through extensive research and interviews to ensure it met their unique needs. It features 20+ backend microservices and 4 frontend portals, supporting real-time chat, email notifications, and dynamic bylaw management.",
        role: 'Full Stack Engineer & Tech Lead',
        logo: '/projects/students-information-system.png',
        slug: 'students-information-system'
    }
];