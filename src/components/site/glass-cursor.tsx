"use client";

import { useEffect, useRef, useState } from "react";

export function GlassCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setOn(true);
    document.documentElement.classList.add("has-glass-cursor");
    return () => document.documentElement.classList.remove("has-glass-cursor");
  }, []);

  useEffect(() => {
    if (!on) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;
    let hot = false;
    let visible = false;
    let frame = 0;

    const paint = () => {
      const dotScale = hot ? 0.45 : 1;
      const ringScale = hot ? 1.65 : 1;
      if (dot.current) {
        dot.current.style.opacity = visible ? "1" : "0";
        dot.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      }
      if (ring.current) {
        ring.current.style.opacity = visible ? "1" : "0";
        ring.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      }
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      paint();
      frame = requestAnimationFrame(tick);
    };

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      visible = true;
      const target = event.target instanceof Element ? event.target : null;
      hot = Boolean(target?.closest("a, button, input, textarea, select, summary, [role='button']"));
    };

    const hide = () => {
      visible = false;
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
    };
  }, [on]);

  if (!on) return null;

  return (
    <>
      <div ref={ring} className="glass-cursor-ring" />
      <div ref={dot} className="glass-cursor-dot" />
    </>
  );
}
