import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";
import { PageCta, PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Practices | Mazix Studios",
  description:
    "How Mazix Studios delivers spatial computing, full-stack AI, language and vision models, and cloud operations.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Practices"
        title="What the company is accountable for."
        body="These are operating lines, not a menu of freelance tasks. A client can hire one line or the full system. The same people stay on the work."
      />
      <div className="mx-auto max-w-6xl space-y-4 px-5 py-16 sm:px-8">
        {services.map((service, index) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="card-hover grid gap-4 rounded-3xl border border-border bg-card p-7 shadow-card md:grid-cols-[7rem_1fr]"
          >
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{service.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                {service.lead}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <PageCta />
    </>
  );
}
