import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services } from "@/lib/site";
import { PageCta } from "@/components/site/page-hero";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service | Mazix Studios" };
  return {
    title: `${service.title} | Mazix Studios`,
    description: service.summary,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();


  return (
    <>
      <header className="hero-mesh border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
          <Link href="/services" className="section-label hover:text-foreground">
            Services
          </Link>
          <h1 className="headline-serif mt-5 max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02]">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {service.lead}
          </p>
        </div>
      </header>
      <section className="mx-auto grid max-w-6xl items-stretch gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            What is included
          </h2>
          <ul className="mt-6 space-y-3">
            {service.includes.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed sm:text-base">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-full rounded-3xl border border-border bg-card p-7">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Typical stack
          </h2>
          <ul className="mt-6 flex flex-wrap content-start gap-2">
            {service.stack.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border bg-surface px-3 py-2 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <PageCta />
    </>
  );
}
