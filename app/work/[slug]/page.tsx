import { notFound } from "next/navigation";
import PageTemplate from "@/components/PageTemplate";
import { projects, type Project } from "@/lib/work";
import { env, pageUrl } from "@/lib/env";
import Image from "next/image";
import PrimaryButtonLink from "@/components/Button/ButtonLink/PrimaryButtonLink";
import ContactSection from "@/components/ContactSection";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((project: Project) => project.slug === slug);
    if (!project) return {};
    return {
        title: `${project.title} | Youssef al-Tai`,
        description: project.blurb,
        openGraph: {
            url: pageUrl(`/work/${project.slug}`),
            type: "website",
            title: `${project.title} | Youssef al-Tai`,
            description: project.blurb,
            images: [pageUrl(`/images/og/${project.slug}.jpg`)],
            siteName: env.name,
        },
        twitter: {
            card: "summary_large_image",
            domain: env.siteUrl.replace(/^https?:\/\//, ''),
            url: pageUrl(`/work/${project.slug}`),
            title: `${project.title} | Youssef al-Tai`,
            description: project.blurb,
            images: [pageUrl(`/images/og/${project.slug}.jpg`)],
        },
    };
}

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function ProjectDetails({ params }: Props) {
    const { slug } = await params;
    const project = projects.find((project: Project) => project.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <PageTemplate title={project.title}>
            <div className="w-full max-w-4xl">
                {/* Hero with immediate context */}
                <div className="mb-12">
                    <div className="flex items-center gap-3 text-sm text-gray-600 mb-4">
                        <span>{project.client}</span>
                        <span>•</span>
                        <span>{project.date}</span>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        {project.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {project.links.map((link, index) => (
                            <PrimaryButtonLink
                                key={index}
                                href={link.url}
                                external
                            >
                                {link.label}
                            </PrimaryButtonLink>
                        ))}
                    </div>
                </div>

                {/* Problem only */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
                    <p className="text-gray-700 leading-relaxed">
                        {project.challenge}
                    </p>
                </div>

                {/* Role and Impact in a flowing layout */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">What I Built</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">My Role</h3>
                            <div className="space-y-3">
                                {project.role.map((role, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-spring-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-gray-700 leading-relaxed">{role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact</h3>
                            <div className="space-y-3">
                                {project.impact.map((impact, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <span className="w-2 h-2 bg-spring-400 rounded-full mt-2 flex-shrink-0"></span>
                                        <span className="text-gray-700 leading-relaxed">{impact}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech stack as a bridge */}
                <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Tech</h2>
                    <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                            <span key={index} className="bg-spring-100 text-spring-700 px-3 py-1 rounded-sm text-sm font-medium">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Visual payoff - the final product */}
                {project.images && project.images > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: project.images }).map((_, index) => {
                                const imagePath = `/images/projects/${project.slug}/gallery/${index + 1}.jpg`;
                                return (
                                    <div
                                        key={index}
                                        className="rounded-sm overflow-hidden flex items-center justify-center bg-gray-100"
                                        style={{ aspectRatio: "1024/640", width: "100%" }}
                                    >
                                        <Image
                                            src={imagePath}
                                            alt={`${project.title} screenshot ${index + 1}`}
                                            width={1024}
                                            height={640}
                                            className="object-cover w-full h-full"
                                            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                <ContactSection />
            </div>
        </PageTemplate>
    );
} 