"use client";

import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/section-marker";

const stages = [
  {
    stage: "Stage 01",
    title: "Discover",
    body: "We map goals, users, hardware, and constraints — then define an architecture every discipline can execute against.",
  },
  {
    stage: "Stage 02",
    title: "Build",
    body: "Parallel workstreams across XR, AI, and cloud with shared milestones, reviews, and demos you can show stakeholders.",
  },
  {
    stage: "Stage 03",
    title: "Launch & scale",
    body: "Hardening, deployment, documentation, and iteration — so the system keeps improving after the first release.",
  },
];

export function Process() {
  return (
    <section className="border-t border-border py-20 sm:py-28 lg:py-32" id="process">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="04" title="How it works" />
        <motion.h2
          className="headline-serif mt-10 max-w-2xl text-[clamp(1.9rem,4.5vw,2.9rem)] leading-[1.15]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          Align. Ship. <em className="not-italic text-accent">Compound.</em>
        </motion.h2>
        <div className="relative mt-14 grid gap-5 md:grid-cols-3 md:gap-6">
          <div
            className="absolute left-0 right-0 top-10 hidden h-px bg-border md:block"
            aria-hidden
          />
          {stages.map((s, i) => (
            <motion.article
              key={s.title}
              className="card-hover shadow-card relative rounded-2xl border border-border bg-card p-7 sm:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <span className="glass inline-flex h-9 items-center rounded-full border border-border px-4 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                {s.stage}
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
