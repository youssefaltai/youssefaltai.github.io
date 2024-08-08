import Link from "next/link";
import { LogoWithSubheading } from "../components/Logo";
import { PropsWithChildren } from "react";
import { email, phone } from "@/contact";
import { GitHub, Instagram, LinkedIn } from "../components/Icons";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center py-16 px-responsive h-min gap-8 bg-neutral-50 px-4 [&_*]:text-neutral-600">
      <div className="w-full max-w-screen-2xl px-responsive flex flex-col justify-between items-start gap-8">
        <nav className="flex flex-col md:flex-row gap-8">
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
        </nav>
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="w-full flex flex-col justify-start items-start gap-2">
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
    <section className="flex flex-col gap-2">
      <h2 className="text-lg font-bold">{title}</h2>
      {children}
    </section>
  );
}
