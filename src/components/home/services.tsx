import Link from "next/link";
import { services } from "@/lib/site";
import { PracticeMosaic } from "@/components/site/practice-mosaic";
import { SectionMarker } from "@/components/ui/section-marker";

const preview = ["meditation-vr", "guided-ar", "procedure-copilot", "step-reader", "teach-me-robot"];

export function Services() {
  return (
    <section className="py-20 sm:py-28" id="services">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="01" title="What we build" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="headline-serif max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]">
            A practice, then the <span className="text-accent">work inside it.</span>
          </h2>
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
          >
            See more
          </Link>
        </div>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          A short look across the studio. The full set, two or three or five
          builds depending on the niche, is on the next page in this same grid.
        </p>
        <div className="mt-10">
          <PracticeMosaic slugs={preview} />
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {services.length} practices · open any tile, or see the full grid
        </p>
      </div>
    </section>
  );
}
