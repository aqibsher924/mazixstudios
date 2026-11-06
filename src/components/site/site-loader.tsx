"use client";

import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";

export function SiteLoader() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || sessionStorage.getItem("mazix-glass-opened") === "1") {
      setPhase("gone");
      return;
    }
    const leave = window.setTimeout(() => setPhase("out"), 2100);
    const done = window.setTimeout(() => {
      sessionStorage.setItem("mazix-glass-opened", "1");
      setPhase("gone");
    }, 2750);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(done);
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      className={`site-loader ${phase === "out" ? "site-loader-out" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Opening Mazix Studios"
    >
      <span className="loader-orb loader-orb-a" aria-hidden />
      <span className="loader-orb loader-orb-b" aria-hidden />
      <div className="loader-glass">
        <Logo className="loader-logo h-16 w-16" />
        <p className="loader-word">Mazix</p>
        <p className="loader-sub">Studios</p>
        <span className="loader-line" aria-hidden />
      </div>
    </div>
  );
}
