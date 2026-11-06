import { EngagementBoard } from "@/components/site/engagement-board";

export function EngagementStage() {
  return (
    <section className="mx-auto max-w-6xl px-3 py-8 sm:px-4 sm:py-10" id="work">
      <div className="mb-5 max-w-2xl">
        <h2 className="headline-serif text-[clamp(2rem,4vw,3.2rem)] leading-none">
          Work we can name.
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
          Seven public engagements. Each one is a system with a device, a person, and a record. The rest of the company&apos;s work stays private.
        </p>
      </div>
      <EngagementBoard />
    </section>
  );
}
