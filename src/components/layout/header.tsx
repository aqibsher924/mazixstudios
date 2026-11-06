"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { clsx } from "clsx";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/industries", label: "Fields" },
  { href: "/contact", label: "Contact" },
];

function isCurrent(href: string, path: string) {
  if (href === "/") return path === "/";
  return path === href || path.startsWith(`${href}/`);
}

export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);
  const turbRef = useRef<SVGFETurbulenceElement>(null);
  const dispRef = useRef<SVGFEDisplacementMapElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bar = barRef.current;
    const turb = turbRef.current;
    const disp = dispRef.current;
    if (!bar || !turb || !disp) return;
    if (reduce) {
      disp.setAttribute("scale", "0");
      return;
    }

    let frame = 0;
    let target = 10;
    let current = 10;
    let freq = 0.012;
    let targetFreq = 0.012;
    let lastMove = 0;
    let lastX = 0;
    let lastY = 0;

    const tick = (now: number) => {
      if (now - lastMove > 450) {
        target = 8 + Math.sin(now / 800) * 4;
        targetFreq = 0.01 + Math.sin(now / 1200) * 0.002;
      }
      current += (target - current) * 0.12;
      freq += (targetFreq - freq) * 0.12;
      disp.setAttribute("scale", current.toFixed(2));
      turb.setAttribute("baseFrequency", `${freq.toFixed(4)} ${(freq * 1.8).toFixed(4)}`);
      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: PointerEvent) => {
      const rect = bar.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      bar.style.setProperty("--lx", `${x}%`);
      bar.style.setProperty("--ly", `${y}%`);
      const speed = Math.min(36, Math.hypot(event.clientX - lastX, event.clientY - lastY));
      target = 6 + speed * 1.1;
      targetFreq = 0.01 + speed * 0.0004;
      lastX = event.clientX;
      lastY = event.clientY;
      lastMove = performance.now();
    };

    bar.addEventListener("pointermove", onMove);
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      bar.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <svg className="absolute h-0 w-0" aria-hidden>
        <filter id="mazix-nav-liquid" x="-20%" y="-40%" width="140%" height="180%">
          <feTurbulence
            ref={turbRef}
            type="fractalNoise"
            baseFrequency="0.012 0.02"
            numOctaves="2"
            seed="2"
            result="noise"
          />
          <feDisplacementMap
            ref={dispRef}
            in="SourceGraphic"
            in2="noise"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <div ref={barRef} className="liquid-nav pointer-events-auto mx-auto flex max-w-6xl items-center gap-1 p-1.5 sm:gap-2 sm:p-2">
        <span className="liquid-nav-ripple" aria-hidden />
        <Link href="/" className="relative z-10 inline-flex min-w-0 items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3">
          <Logo className="h-8 w-8 shrink-0" />
          <span className="truncate text-[15px] font-semibold tracking-tight">Mazix.</span>
        </Link>

        <nav className="relative z-10 ml-auto hidden min-w-0 items-center gap-0.5 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const current = isCurrent(item.href, path);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={clsx(
                  "rounded-full px-3 py-2 text-sm whitespace-nowrap transition-colors",
                  current ? "bg-foreground/10 text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>

        <div className="relative z-10 ml-auto flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="pointer-events-auto fixed inset-0 z-40 bg-[#070b12]/70 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="pointer-events-auto relative z-50 mx-auto mt-2 w-full max-w-6xl rounded-3xl border border-border bg-card p-2 shadow-card backdrop-blur-2xl lg:hidden"
              aria-label="Mobile"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              {nav.map((item) => {
                const current = isCurrent(item.href, path);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={clsx(
                      "block rounded-2xl px-4 py-3.5 text-base font-medium",
                      current ? "bg-foreground/10 text-foreground" : "text-foreground/80",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </motion.nav>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
