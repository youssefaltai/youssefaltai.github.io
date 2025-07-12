import Image from "next/image";
import { textSections, type TextSectionType } from "@/lib/about";
import PageTemplate from "@/components/PageTemplate";
import ContactSection from "@/components/ContactSection";

export default function About() {
    return (
        <PageTemplate title="Who I am">
            {textSections.map((textSection, i) => (<TextSection key={i} textSection={textSection} />))}
            <ContactSection />
        </PageTemplate>
    );
}

type TextSectionProps = { textSection: TextSectionType }
function TextSection({ textSection: { heading, body } }: TextSectionProps) {
    return (
        <div className="flex flex-col gap-3">
            {heading && <h2 className="text-2xl font-bold">{heading}</h2>}
            {body.map((paragraph, i) => (
                typeof paragraph === "string" ?
                    <p key={i}>{paragraph}</p> :
                    <ul key={i}>
                        {paragraph.map((item, j) => (
                            <p key={j} className="flex items-center gap-2">
                                {item.icon && <Image alt={item.text} src={item.icon} width={24} height={24} />}
                                {!item.icon && <span className="text-spring-400">&bull;</span>}
                                {item.text}
                            </p>
                        ))}
                    </ul>
            ))}
        </div>
    );
}