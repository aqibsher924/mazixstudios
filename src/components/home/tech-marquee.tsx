const items = [
  "Unity · URP · OpenXR",
  "Meta Quest · PICO · SteamVR",
  "Computer Vision · VLMs · LLMs",
  "Gemini · Whisper · Speech AI",
  "AWS · Lambda · Elastic Beanstalk",
  "Next.js · React · Node.js",
  "Python · Flask · REST APIs",
  "Photon · Multiplayer XR",
  "MySQL · Aurora · Firebase",
  "AR Glasses · Spatial Tracking",
];

export function TechMarquee() {
  const doubled = [...items, ...items];
  return (
    <section
      className="marquee-wrap border-y border-border bg-surface/50 py-5"
      aria-label="Technologies we work with"
    >
      <div className="marquee-fade overflow-hidden">
        <ul className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap px-5">
          {doubled.map((item, i) => (
            <li
              key={`${item}-${i}`}
              className="flex items-center gap-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
              aria-hidden={i >= items.length}
            >
              {item}
              <span className="text-accent" aria-hidden>
                ·
              </span>
            </li>
          ))}
        </ul>
      </div>
      <p className="sr-only">Technologies: {items.join(", ")}</p>
    </section>
  );
}
