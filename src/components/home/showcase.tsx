"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/section-marker";

const work = [
  {
    title: "Enterprise AR/MR workflow platform",
    category: "Spatial · AI · Cloud",
    description:
      "Glasses-native guidance, peripheral camera perception, human validation dashboards, and live APIs on managed AWS — built as one system.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "VR training & simulation suites",
    category: "Quest · Unity · Multiplayer",
    description:
      "High-fidelity training environments for healthcare, automotive, and research partners — from single-user simulations to networked scenarios.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Full-stack product platforms",
    category: "Web · AWS · Media",
    description:
      "Secure media delivery, authentication, admin tooling, and infrastructure designed to scale without rewrites.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80",
  },
];

export function Showcase() {
  return (
    <section className="border-t border-border py-20 sm:py-28 lg:py-32" id="work">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="08" title="Selected work" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="headline-serif mt-10 max-w-2xl text-[clamp(1.9rem,4.5vw,2.9rem)] leading-[1.15]">
            Seeing is <em className="not-italic text-accent">believing.</em>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Representative engagements across XR, AI, and cloud. Many client
            projects run under NDA — ask us for a relevant walkthrough.
          </p>
        </motion.div>
        <div className="mt-14 space-y-6 sm:space-y-8">
          {work.map((item, i) => (
            <motion.article
              key={item.title}
              className={`card-hover shadow-card grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="group relative min-h-[15rem] sm:min-h-[18rem] lg:min-h-[20rem]">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {item.category}
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-[1.7rem]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
