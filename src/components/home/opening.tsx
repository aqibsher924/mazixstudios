"use client";

import Link from "next/link";
import { useRef } from "react";
import { Logo } from "@/components/brand/logo";

export function Opening() {
  const frame = useRef<HTMLElement>(null);

  const move = (event: React.PointerEvent<HTMLElement>) => {
    const node = frame.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    node.style.setProperty("--lx", `${((event.clientX - rect.left) / rect.width) * 100}%`);
    node.style.setProperty("--ly", `${((event.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <section className="px-3 pt-24 sm:px-4 sm:pt-28">
      <article
        ref={frame}
        onPointerMove={move}
        className="scene-frame relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:min-h-[calc(100svh-7.5rem)]"
      >
        <img
          src="/media/scene-hero.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/55" />
        <div className="scene-sheen" aria-hidden />

        <div className="relative flex flex-col justify-end p-3 sm:p-5 lg:min-h-[calc(100svh-7.5rem)]">
          <div className="scene-glass relative grid gap-6 p-5 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:p-10">
            <div className="min-w-0 text-white">
              <div className="flex items-center gap-3">
                <Logo className="h-11 w-11" />
                <p className="text-sm font-medium tracking-tight">Mazix Studios</p>
              </div>
              <h1 className="headline-serif mt-6 max-w-xl text-[clamp(2.6rem,6vw,5rem)] leading-[0.96]">
                Systems for the physical world.
              </h1>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/80 sm:text-base">
                Spatial products, the models that guide them, and the cloud they
                run on. One company from the headset to the record.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-glow w-full sm:w-auto">
                  Start a project
                </Link>
                <Link href="/work" className="btn-glass w-full !border-white/25 !bg-white/10 !text-white sm:w-auto">
                  See the work
                </Link>
              </div>
            </div>
            <ul className="grid gap-3 self-end">
              {[
                ["XR & spatial", "Headset, glasses, and the room"],
                ["Models in the loop", "Language, vision, and speech"],
                ["Cloud that holds it", "Video, accounts, and live calls"],
              ].map(([title, body]) => (
                <li key={title} className="rounded-2xl border border-white/15 bg-black/25 px-4 py-3 backdrop-blur-md">
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs text-white/70">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}
