"use client";

import { motion } from "framer-motion";
import { SectionMarker } from "@/components/ui/section-marker";

const groups = [
  {
    title: "Spatial & XR",
    items: [
      "Unity 2022/2023 · URP",
      "OpenXR · Meta XR SDK",
      "Quest · PICO · SteamVR",
      "Vuforia · RealWear",
      "XR Interaction Toolkit",
    ],
  },
  {
    title: "AI & Vision",
    items: [
      "Computer vision pipelines",
      "Gemini · LLMs · VLMs",
      "Speech STT / TTS",
      "Whisper · Vosk",
      "AI copilots",
    ],
  },
  {
    title: "Cloud & Backend",
    items: [
      "AWS EC2 · Lambda · EB",
      "S3 · RDS · Aurora",
      "Route 53 · ACM · IAM",
      "Node · Python · PHP",
      "REST · JWT · Webhooks",
    ],
  },
  {
    title: "Web & Product",
    items: [
      "Next.js · React",
      "Firebase · PlayFab",
      "MySQL · Admin UIs",
      "Multiplayer · Photon",
      "CI/CD · Monitoring",
    ],
  },
];

export function StackGrid() {
  return (
    <section
      className="border-t border-border bg-surface/30 py-20 sm:py-28 lg:py-32"
      id="stack"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="07" title="Technology" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="headline-serif mt-10 max-w-3xl text-[clamp(1.9rem,4.5vw,2.9rem)] leading-[1.15]">
            A connected ecosystem —{" "}
            <em className="not-italic text-accent">not a single</em> framework.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            We choose tools for reliability and fit, then integrate them into
            one coherent architecture your team can own.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 sm:gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              className="card-hover shadow-card rounded-2xl border border-border bg-card p-7 sm:p-8"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {g.title}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-surface px-3.5 py-2 text-[13px] text-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
