import Link from "next/link";
import Container from "./Container";
import { ArrowRight, CalendarIcon } from "./Icons";
import { homeOnlyPreview } from "@/content/site";

export default function CTABand({
  title = "Ready for a Cleaner Property?",
  subtitle = "Get your free, no-obligation quote today.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="palm-band relative overflow-hidden py-10 sm:py-14">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6 sm:flex-row sm:items-center sm:p-8">
          <div className="flex items-center gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
              <CalendarIcon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="serif-head text-2xl text-white sm:text-3xl">
                {title}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {subtitle}
              </p>
            </div>
          </div>

          {homeOnlyPreview ? (
            <span className="btn-yellow pointer-events-none opacity-70">
              Get a Free Quote
              <ArrowRight />
            </span>
          ) : (
            <Link href="/booking" className="btn-yellow">
              Get a Free Quote
              <ArrowRight />
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
