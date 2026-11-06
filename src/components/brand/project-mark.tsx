const paths: Record<string, string> = {
  "meditation-vr":
    "M12 30c6 5 18 5 24 0M16 22a12 12 0 0 1 16 0M24 14v3",
  "vr-car-painting":
    "M10 30h6l3-6h14l3 6h6v6H10v-6zM16 36v3M32 36v3",
  "ultra-boom-xr":
    "M14 34h12v10H14zM26 26h12v10H26zM20 16h12v10H20z",
  oralsim: "M20 16c-6 4-8 12-4 20 4 6 12 6 16 0 4-8 2-16-4-20-2 4-6 4-8 0z",
  "cloudxr-stream":
    "M18 28c0-6 14-6 14 0v6c0 6-14 6-14 0v-6zM12 24c2-6 8-8 12-8M40 24c-2-6-8-8-12-8M14 40c4 4 20 4 24 0",
  "guided-ar":
    "M10 28h8l3-4h10l3 4h8v6H10v-6zM18 28v2M34 28v2",
  "teach-me-robot":
    "M22 14h8v4h-8zM18 22h16v14H18zM16 28H10M42 28h-6M22 40v6M30 40v6",
};

export function ProjectMark({
  slug,
  className = "h-8 w-8",
}: {
  slug: string;
  className?: string;
}) {
  const d = paths[slug] ?? "M12 32h24M32 12v24";

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <rect width="48" height="48" rx="14" fill="rgba(8,12,20,0.55)" />
      <path
        d={d}
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}
