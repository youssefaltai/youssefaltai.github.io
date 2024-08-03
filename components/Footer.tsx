import Link from "next/link";
import { LogoWithSubheading } from "./Logo";
import { PropsWithChildren } from "react";
import { email, phone } from "@/contact";
import { GitHub, Instagram, LinkedIn } from "./Icons";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center bg-neutral-50 py-8 px-4">
      <div className="container flex-col gap-16">
        <div className="flex justify-between">
          <FooterCategory title="Services">
            <ul>
              <li>
                <Link href="/services">Mobile Development</Link>
              </li>
              <li>
                <Link href="/services">Full-Stack Development</Link>
              </li>
              <li>
                <Link href="/services">Design</Link>
              </li>
              <li>
                <Link href="/services">Mentoring</Link>
              </li>
            </ul>
          </FooterCategory>
          <FooterCategory title="Mentoring">
            <ul>
              <li>
                <Link href="/services/mentoring">Courses</Link>
              </li>
              <li>
                <Link href="/services/mentoring">Packages</Link>
              </li>
              <li>
                <Link href="/services/mentoring">Offers</Link>
              </li>
            </ul>
          </FooterCategory>
          <FooterCategory title="Work">
            <ul>
              <li>
                <Link href="/work">Home Service</Link>
              </li>
              <li>
                <Link href="/work">Students Information System</Link>
              </li>
            </ul>
          </FooterCategory>
          <FooterCategory title="Contact">
            <ul>
              <li>
                <Link href={`mailto:${email}`}>{email}</Link>
              </li>
              <li>
                <Link href={`tel:${phone}`}>{phone}</Link>
              </li>
            </ul>
          </FooterCategory>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex flex-col justify-start items-start max-w-sm gap-2">
            <LogoWithSubheading />
            <p className="text-sm">
              I provide exceptional care and attention, ensuring you achieve
              your goals with the utmost support and expertise.
            </p>
          </div>
          <div className="flex gap-2">
            <Link href={"https://www.instagram.com/youssef.altai"}>
              <Instagram />
            </Link>
            <Link href={"https://www.linkedin.com/in/youssefaltai"}>
              <LinkedIn />
            </Link>
            <Link href={"https://github.com/youssefaltai"}>
              <GitHub />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterCategoryProps = PropsWithChildren<{
  title: string;
}>;
function FooterCategory({ children, title }: Readonly<FooterCategoryProps>) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </div>
  );
}
