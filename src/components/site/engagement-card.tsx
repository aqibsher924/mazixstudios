import Image from "next/image";
import Link from "next/link";
import { ProjectMark } from "@/components/brand/project-mark";

export function EngagementCard({
  slug,
  title,
  meta,
  image,
  alt,
  summary,
  large = false,
}: {
  slug: string;
  title: string;
  meta: string;
  image: string;
  alt: string;
  summary?: string;
  large?: boolean;
}) {
  return (
    <Link
      href={`/work/${slug}`}
      className={`group relative block overflow-hidden rounded-[1.7rem] border border-white/15 ${
        large ? "min-h-[26rem] sm:min-h-[34rem]" : "min-h-[16rem] sm:min-h-[18rem]"
      }`}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition duration-700 group-hover:scale-[1.04]"
        sizes={large ? "(max-width: 768px) 100vw, 60vw" : "(max-width: 768px) 100vw, 40vw"}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
      <div className="scene-caption absolute inset-x-3 bottom-3 flex items-center gap-3 p-3 sm:inset-x-4 sm:bottom-4 sm:p-4">
        <ProjectMark slug={slug} className="h-11 w-11 shrink-0" />
        <div className="min-w-0 text-white">
          <p className="truncate text-[10px] uppercase tracking-[0.16em] text-white/70">{meta}</p>
          <h3 className={`font-semibold tracking-tight ${large ? "text-2xl" : "text-base leading-tight"}`}>
            {title}
          </h3>
          {large && summary ? (
            <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-white/75">{summary}</p>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
