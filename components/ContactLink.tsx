import { ContactLinkType } from "@/lib/contact";
import Image from "next/image";

type ContactLinkProps = {
  link: ContactLinkType
}

export default function ContactLink({ link: { icon, label, url } }: ContactLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={url}
      className="flex justify-center items-center gap-2 p-2 rounded-md hover:text-spring-400 transition-all duration-300"
    >
      <Image priority src={icon} width={24} height={24} alt={label} />
      <span className="text-sm ">
        {label}
      </span>
    </a>
  );

}
