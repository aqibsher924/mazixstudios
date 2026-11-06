"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { focus } from "@/lib/site";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % focus.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-3 pb-8 pt-28 sm:px-5 sm:pt-32">
      <div className="glass-slab mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="section-label">AI systems · Spatial computing · Cloud</p>
          <h1 className="headline-serif mt-5 text-[clamp(2.5rem,6vw,4.6rem)] leading-[0.98]">
            Systems for the
            <span className="block">physical world.</span>
          </h1>
          <div className="mt-6 h-12 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={focus[index]}
                className="text-xl font-medium text-accent sm:text-2xl"
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {focus[index]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Mazix Studios designs and runs the full system: spatial products,
            the models that guide them, and the cloud they depend on.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-glow">
              Start a project
            </Link>
            <Link href="/services" className="btn-glass">
              Explore the company
            </Link>
          </div>
        </div>

        <div className="glass-slab relative min-h-[22rem] overflow-hidden !p-0">
          <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -right-8 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="relative flex h-full min-h-[22rem] flex-col justify-between p-6 sm:p-8">
            <Logo className="h-14 w-14" />
            <div>
              <p className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                One company.
                <span className="block text-accent">Every layer.</span>
              </p>
              <ol className="mt-5 flex flex-wrap gap-2">
                {focus.map((item, itemIndex) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => setIndex(itemIndex)}
                      className={`rounded-full border px-3 py-1.5 text-left text-xs transition-colors ${
                        itemIndex === index
                          ? "border-transparent bg-foreground text-background"
                          : "border-border bg-card text-muted"
                      }`}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ol>
            </div>
            <p className="self-end rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted">
              Lahore · Remote worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
