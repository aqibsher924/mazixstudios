import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { engagements, getProject } from "@/lib/site";
import { PageCta, PageHero } from "@/components/site/page-hero";

export const metadata: Metadata = {
  title: "Engagements | Mazix Studios",
  description:
    "A small number of engagements Mazix can describe in public. Most client systems remain private.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        kicker="Engagements"
        title="Work the company can name."
        body="Most systems Mazix runs are private. These are engagements we are able to describe. They are not a catalogue of every internal task."
      />
      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-2">
        {engagements.map((slug) => {
          const project = getProject(slug);
          if (!project) return null;
          return (
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
          );
        })}
      </section>
      <PageCta />
    </>
  );
}
