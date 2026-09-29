"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/site";
import { SectionMarker } from "@/components/ui/section-marker";

export function Projects() {
  return (
    <section className="border-t border-border py-20 sm:py-28" id="work">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionMarker id="03" title="Selected work" />
            <h2 className="headline-serif mt-8 max-w-3xl text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.1]">
              Projects, <span className="text-accent">not slide decks.</span>
            </h2>
          </div>
          <Link href="/work" className="text-sm text-accent">
            All projects
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="shadow-card block overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                    {project.meta}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {project.summary}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
