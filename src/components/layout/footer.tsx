import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/brand/logo-mark.png"
                alt=""
                width={140}
                height={102}
                className="h-9 w-auto"
              />
              <span className="flex flex-col leading-none">
                <span className="text-[15px] font-semibold tracking-tight">
                  Mazix
                </span>
                <span className="mt-0.5 text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                  Studios
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Mazix Studios is a technology company for spatial systems, applied
              AI, and the cloud those systems run on.
            </p>
            <p className="mt-6 font-mono text-xs text-muted-foreground">
              Lahore, Pakistan · Remote worldwide
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="section-label mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-muted">
              {[
                ["/services", "Services"],
                ["/work", "Engagements"],
                ["/industries", "Fields"],
                ["/about", "About"],
                ["/process", "Process"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="section-label mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <a
                  href="mailto:hello@mazixstudios.com"
                  className="transition-colors hover:text-foreground"
                >
                  hello@mazixstudios.com
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="transition-colors hover:text-foreground"
                >
                  Request a consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mazix Studios. All rights reserved.</p>
          <p className="font-mono tracking-wide">
            Spatial · Intelligent · Production-grade
          </p>
        </div>
      </div>
    </footer>
  );
}
