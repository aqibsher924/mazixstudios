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
    <header className="px-3 pt-28 sm:px-5 sm:pt-32">
      <div className="glass-slab mx-auto max-w-6xl">
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
    <section className="px-3 py-10 sm:px-5">
      <div className="glass-slab mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="headline-serif text-3xl">Tell us what you need built.</h2>
          <p className="mt-2 text-sm text-muted">
            A short note on the device, the user, and the deadline is enough to start.
          </p>
        </div>
        <Link
          href="/contact"
          className="btn-glow"
        >
          Start a project
        </Link>
      </div>
    </section>
  );
}
