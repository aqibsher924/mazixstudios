import type { Metadata } from "next";
import { fields } from "@/lib/site";
import { PageCta, PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Fields — Mazix Studios",
  description:
    "Where Mazix works: XR, healthcare, manufacturing, automotive, research, energy, logistics, labs, and enterprise operations.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        kicker="Fields"
        title="Twelve rooms. One stack."
        body="The headset, the model, and the cloud do not change because the building does. What changes is the cost of a wrong step."
      />
      <section className="mx-auto grid max-w-6xl gap-3 px-5 py-16 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
        {fields.map((field, index) => (
          <article
            key={field.title}
            className={`rounded-3xl border border-border bg-card p-7 shadow-card ${
              index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
            }`}
          >
            <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className={`mt-6 font-semibold tracking-tight ${index === 0 ? "text-3xl" : "text-xl"}`}>
              {field.title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{field.body}</p>
          </article>
        ))}
      </section>
      <PageCta />
    </>
  );
}
