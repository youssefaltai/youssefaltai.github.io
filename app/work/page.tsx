import PageTemplate from "@/components/PageTemplate";
import { Project, projects } from "@/lib/work";
import Image from "next/image";
import Link from "next/link";
import { env, pageUrl } from "@/lib/env";

export const metadata = {
    title: "Work | Youssef al-Tai",
    description: "See what Youssef al-Tai can do for you — real projects, real results. MVPs built to be clean, fast, and loved by users.",
    openGraph: {
        url: pageUrl('/work'),
        type: "website",
        title: "Work | Youssef al-Tai",
        description: "See what Youssef al-Tai can do for you — real projects, real results. MVPs built to be clean, fast, and loved by users.",
        images: [pageUrl('/images/og/og-image.jpg')],
        siteName: env.name,
    },
    twitter: {
        card: "summary_large_image",
        domain: env.siteUrl.replace(/^https?:\/\//, ''),
        url: pageUrl('/work'),
        title: "Work | Youssef al-Tai",
        description: "See what Youssef al-Tai can do for you — real projects, real results. MVPs built to be clean, fast, and loved by users.",
        images: [pageUrl('/images/og/og-image.jpg')],
    },
};

export default function Work() {
    return (
        <PageTemplate title="What I've built" >
            <ProjectSection projects={projects} />
        </PageTemplate>
    );
}

type ProjectSectionProps = { projects: Project[]; };
function ProjectSection({ projects }: ProjectSectionProps) {
    return (
        // <div className="w-full flex flex-col gap-3">
        //     <h2 className="text-2xl font-bold">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (<ProjectCard key={i} project={project} />))}
        </div>
        // </div>
    );
}

type ProjectCardProps = { project: Project };
function ProjectCard({ project: { title, blurb, slug } }: ProjectCardProps) {
    const thumbnail = `/images/projects/${slug}/thumbnail.jpg`
    return (
        <Link href={`work/${slug}`}>
            <div className="w-full flex flex-col bg-white border border-gray-200 hover:bg-white hover:shadow rounded-sm overflow-clip transition-all duration-300">
                <Image className="w-full border-b border-gray-200"
                    alt={title}
                    src={thumbnail}
                    width={480}
                    height={320}
                    priority
                />
                <div className="flex flex-col p-4">
                    <h3 className="font-bold">{title}</h3>
                    <h4 className="text-gray-400">{blurb}</h4>
                </div>
            </div></Link>
    );
}