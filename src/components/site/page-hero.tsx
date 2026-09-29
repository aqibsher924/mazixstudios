import Link from "next/link";

export function PageHero({
  kicker,
  title,
  body,
}: {
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <header className="hero-mesh border-b border-border">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pt-40">
        <p className="section-label">{kicker}</p>
        <h1 className="headline-serif mt-5 max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] leading-[1.02]">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {body}
        </p>
      </div>
    </header>
  );
}

export function PageCta() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <h2 className="headline-serif text-3xl">Tell us what you need built.</h2>
          <p className="mt-2 text-sm text-muted">
            A short note on the device, the user, and the deadline is enough to start.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
