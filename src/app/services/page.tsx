import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/site";
import { PracticeMosaic } from "@/components/site/practice-mosaic";
import { PageCta, PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Services — Mazix Studios",
  description:
    "XR, spatial computing, full-stack AI, models, vision, and cloud. Each practice opens into its own builds.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Every practice, in the same grid."
        body="Some niches have two builds, some three, some five. Open a tile for the project. The layout is the one you just left."
      />
      <div className="mx-auto max-w-6xl space-y-20 px-5 py-16 sm:px-8">
        {services.map((service, index) => (
          <section key={service.slug}>
            <div className="mb-5 flex items-end justify-between gap-4 border-b border-border pb-4">
              <div>
                <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")} · {service.works.length} builds
                </p>
                <h2 className="headline-serif mt-2 text-3xl sm:text-4xl">
                  <Link href={`/services/${service.slug}`} className="hover:text-accent">
                    {service.title}
                  </Link>
                </h2>
              </div>
            </div>
            <PracticeMosaic slugs={service.works} />
          </section>
        ))}
      </div>
      <PageCta />
    </>
  );
}
