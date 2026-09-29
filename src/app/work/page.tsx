import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/site";
import { PageCta, PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Work — Mazix Studios",
  description:
    "Selected Mazix projects across VR training, XR products, guided AR, and cloud video platforms.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Work"
        title="Selected projects."
        body="A sample of systems we have designed and built. Many client engagements stay private. These are ones we can describe."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-2">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className="card-hover shadow-card overflow-hidden rounded-3xl border border-border bg-card"
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
            <div className="p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                {project.meta}
              </p>
              <h2 className="mt-2 text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
            </div>
          </Link>
        ))}
      </section>
      <PageCta />
    </>
  );
}
