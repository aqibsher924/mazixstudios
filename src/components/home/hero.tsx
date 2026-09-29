"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "XR & spatial computing",
  "AI & computer vision",
  "cloud & DevOps",
  "web & mobile products",
  "full-stack systems",
];

const ease = [0.22, 1, 0.36, 1] as const;

function RotatingWord() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <span className="relative block overflow-hidden pb-1">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="block text-accent"
          initial={{ y: "70%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-70%", opacity: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Hero() {
  return (
    <section className="hero-mesh relative overflow-hidden">
      <div className="grid-pattern absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex min-h-svh max-w-6xl flex-col justify-center px-5 pb-24 pt-32 sm:px-8 sm:pt-36">
        <motion.p
          className="section-label mb-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          § 00.0 — Complete IT solution studio
        </motion.p>

        <motion.h1
          className="headline-serif max-w-5xl text-[clamp(2.6rem,7.5vw,5.25rem)] leading-[1.05] text-foreground"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease }}
        >
          Complete IT solutions for
          <RotatingWord />
          <span className="block">delivered end to end.</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease }}
        >
          Mazix Studios designs, builds, and ships technology as one coherent
          system — AR/VR/MR experiences, AI &amp; computer vision, cloud
          infrastructure, and modern web platforms. One team, every layer,
          production-grade.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease }}
        >
          <Link
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#01f792] px-7 py-3.5 text-sm font-semibold text-[#121420] transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
          >
            Start a project
            <span aria-hidden>↗</span>
          </Link>
          <Link
            href="#capabilities"
            className="glass inline-flex min-h-11 items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-all duration-200 hover:border-border-strong active:scale-[0.98]"
          >
            Explore capabilities
          </Link>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 sm:flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          aria-hidden
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <span className="relative h-10 w-px overflow-hidden bg-border">
            <span className="animate-scroll-dot absolute left-0 top-0 h-3 w-px bg-accent" />
          </span>
        </motion.div>
      </div>
    </section>
  );
}
