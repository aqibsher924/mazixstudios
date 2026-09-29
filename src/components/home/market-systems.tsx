import { marketSystems } from "@/lib/site";

export function MarketSystems() {
  const loop = [...marketSystems, ...marketSystems];
  return (
    <section className="border-y border-border bg-surface/50 py-8" aria-label="Systems running in the market">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="section-label">Running in the market</p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Production platforms Mazix designs for and deploys against. Quest, Gemini, Whisper, AWS, and Google Cloud are part of the operating stack.
        </p>
      </div>
      <div className="marquee-fade mt-6 overflow-hidden">
        <ul className="animate-marquee flex w-max gap-3 px-5">
          {loop.map((name, index) => (
            <li
              key={`${name}-${index}`}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
              aria-hidden={index >= marketSystems.length}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
