"use client";

import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/section-marker";

const pillars = [
  {
    n: "01",
    title: "End-to-end delivery",
    body: "Strategy, design, engineering, cloud, and launch — one accountable partner instead of fragmented vendors.",
  },
  {
    n: "02",
    title: "Integrated stacks",
    body: "Unity and OpenXR beside Node, Python, AWS, and modern web — architected to work together in production.",
  },
  {
    n: "03",
    title: "Production discipline",
    body: "Security, observability, and maintainability from day one — not bolted on after the demo.",
  },
];

export function IntroPillars() {
  return (
    <section className="py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="01" title="Introduction" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="headline-serif text-[clamp(1.9rem,4.5vw,2.9rem)] leading-[1.15]">
              One studio for{" "}
              <em className="not-italic text-accent">every layer</em> of your
              product.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              Clients come to Mazix when a single-stack agency is not enough.
              We combine spatial computing, applied AI, and enterprise-grade
              cloud so your product feels cohesive — in the headset, on the
              web, and in the data layer behind it.
            </p>
          </motion.div>
          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {pillars.map((p, i) => (
              <motion.article
                key={p.n}
                className="card-hover shadow-card rounded-2xl border border-border bg-card p-6 sm:p-7"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <p className="font-mono text-xs text-accent">{p.n}</p>
                <h3 className="mt-3 text-base font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {p.body}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
