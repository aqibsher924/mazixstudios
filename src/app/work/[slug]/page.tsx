import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/site";
import { PageCta } from "@/components/site/page-hero";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Work — Mazix Studios" };
  return {
    title: `${project.title} — Mazix Studios`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <header className="border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:grid-cols-2 lg:items-end">
          <div>
            <Link href="/work" className="section-label hover:text-foreground">
              Work
            </Link>
            <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              {project.meta}
            </p>
            <h1 className="headline-serif mt-3 text-[clamp(2.4rem,6vw,4.2rem)] leading-[1.02]">
              {project.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {project.summary}
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border">
            <Image
              src={project.image}
              alt={project.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-10">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              The problem
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {project.challenge}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              What we built
            </h2>
            <ul className="mt-4 space-y-3">
              {project.built.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <aside className="h-fit rounded-3xl border border-border bg-card p-7">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Stack
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </section>
      <PageCta />
    </>
  );
}
