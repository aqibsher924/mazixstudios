import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="glass flex h-9 w-9 items-center justify-center rounded-xl border border-border font-mono text-[10px] font-semibold tracking-widest text-accent">
                MZ
              </span>
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
              A complete IT solution studio — XR, AI, cloud, and product
              engineering for teams that need one partner across the full
              stack.
            </p>
            <p className="mt-6 font-mono text-xs text-muted-foreground">
              Lahore, Pakistan · Remote worldwide
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="section-label mb-5">Explore</p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <Link
                  href="#capabilities"
                  className="transition-colors hover:text-foreground"
                >
                  Capabilities
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="transition-colors hover:text-foreground"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#domains"
                  className="transition-colors hover:text-foreground"
                >
                  Domains
                </Link>
              </li>
              <li>
                <Link
                  href="#work"
                  className="transition-colors hover:text-foreground"
                >
                  Selected work
                </Link>
              </li>
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
                  href="#contact"
                  className="transition-colors hover:text-foreground"
                >
                  Request a consultation
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
