import Link from "next/link";
import { services } from "@/lib/site";
import { SectionMarker } from "@/components/ui/section-marker";

export function Services() {
  return (
    <section className="py-20 sm:py-28" id="services">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionMarker id="01" title="The company" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2 className="headline-serif max-w-3xl text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]">
            Seven practices. <span className="text-accent">One operating company.</span>
          </h2>
          <Link
            href="/services"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-medium hover:border-border-strong"
          >
            View all practices
          </Link>
        </div>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted">
          Mazix is hired to own a system, not to decorate a slide. Each practice
          below is a line of delivery, staffed and run as part of the same company.
        </p>
        <ul className="mt-12 grid gap-3 md:grid-cols-2">
          {services.map((service, index) => (
            <li key={service.slug} className={index === 0 ? "md:col-span-2" : ""}>
              <Link
                href={`/services/${service.slug}`}
                className="card-hover group block h-full rounded-3xl border border-border bg-card p-7 shadow-card"
              >
                <p className="font-mono text-[11px] tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className={`mt-4 font-semibold tracking-tight ${index === 0 ? "text-3xl" : "text-xl"}`}>
                  {service.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {service.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
