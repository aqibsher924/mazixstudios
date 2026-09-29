"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fields } from "@/lib/site";
import { SectionMarker } from "@/components/ui/section-marker";

export function Industries() {
  return (
    <section className="border-t border-border py-20 sm:py-28" id="industries">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="02" title="Where it lands" />
        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <h2 className="headline-serif text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]">
            The same stack, <span className="text-accent">different rooms.</span>
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Spatial computing and XR sit beside the industries that need them:
            clinics, plants, classrooms, yards, and teams that cannot afford a
            wrong step.
          </p>
        </div>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {fields.map((field, index) => (
            <motion.li
              key={field.title}
              className={
                index === 0
                  ? "sm:col-span-2 lg:col-span-2"
                  : ""
              }
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(index * 0.04, 0.24) }}
            >
              <Link
                href="/industries"
                className="card-hover group flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-6 shadow-card sm:min-h-40"
              >
                <span className="font-mono text-[11px] tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="mt-8">
                  <h3 className={`font-semibold tracking-tight ${index === 0 ? "text-2xl" : "text-lg"}`}>
                    {field.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{field.body}</p>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
