import { AwsS3Bucket } from "@/lib";

export type ProjectLink = {
  title: string;
  url: string;
  image: string;
};
export type Project = {
  slug: string;
  title: string;
  role: string;
  description: string;
  image: string;
  links: ProjectLink[];
  responsibilities: string[];
  gallery: string[];
};

export function getProject(project: string): Project | undefined {
  const projectDetails = projects.find((p) => p.slug === project);
  return projectDetails;
}

export const projects: Project[] = [
  {
    slug: "meridian",
    title: "Meridian",
    description: "Built and maintained core UI components for Meridian, a B2B whitelabel platform for luxury travel professionals. Delivered pixel-perfect UIs, contributed to performance optimizations, and collaborated across teams in a complex multi-app monorepo using Bitbucket and Gitflow.",
    role: "Frontend Engineer",
    image: AwsS3Bucket.logo("Meridian+-+Logo.jpg"),
    links: [
      {
        title: "Official Website",
        url: "https://www.meridianverified.com/",
        image: AwsS3Bucket.other("Visit+Meridian.png"),
      },
    ],
    responsibilities: [
      "Building core components for an enterprise-level platform serving active customers in the US.",
      "Following version control and collaborative development best practices, using the Gitflow model and P2P code reviews, ensuring adherence to project standards.",
      "Designing technical diagrams, including UML class diagrams and sequence diagrams, to document and plan features and components.",
      "Participating in daily standup and sprint kickoff meetings, consistently meeting tight deadlines while delivering high-quality work.",
      "Contributing to UI enhancements, performance optimizations, and DX-focused architecture decisions.ocesses.",
    ],
    gallery: [
      AwsS3Bucket.gallery("meridian/Meridian+SS1.png"),
      AwsS3Bucket.gallery("meridian/Meridian+SS2.png"),
      AwsS3Bucket.gallery("meridian/Meridian+SS3.png"),
      AwsS3Bucket.gallery("meridian/Meridian+SS4.png"),
      AwsS3Bucket.gallery("meridian/Meridian+SS5.png"),
    ]
  },
  {
    slug: "home-service",
    title: "Home Service",
    role: "Mobile Engineer",
    description:
      "Led the frontend development of Home Service, a cross-platform mobile application connecting users with service providers in the MENA region.",
    image: AwsS3Bucket.logo("Home+Service+-+Logo.jpg"),
    links: [
      {
        title: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.eramgroupsa.home_service",
        image: AwsS3Bucket.other("Get+it+on+Google+Play.png"),
      },
      {
        title: "App Store",
        url: "https://apps.apple.com/eg/app/id6624303709",
        image: AwsS3Bucket.other("Download+on+the+App+Store.png"),
      },
    ],
    responsibilities: [
      "Designed and implemented the UI and UX for both mobile apps, ensuring a seamless and consistent user experience across platforms.",
      "Conducted user research specific to MENA region clients, adapting UX designs to improve usability and satisfaction.",
      "Collaborated closely with the backend team to integrate critical features such as live tracking, real-time notifications, and payment gateway systems.",
      "Published the mobile apps to the Google Play Store and Apple App Store, ensuring compliance with platform guidelines and managing regular updates.",
      "Optimized application performance, achieving a 30% reduction in load times through strategic frontend architecture and code optimizations.",
      "Led the team during a period without a project manager, conducting weekly meetings to ensure alignment on goals and timelines.",
      "Reviewed code and mentored junior developers, promoting best practices in code quality and development processes.",
    ],
    gallery: [
      AwsS3Bucket.gallery("home-service/Home+Service+-+Customer+Home.jpg"),
      AwsS3Bucket.gallery("home-service/Home+Service+-+Customer+Package.jpg"),
      AwsS3Bucket.gallery("home-service/Home+Service+-+Customer+Rating.jpg"),
      AwsS3Bucket.gallery("home-service/Home+Service+-+Worker+Home.jpg"),
      AwsS3Bucket.gallery("home-service/Home+Service+-+Worker+Order.jpg"),
      AwsS3Bucket.gallery("home-service/Home+Service+-+Worker+Map.jpg"),
    ],
  },
  {
    slug: "sis",
    title: "Students Information System",
    role: "Full-Stack Engineer",
    description:
      "Led the system architecture redesign and development of the Students Information System (SIS), a large-scale platform managing student information for Cairo University.",
    image: AwsS3Bucket.logo("SIS+-+Logo.jpg"),
    links: [
      {
        title: "Official Website",
        url: "https://fcai.cu.edu.eg/sis-student-information-system-e-community/",
        image: AwsS3Bucket.other("View+the+Official+Website.png"),
      },
    ],
    responsibilities: [
      "Developed multiple backend microservices using Express.js and MongoDB, ensuring scalability and efficient management of over 10,000 concurrent users.",
      "Built the entire frontend for the students' portal using Next.js, focusing on a responsive and user-friendly design that improved the overall student experience.",
      "Implemented critical features such as student registration, course enrollment, department specialization, and real-time chatting between students and staff.",
      "Collaborated with teammates on integrating customizable bylaw management, authentication, service requests, and statistics reporting functionalities into the system.",
      "Coordinated the deployment and continuous integration/continuous delivery (CI/CD) pipelines to ensure smooth updates and maintenance.",
      "Led technical decision-making for the system's scalability and performance, addressing peak usage loads during critical academic periods.",
    ],
    gallery: [
      AwsS3Bucket.gallery("sis/SIS+-+Course+Enrollment.jpg"),
      AwsS3Bucket.gallery("sis/SIS+-+Home.jpg"),
      AwsS3Bucket.gallery("sis/SIS+-+My+Courses.jpg"),
      AwsS3Bucket.gallery("sis/SIS+-+Affairs.jpg"),
      AwsS3Bucket.gallery("sis/SIS+-+Requests.jpg"),
      AwsS3Bucket.gallery("sis/SIS+-+Schedule.jpg"),
      AwsS3Bucket.gallery("sis/SIS+-+Stats.jpg"),
    ],
  },
];
