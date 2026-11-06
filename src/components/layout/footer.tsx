"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

const columns = [
  {
    title: "Practice",
    links: [
      ["/services", "Services"],
      ["/services/xr-spatial", "Spatial computing"],
      ["/services/full-stack-ai", "Full-stack AI"],
      ["/services/llms", "Language models"],
      ["/services/cloud", "Cloud"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About"],
      ["/work", "Engagements"],
      ["/industries", "Fields"],
      ["/process", "Process"],
    ],
  },
  {
    title: "Contact",
    links: [
      ["/contact", "Consultation"],
      ["mailto:hello@mazixstudios.com", "Email"],
      ["/privacy", "Privacy"],
    ],
  },
] as const;

export function Footer() {
  const panelRef = useRef<HTMLDivElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const panel = panelRef.current;
    const turb = turbRef.current;
    const disp = dispRef.current;
    if (!panel || !turb || !disp) return;

    if (reduce) {
      disp.setAttribute("scale", "0");
      return;
    }

    let frame = 0;
    let visible = true;
    let target = 14;
    let current = 14;
    let freq = 0.007;
    let targetFreq = 0.007;
    let lastMove = 0;
    let lastX = 0;
    let lastY = 0;

    const tick = (now: number) => {
      if (visible) {
        if (now - lastMove > 500) {
          target = 12 + Math.sin(now / 900) * 5;
          targetFreq = 0.006 + Math.sin(now / 1400) * 0.0015;
        }
        current += (target - current) * 0.08;
        freq += (targetFreq - freq) * 0.08;
        disp.setAttribute("scale", current.toFixed(2));
        turb.setAttribute(
          "baseFrequency",
          `${freq.toFixed(4)} ${(freq * 1.6).toFixed(4)}`,
        );
      }
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = panel.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      panel.style.setProperty("--lx", `${x}%`);
      panel.style.setProperty("--ly", `${y}%`);
      const speed = Math.min(48, Math.hypot(event.clientX - lastX, event.clientY - lastY));
      target = 8 + speed * 1.15;
      targetFreq = 0.005 + speed * 0.00028;
      lastX = event.clientX;
      lastY = event.clientY;
      lastMove = performance.now();
    };

    const onLeave = () => {
      lastMove = 0;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 },
    );

    observer.observe(panel);
    panel.addEventListener("pointermove", onMove);
    panel.addEventListener("pointerleave", onLeave);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      panel.removeEventListener("pointermove", onMove);
      panel.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const evening = mounted && resolvedTheme === "dark";

  return (
    <footer className="relative isolate overflow-hidden bg-[#10141c]">
      <img
        src="/media/scene-hero.jpg"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full scale-105 object-cover"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/50" />

      <svg className="absolute h-0 w-0" aria-hidden>
        <filter id="mazix-liquid" x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency="0.007 0.011"
            numOctaves="2"
            seed="4"
            result="noise"
          />
          <feDisplacementMap
            ref={dispRef}
            in="SourceGraphic"
            in2="noise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-8 sm:py-24">
        <div ref={panelRef} className="liquid-panel">
          <div className="liquid-ripple" aria-hidden />
          <div className="liquid-sheen" aria-hidden />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.05fr_1.15fr] lg:gap-8">
            <div className="liquid-copy max-w-md">
              <div className="flex items-center gap-3">
                <Logo className="h-9 w-9" />
                <span className="flex flex-col leading-none">
                  <span className="text-[15px] font-semibold tracking-tight">Mazix.</span>
                  <span className="mt-0.5 text-[9px] uppercase tracking-[0.28em] opacity-70">
                    Studios
                  </span>
                </span>
              </div>
              <p className="mt-6 font-[family-name:var(--font-display)] text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl">
                Systems for the physical world.
              </p>
              <p className="mt-4 text-sm leading-relaxed opacity-75">
                Spatial computing, applied AI, and the cloud those systems run on.
                One company from the device to the record.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#12141c] px-5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.03] dark:bg-white dark:text-[#12141c]"
              >
                Start a project
              </Link>
            </div>

            <div className="liquid-card grid grid-cols-2 gap-x-6 gap-y-8 p-6 sm:grid-cols-3 sm:p-7">
              {columns.map((column) => (
                <div key={column.title}>
                  <p className="text-[11px] font-medium uppercase tracking-[0.16em] opacity-50">
                    {column.title}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {column.links.map(([href, label]) => (
                      <li key={href}>
                        {href.startsWith("mailto:") ? (
                          <a href={href} className="liquid-link">
                            {label}
                          </a>
                        ) : (
                          <Link href={href} className="liquid-link">
                            {label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap items-center justify-between gap-4">
            <p className="liquid-copy text-xs opacity-70">
              © {new Date().getFullYear()} Mazix Studios. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className="liquid-chip"
                aria-label="Day theme"
                aria-pressed={mounted && !evening}
              >
                <SunIcon />
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className="liquid-chip"
                aria-label="Evening theme"
                aria-pressed={evening}
              >
                <MoonIcon />
              </button>
              <span className="liquid-chip pointer-events-none min-w-20 justify-center text-xs">
                {evening ? "Evening" : "Day"}
              </span>
            </div>
          </div>

          <svg
            className="liquid-mark"
            viewBox="0 0 1200 360"
            preserveAspectRatio="xMidYMax meet"
            aria-hidden
          >
            <defs>
              <pattern
                id="mazix-scene"
                patternUnits="userSpaceOnUse"
                width="1200"
                height="360"
              >
                <image
                  href="/media/scene-hero.jpg"
                  x="0"
                  y="-180"
                  width="1200"
                  height="760"
                  preserveAspectRatio="xMidYMid slice"
                />
              </pattern>
            </defs>
            <text
              x="600"
              y="318"
              textAnchor="middle"
              fill="url(#mazix-scene)"
              stroke="rgba(255,255,255,0.38)"
              strokeWidth="2"
              filter="url(#mazix-liquid)"
              fontSize="292"
              fontWeight="800"
              letterSpacing="-22"
              style={{ fontFamily: "var(--font-display), sans-serif" }}
            >
              mazix
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 14.5A8.5 8.5 0 1 1 9.5 3 7 7 0 0 0 21 14.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
