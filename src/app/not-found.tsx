import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-5 pt-28 sm:px-8">
      <p className="section-label">404</p>
      <h1 className="headline-serif mt-4 text-5xl">That page is not here.</h1>
      <p className="mt-4 text-muted">
        The link may be old. The work, services, and contact pages are still up.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
      >
        Back home
      </Link>
    </section>
  );
}
