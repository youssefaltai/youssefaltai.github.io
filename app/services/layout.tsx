import { NavLink } from "@/components/NavLink";
import Loader from "../Loader";
import { Metadata } from "next";
import Page from "@/components/Page";

export const metadata: Metadata = {
  title: "My Services",
  description: "What I can do for you.",
};

function Services({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Loader />
      <Page>
        <nav>
          <ul className="flex flex-col md:flex-row gap-6 md:gap-12 items-center">
            <li>
              <NavLink href="/services/web" bodySelector="#serviceDetails">
                Web Development
              </NavLink>
            </li>
            <li>
              <NavLink href="/services/mobile" bodySelector="#serviceDetails">
                Mobile Development
              </NavLink>
            </li>
            <li>
              <NavLink href="/services/design" bodySelector="#serviceDetails">
                UI/UX Design
              </NavLink>
            </li>
          </ul>
        </nav>

        <div
          className="trans px-12 flex flex-col gap-12 md:gap-0 md:grid md:grid-cols-3 w-full max-w-screen-lg"
          id="serviceDetails"
        >
          {children}
        </div>
      </Page>
    </>
  );
}

export default Services;
