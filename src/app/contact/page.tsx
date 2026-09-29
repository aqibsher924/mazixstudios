import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";

export const metadata: Metadata = {
  title: "Contact | Mazix Studios",
  description:
    "Start a project with Mazix Studios. We reply within one to two business days.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Start with the job, not a pitch deck."
        body="Send the device, the user, and the deadline. We reply within one to two business days with a straight read on fit and a proposed next step."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-6 text-sm">
          <div>
            <p className="section-label">Email</p>
            <a
              href="mailto:hello@mazixstudios.com"
              className="mt-2 block text-lg font-medium hover:text-accent"
            >
              hello@mazixstudios.com
            </a>
          </div>
          <div>
            <p className="section-label">Studio</p>
            <p className="mt-2 text-muted">Lahore, Pakistan · Remote worldwide</p>
          </div>
          <div>
            <p className="section-label">Useful in the first note</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>What the person is trying to do</li>
              <li>Headset, glasses, web, or all three</li>
              <li>Whether AI or cameras are in scope</li>
              <li>When a first build needs to exist</li>
            </ul>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
