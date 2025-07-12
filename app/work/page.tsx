import PageTemplate from "@/components/PageTemplate";
import { Project, projectsBuiltFromScratch, projectsBuiltWithTeams } from "@/lib/work";
import Image from "next/image";
import Link from "next/link";

export default function Work() {
    return (
        <PageTemplate title="What I've built">
            <ProjectSection
                title={"Built from scratch"}
                projects={projectsBuiltFromScratch}
            />
            <ProjectSection
                title={"Built with teams"}
                projects={projectsBuiltWithTeams}
            />
        </PageTemplate>
    );
}

type ProjectSectionProps = { title: string; projects: Project[]; };
function ProjectSection({ title, projects }: ProjectSectionProps) {
    return (
        <div className="w-full flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, i) => (<ProjectCard key={i} project={project} />))}
            </div>
        </div>
    );
}

type ProjectCardProps = { project: Project };
function ProjectCard({ project: { name, role, logo, slug } }: ProjectCardProps) {
    return (
        <Link href={`work/${slug}`}>
            <div className="w-full flex flex-col bg-white border border-gray-200 hover:bg-white hover:shadow rounded-sm transition-all duration-300">
                <div className="h-48 md:h-72 flex flex-col justify-center items-center border-b border-gray-200">
                    <Image
                        alt={name}
                        src={logo}
                        width={96}
                        height={96}
                        priority
                    />
                </div>
                <div className="flex flex-col p-4">
                    <h3 className="font-bold">{name}</h3>
                    <h4 className="text-gray-400">{role}</h4>
                </div>
            </div></Link>
    );
}