import PrimaryButtonLink from "@/components/Button/ButtonLink/PrimaryButtonLink";
import ContactSection from "@/components/ContactSection";
import PageTemplate from "@/components/PageTemplate";
import { Service, services } from "@/lib/services";

export default function Services() {
    return (
        <PageTemplate title="How I can help you">
            <p>
                Whether you’re rescuing a project that needs fixing or starting fresh and want to do it right, I’ll make sure your product feels fast, clear, and genuinely easy to use.
            </p>

            <ServicesSection
                services={services}
            />

            <ContactSection />
        </PageTemplate>
    )
}



type ServicesSectionProps = { services: Service[] };
function ServicesSection({ services }: ServicesSectionProps) {
    return (
        <div className="w-full flex flex-col gap-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, i) => (<ServiceCard key={i} service={service} />))}
            </div>
        </div>

    );
}

type ServiceCardProps = { service: Service };
function ServiceCard({ service: { name, description, slug } }: ServiceCardProps) {
    return (
        <div className="flex flex-col bg-white hover:shadow border border-gray-200 rounded-sm gap-3 md:gap-4 py-4 px-4 md:px-5 transition-all duration-300">
            <div className="flex flex-col flex-grow gap-1 md:gap-2">
                <h3 className="text-xl md:text-3xl">{name}</h3>
                <p className="text-sm md:text-base">{description}</p>
            </div>
            <PrimaryButtonLink href={`/request?service=${slug}`} className="w-full sm:w-fit">
                Request service
            </PrimaryButtonLink>
        </div>
    );
}