import Link from "next/link";
import { services } from "@/lib/site";

export function PracticeScene() {
  return (
    <section className="mx-auto max-w-6xl px-3 py-4 sm:px-4" id="services">
      <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div className="glass-slab">
          <p className="section-label">Practices</p>
          <h2 className="headline-serif mt-4 text-[clamp(2rem,4vw,3.2rem)] leading-[1.02]">
            Seven lines. One company.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
            A client can hire one line or the full path, from the device in the room to the cloud that stores the session.
          </p>
          <Link href="/services" className="btn-glow mt-8 w-full sm:w-auto">
            View the practices
          </Link>
        </div>
        <ol className="grid gap-2">
          {services.map((service, index) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="block rounded-2xl border border-border bg-card p-4 sm:p-5"
              >
                <span className="flex items-start justify-between gap-3">
                  <span className="min-w-0 text-base font-semibold leading-snug sm:text-lg">
                    {service.title}
                  </span>
                  <span className="shrink-0 font-mono text-[11px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </span>
                <span className="mt-2 block text-sm leading-relaxed text-muted">{service.summary}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
