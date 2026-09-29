"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/section-marker";

const domains = [
  {
    n: "01",
    label: "XR & Spatial",
    title: "Immersive training, simulation, and field tools",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "02",
    label: "AI & Computer Vision",
    title: "Copilots, perception, and physical-world intelligence",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "03",
    label: "Cloud & Platforms",
    title: "AWS-native backends, APIs, and admin experiences",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  },
  {
    n: "04",
    label: "Web & Product",
    title: "Modern web apps, dashboards, and integrations",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  },
];

export function Domains() {
  return (
    <section
      className="border-t border-border bg-surface/30 py-20 sm:py-28 lg:py-32"
      id="domains"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="05" title="Where we excel" />
        <motion.h2
          className="headline-serif mt-10 max-w-3xl text-[clamp(1.9rem,4.5vw,2.9rem)] leading-[1.15]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          One partner for work that{" "}
          <em className="not-italic text-accent">cannot afford</em> to break.
        </motion.h2>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {domains.map((d, i) => (
            <motion.div
              key={d.n}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                href="#contact"
                className="card-hover group relative flex min-h-[17rem] flex-col justify-end overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card sm:min-h-[20rem] sm:p-8"
              >
                <Image
                  src={d.image}
                  alt=""
                  fill
                  className="object-cover opacity-45 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-55"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/15" />
                <div className="relative">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    {d.n} — {d.label}
                  </p>
                  <h3 className="mt-3 max-w-sm text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
                    {d.title}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-accent">
                    Discuss this domain
                    <span
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
