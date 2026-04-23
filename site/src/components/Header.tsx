"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { homeOnlyPreview, nav, site } from "@/content/site";
import { ArrowRight } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[var(--color-ink-950)]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Logo width={150} />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const canNavigate = !homeOnlyPreview || item.href === "/";
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              canNavigate ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors ${
                    active
                      ? "text-white"
                      : "text-[var(--color-text-muted)] hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-[var(--color-brand-blue-bright)]" />
                  )}
                </Link>
              ) : (
                <span
                  key={item.href}
                  className="relative cursor-default text-sm font-medium text-[var(--color-text-muted)]"
                >
                  {item.label}
                </span>
              )
            );
          })}
        </nav>

        <div className={`hidden md:block${homeOnlyPreview ? " invisible" : ""}`}>
          <Link href="/booking" className="btn-yellow text-sm">
            Get a Free Quote
            <ArrowRight />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-md border border-white/10 p-2 text-white"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 stroke-current stroke-[1.8] fill-none"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[var(--color-ink-900)] md:hidden">
          <nav className="flex flex-col p-4" aria-label="Mobile">
            {nav.map((item) => {
              const canNavigate = !homeOnlyPreview || item.href === "/";
              return canNavigate ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base text-white/80 hover:bg-white/5"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  key={item.href}
                  className="rounded-md px-3 py-3 text-base text-white/40"
                >
                  {item.label}
                </span>
              );
            })}
            {!homeOnlyPreview && (
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="btn-yellow mt-3 text-sm"
              >
                Get a Free Quote
                <ArrowRight />
              </Link>
            )}
            <a
              href={site.phoneHref}
              className="mt-3 text-center text-sm text-white/60"
            >
              {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
