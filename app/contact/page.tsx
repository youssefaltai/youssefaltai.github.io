import { Metadata } from "next";
import ContactPage from "./ContactPage";
import Loader from "../Loader";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "Get in touch with me. Let's work together!",
};

export default () => (
  <>
    <Loader scrollToTop />
    <ContactPage />;
  </>
);
