"use client";

import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/section-marker";

const stats = [
  {
    label: "Years in XR & interactive",
    value: "5+",
    note: "From mobile games to enterprise spatial applications.",
  },
  {
    label: "Disciplines under one roof",
    value: "04",
    note: "XR, AI & vision, cloud & DevOps, web & product.",
  },
  {
    label: "Accountable team",
    value: "01",
    note: "One partner from architecture to launch : no handoffs.",
  },
  {
    label: "Production focus",
    value: "100%",
    note: "Security, scale, and maintainability as defaults.",
  },
];

export function Metrics() {
  return (
    <section className="border-t border-border py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="06" title="Why Mazix" />
        <motion.h2
          className="headline-serif mt-10 max-w-2xl text-[clamp(1.9rem,4.5vw,2.9rem)] leading-[1.15]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          Built for teams who need{" "}
          <em className="not-italic text-accent">senior execution.</em>
        </motion.h2>
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="border-t border-border pt-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {s.label}
              </p>
              <p className="headline-serif mt-3 text-5xl text-accent sm:text-6xl">
                {s.value}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.note}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
