import { notFound } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import { projectsBuiltFromScratch, projectsBuiltWithTeams, type Project } from "@/lib/work";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectDetails({ params }: Props) {
    const { slug } = await params;
    const allProjects = [...projectsBuiltFromScratch, ...projectsBuiltWithTeams];
    const project = allProjects.find((project: Project) => project.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <PageTemplate
            title={project.name}
            headTitle={project.name}
            headDescriptionContent={project.description}
            headOgImage={`/images/og/${project.slug}.jpg`}
            headOgUrl={`/work/${project.slug}`}
        >
            <div className="flex flex-col gap-6 md:gap-8 w-full max-w-2xl">
                <div className="flex flex-col gap-4 md:gap-6">
                    <div className="bg-spring-50 border border-spring-200 rounded-sm p-4 md:p-6">
                        <div className="flex items-start gap-3 md:gap-4">
                            <div className="w-10 h-10 md:w-12 md:h-12 bg-spring-400 rounded-full flex items-center justify-center flex-shrink-0">
                                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-xl md:text-2xl font-bold text-spring-800 mb-2">Work in Progress</h2>
                                <p className="text-spring-700 mb-4 text-sm md:text-base">
                                    I&apos;m currently working on presenting this project in detail. The case study and project details are being prepared.
                                </p>
                                <div className="bg-white border border-spring-200 rounded-sm p-3 md:p-4">
                                    <h3 className="font-medium text-spring-800 mb-2 text-sm md:text-base">What&apos;s coming:</h3>
                                    <ul className="text-xs md:text-sm text-spring-700 space-y-1">
                                        <li className="flex items-center gap-2">
                                            <span className="text-spring-400">•</span>
                                            Detailed project overview and goals
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-spring-400">•</span>
                                            Technical implementation details
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-spring-400">•</span>
                                            Design decisions and process
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <span className="text-spring-400">•</span>
                                            Results and impact
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-800">Project Overview</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {project.description}
                        </p>

                        <div>
                            <h4 className="font-medium text-gray-800 mb-2">Role</h4>
                            <span className="bg-spring-100 text-spring-700 px-3 py-1 rounded-sm text-sm border border-spring-200">
                                {project.role}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </PageTemplate>
    );
} 