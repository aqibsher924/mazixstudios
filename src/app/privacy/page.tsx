import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Privacy | Mazix Studios",
  description: "How Mazix Studios handles information sent through this website.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Privacy"
        title="What this site keeps."
        body="This site is a static company page. It does not run accounts, and it does not sell visitor data."
      />
      <section className="mx-auto max-w-3xl space-y-6 px-5 py-16 text-sm leading-relaxed text-muted sm:px-8 sm:text-base">
        <p>
          If you email hello@mazixstudios.com, or use the contact form, that
          message opens in your own email app. We receive only what you choose
          to send, and we use it to reply about the project.
        </p>
        <p>
          The host, Cloudflare, may keep standard request logs such as IP
          address and browser type so the site can be delivered and protected.
          We do not add advertising trackers.
        </p>
        <p>
          Project files, designs, and client data shared after an engagement
          starts are covered by the agreement for that work, not by this page.
        </p>
        <p>
          Questions about this page can go to hello@mazixstudios.com.
        </p>
      </section>
    </>
  );
}
