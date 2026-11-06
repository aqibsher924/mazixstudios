"use client";

import { useId } from "react";

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  const raw = useId().replace(/:/g, "");

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id={`${raw}-g`} x1="10" y1="4" x2="54" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F4FDFF" />
          <stop offset="0.28" stopColor="#7DD3FC" />
          <stop offset="0.72" stopColor="#2563EB" />
          <stop offset="1" stopColor="#0B1B4A" />
        </linearGradient>
      </defs>
      <path
        d="M8 27c0-10 12-17 24-17s24 7 24 17v7c0 15-10.5 26-24 26S8 49 8 34v-7z"
        fill={`url(#${raw}-g)`}
      />
      <path
        d="M16 24c5-7 27-7 32 0"
        stroke="#ffffff"
        strokeOpacity="0.75"
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M20 43.5V29.5L32 38l12-8.5v14"
        stroke="#ffffff"
        strokeWidth="3.3"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="32" cy="33.5" r="1.7" fill="#E0F7FF" />
    </svg>
  );
}
