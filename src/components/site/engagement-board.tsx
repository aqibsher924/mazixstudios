import Image from "next/image";
import Link from "next/link";
import { ProjectMark } from "@/components/brand/project-mark";
import { engagements, getProject } from "@/lib/site";

export function EngagementBoard() {
  const projects = engagements
    .map((slug) => getProject(slug))
    .filter((project) => project !== undefined);
  const [featured, ...rest] = projects;
  if (!featured) return null;

  return (
    <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
      <article className="overflow-hidden rounded-[1.6rem] border border-border bg-card">
        <div className="relative aspect-[16/10]">
          <Image
            src={featured.image}
            alt={featured.alt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex gap-4 p-5 sm:p-6">
          <ProjectMark slug={featured.slug} className="h-11 w-11 shrink-0" />
          <div className="min-w-0">
            <p className="text-[10px] uppercase tracking-[0.16em] text-muted">{featured.meta}</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight sm:text-2xl">{featured.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{featured.summary}</p>
            <Link href={`/work/${featured.slug}`} className="mt-4 inline-flex text-sm font-medium text-accent">
              Read the engagement
            </Link>
          </div>
        </div>
      </article>

      <ul className="grid gap-3">
        {rest.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/work/${project.slug}`}
              className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-start gap-3 rounded-2xl border border-border bg-card p-4"
            >
              <ProjectMark slug={project.slug} className="h-11 w-11" />
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-[0.16em] text-muted">
                  {project.meta}
                </span>
                <span className="mt-1 block text-base font-semibold leading-snug">{project.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-muted">{project.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
