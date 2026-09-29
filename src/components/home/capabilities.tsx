"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/section-marker";

const layers = [
  {
    name: "Experience layer",
    title: "Spatial products people feel in the moment.",
    points: [
      "AR/VR/MR applications for Quest, PICO, and enterprise wearables",
      "Interaction systems, multiplayer, and trainer–trainee workflows",
      "Zero-friction UX designed for operators — not slide decks",
    ],
    image:
      "https://images.unsplash.com/photo-1622979135225-d2fe26975025?auto=format&fit=crop&w=1200&q=80",
    alt: "Person wearing a virtual reality headset",
  },
  {
    name: "Intelligence layer",
    title: "Vision and AI that understand real work.",
    points: [
      "Computer vision pipelines and camera-based perception",
      "LLM / VLM copilots, speech interfaces, and multimodal systems",
      "Human-in-the-loop validation and operational analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    alt: "Abstract visualization of an artificial intelligence network",
  },
  {
    name: "Infrastructure layer",
    title: "Cloud and backend built to scale with you.",
    points: [
      "AWS architecture — compute, storage, serverless, and networking",
      "Web applications, dashboards, APIs, auth, and integrations",
      "Deployment, monitoring, and secure data governance",
    ],
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    alt: "Earth from space representing global cloud infrastructure",
  },
];

export function Capabilities() {
  return (
    <section
      className="border-t border-border bg-surface/30 py-20 sm:py-28 lg:py-32"
      id="capabilities"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="03" title="The solution" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="headline-serif mt-10 max-w-3xl text-[clamp(1.9rem,4.5vw,2.9rem)] leading-[1.15]">
            Three layers.{" "}
            <em className="not-italic text-accent">One delivery</em> team.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            The best operational platforms unify guidance, intelligence, and
            data. Mazix brings that same unity to your entire product stack.
          </p>
        </motion.div>

        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-24">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.name}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.65 }}
            >
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <Image
                  src={layer.image}
                  alt={layer.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
                <p className="absolute bottom-5 left-5 font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">
                  {layer.name}
                </p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent lg:hidden">
                  {layer.name}
                </p>
                <h3 className="mt-2 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:mt-0">
                  {layer.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {layer.points.map((pt) => (
                    <li
                      key={pt}
                      className="flex gap-3.5 text-sm leading-relaxed text-muted sm:text-base"
                    >
                      <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
