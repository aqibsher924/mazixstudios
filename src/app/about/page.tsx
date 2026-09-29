import type { Metadata } from "next";
import { PageCta, PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "About | Mazix Studios",
  description:
    "Mazix Studios is a Lahore technology studio for XR, spatial computing, AI, cloud, and web products.",
};

const facts = [
  { label: "Base", value: "Lahore, Pakistan" },
  { label: "Reach", value: "Remote, worldwide" },
  { label: "XR practice", value: "5+ years" },
  { label: "Model", value: "One team, full stack" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About"
        title="A company built for systems that leave the screen."
        body="Mazix Studios is the company behind the spatial product, the intelligence around it, and the cloud it runs on. The practice began in interactive software, matured through VR and AR, and now includes vision, copilots, and production infrastructure."
      />
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p>
            Clients come here when a Unity shop is too narrow and a general
            software firm has never shipped on a headset. The useful version of
            this work is the join: cameras into models, models into glasses, and
            glasses into an API someone can audit.
          </p>
          <p>
            Engagements are hands-on. Architecture, implementation, and the
            conversation with stakeholders stay with the same people. We write
            in plain language, show running builds, and treat production as the
            goal from the first week.
          </p>
          <p>
            Mazix is based in Lahore and works with teams elsewhere. If the
            product has a device, a model, and a backend, it fits.
          </p>
        </div>
        <dl className="h-fit rounded-3xl border border-border bg-card p-7">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex items-baseline justify-between gap-4 border-b border-border py-4 first:pt-0 last:border-0 last:pb-0"
            >
              <dt className="text-sm text-muted">{fact.label}</dt>
              <dd className="text-sm font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>
      <PageCta />
    </>
  );
}
