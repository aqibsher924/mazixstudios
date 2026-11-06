import Link from "next/link";
import { fields } from "@/lib/site";

export function FieldScenes() {
  return (
    <section className="mx-auto max-w-6xl px-3 py-8 sm:px-4" id="industries">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="headline-serif text-[clamp(2rem,4vw,3.2rem)] leading-none">
          Where the work lands.
        </h2>
        <Link href="/industries" className="text-sm font-medium text-accent">
          All fields
        </Link>
      </div>
      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {fields.map((field) => (
          <li key={field.title} className="rounded-2xl border border-border bg-card p-5">
            <h3 className="text-base font-semibold leading-snug">{field.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{field.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
