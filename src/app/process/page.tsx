import type { Metadata } from "next";
import { processSteps } from "@/lib/site";
import { PageCta, PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Process — Mazix Studios",
  description:
    "How Mazix takes a product from discovery to a deployed XR, AI, and cloud system.",
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        kicker="Process"
        title="Four stages. One owner."
        body="We do not hand a prototype to another vendor for the backend. Discovery, architecture, build, and launch stay on the same team."
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-5 py-16 sm:px-8 md:grid-cols-2">
        {processSteps.map((step) => (
          <article
            key={step.n}
            className="rounded-3xl border border-border bg-card p-7"
          >
            <p className="font-mono text-[11px] text-accent">Stage {step.n}</p>
            <h2 className="mt-4 text-2xl font-semibold">{step.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{step.body}</p>
          </article>
        ))}
      </section>
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="headline-serif text-3xl">What we need from you</h2>
          <ul className="mt-6 grid gap-3 text-sm text-muted sm:grid-cols-2">
            {[
              "Who uses it, and what they do today",
              "The device: Quest, glasses, phone, or web",
              "Data you already have, and what must stay private",
              "A date the first real user should touch it",
            ].map((item) => (
              <li key={item} className="rounded-2xl border border-border px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <PageCta />
    </>
  );
}
