"use client";

import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/section-marker";

const columns = [
  {
    tag: "01 — Fragmentation",
    title: "Too many vendors, one broken experience.",
    body: "XR in one shop, backend in another, AI as an afterthought — integration cost explodes and ownership disappears.",
    chips: ["Siloed teams", "Slow handoffs", "Version drift"],
  },
  {
    tag: "02 — Complexity",
    title: "Modern products span hardware, vision, and cloud.",
    body: "Cameras, headsets, live APIs, and compliance-ready infrastructure rarely share a roadmap unless someone owns the full picture.",
    chips: ["Edge + cloud", "Real-time AI", "Ops at scale"],
  },
  {
    tag: "03 — Velocity",
    title: "Demos are easy. Production is the work.",
    body: "Without senior engineering across stacks, pilots stall before they reach users, metrics, or revenue.",
    chips: ["Pilot purgatory", "Tech debt", "Lost IP"],
  },
];

export function Challenge() {
  return (
    <section className="border-t border-border py-20 sm:py-28 lg:py-32" id="challenge">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="02" title="The challenge" />
        <motion.h2
          className="headline-serif mt-10 max-w-3xl text-[clamp(1.9rem,4.5vw,2.9rem)] leading-[1.15]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          Great products need{" "}
          <em className="not-italic text-accent">one coherent</em> technical
          system.
        </motion.h2>
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          {columns.map((col, i) => (
            <motion.div
              key={col.tag}
              className="card-hover shadow-card flex flex-col rounded-2xl border border-border bg-card p-7 sm:p-8"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {col.tag}
              </p>
              <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight">
                {col.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {col.body}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {col.chips.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] text-muted-foreground"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
