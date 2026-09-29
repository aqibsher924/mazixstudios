import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/lib/site";

export function PracticeMosaic({ slugs }: { slugs: readonly string[] }) {
  const cards = slugs
    .map((slug) => getProject(slug))
    .filter((item) => item !== undefined);

  return (
    <div
      className={
        cards.length <= 2
          ? "grid grid-cols-1 gap-3 sm:grid-cols-2"
          : cards.length === 3
            ? "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
            : "grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2"
      }
    >
      {cards.map((project, index) => {
        const feature = cards.length >= 3 && index === 0;
        const pair = cards.length <= 2;
        return (
          <Link
            key={project.slug}
            href={`/work/${project.slug}`}
            className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${
              feature
                ? "min-h-[22rem] sm:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-[36rem]"
                : pair
                  ? "min-h-[22rem]"
                  : "min-h-[16rem]"
            }`}
          >
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
              sizes={feature || pair ? "(max-width: 1024px) 100vw, 50vw" : "25vw"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 transition duration-500 group-hover:from-black/85" />
            <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/70">
                {project.meta}
              </p>
              <p className={`mt-1 font-semibold tracking-tight ${feature || pair ? "text-2xl" : "text-lg"}`}>
                {project.title}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
