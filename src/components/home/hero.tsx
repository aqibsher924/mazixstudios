"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
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
    <section className="hero-mesh relative overflow-hidden">
      <div className="grid-pattern absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid min-h-[88vh] max-w-6xl items-center gap-12 px-5 pb-16 pt-32 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
        <div>
          <p className="section-label mb-6">Mazix Studios · Lahore</p>
          <h1 className="headline-serif text-[clamp(2.6rem,6.5vw,5rem)] leading-[0.98]">
            Systems for the
            <span className="block">physical world.</span>
          </h1>
          <div className="mt-8 h-16 overflow-hidden sm:h-14">
            <AnimatePresence mode="wait">
              <motion.p
                key={focus[index]}
                className="text-xl font-medium text-accent sm:text-2xl"
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                {focus[index]}
              </motion.p>
            </AnimatePresence>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            One studio across that sequence: the headset, the models, and the
            cloud they run on. Built as systems, not as separate demos.
          </p>
          <div className="mt-8 flex gap-2" aria-hidden>
            {focus.map((item, itemIndex) => (
              <span
                key={item}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  itemIndex === index ? "w-8 bg-accent" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white hover:brightness-110"
            >
              Start a project
            </Link>
            <Link
              href="/services"
              className="glass inline-flex min-h-11 items-center justify-center rounded-full border border-border px-7 py-3.5 text-sm font-medium"
            >
              See the sequence
            </Link>
          </div>
        </div>
        <ol className="shadow-card rounded-3xl border border-border bg-card p-3">
          {focus.map((item, itemIndex) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => setIndex(itemIndex)}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition-colors ${
                  itemIndex === index ? "bg-accent-soft text-foreground" : "text-muted"
                }`}
              >
                <span className="font-mono text-[11px] text-accent">
                  {String(itemIndex + 1).padStart(2, "0")}
                </span>
                {item}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
