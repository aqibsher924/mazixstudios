"use client";

import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/section-marker";

export function Contact() {
  return (
    <section
      className="border-t border-border bg-surface/30 py-20 sm:py-28 lg:py-32"
      id="contact"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="09" title="Partner with us" />
        <motion.div
          className="shadow-card relative mt-12 overflow-hidden rounded-3xl border border-border bg-card px-7 py-14 sm:px-12 sm:py-20 lg:px-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65 }}
        >
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
            aria-hidden
          />
          <div className="relative">
            <h2 className="headline-serif max-w-2xl text-[clamp(2rem,5vw,3.25rem)] leading-[1.12]">
              Let&apos;s build something{" "}
              <em className="not-italic text-accent">worth shipping.</em>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Tell us about your product, timeline, and stack. We&apos;ll
              respond with a clear path — scope, architecture, and how Mazix
              owns delivery end to end.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
              >
                Start a project
                <span aria-hidden>↗</span>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex min-h-11 items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-border-strong active:scale-[0.98]"
              >
                Connect on LinkedIn
              </a>
            </div>
            <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Typical reply within 1–2 business days · NDA-friendly discovery
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
