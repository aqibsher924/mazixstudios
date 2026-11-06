import type { Metadata } from "next";
import { EngagementBoard } from "@/components/site/engagement-board";
import { PageCta } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Engagements | Mazix Studios",
  description:
    "A small number of engagements Mazix can describe in public. Most client systems remain private.",
};

export default function WorkPage() {
  return (
    <>
      <section className="px-3 pt-28 sm:px-4 sm:pt-32">
        <div className="glass-slab mx-auto max-w-6xl">
          <p className="section-label">Engagements</p>
          <h1 className="headline-serif mt-4 max-w-3xl text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02]">
            Work the company can name.
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Most systems stay private. These seven are the ones we can put on the table.
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-6xl">
          <EngagementBoard />
        </div>
      </section>
      <PageCta />
    </>
  );
}
