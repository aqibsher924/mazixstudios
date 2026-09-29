"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SiteLoader() {
  const [phase, setPhase] = useState<"in" | "out" | "gone">("in");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || sessionStorage.getItem("mazix-opened") === "1") {
      setPhase("gone");
      return;
    }
    const leave = window.setTimeout(() => setPhase("out"), 1700);
    const done = window.setTimeout(() => {
      sessionStorage.setItem("mazix-opened", "1");
      setPhase("gone");
    }, 2300);
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
      <Image
        src="/brand/logo-mark.png"
        alt=""
        width={140}
        height={102}
        priority
        className="site-loader-mark"
      />
      <p className="site-loader-name">Mazix Studios</p>
      <div className="site-loader-track" aria-hidden>
        <span className="site-loader-bar" />
      </div>
    </div>
  );
}
