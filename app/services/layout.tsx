import Logo from "@/components/Logo";
import { NavLink } from "@/components/NavLink";
import BackToHomeLink from "../BackToHomeLink";
import Loader from "../Loader";

function Services({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex flex-col justify-center items-center gap-16 py-16 w-full">
        <Logo />

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
          className="px-12 page flex flex-col gap-12 md:gap-0 md:grid md:grid-cols-3 w-full max-w-screen-lg"
          id="serviceDetails"
        >
          {children}
        </div>

        <BackToHomeLink />
      </main>
      <Loader bodySelector="body" />
    </>
  );
}

export default Services;
