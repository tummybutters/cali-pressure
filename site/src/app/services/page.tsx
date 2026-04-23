import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import {
  ArrowRight,
  CheckIcon,
  ServiceIconByKey,
} from "@/components/Icons";
import { services } from "@/content/services";
import { homeOnlyPreview, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pressure washing, concrete sealing, roof wash, house wash, solar cleaning and window cleaning in San Diego.",
};

export default function ServicesPage() {
  if (homeOnlyPreview) {
    redirect("/");
  }

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything we clean —"
        accent="done right."
        lead={`Owner-operated by ${site.ownerFirst}, serving homes and businesses across ${site.city}. Every service below is performed in-house with the right equipment, chemistry and care.`}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <a
                key={svc.slug}
                href={`#${svc.slug}`}
                className="card-surface flex flex-col p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
                  <ServiceIconByKey iconKey={svc.iconKey} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  {svc.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-blue-bright)]">
                  Jump to details <ArrowRight />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="divide-y divide-white/5 border-y border-white/5">
            {services.map((svc, i) => (
              <article
                key={svc.slug}
                id={svc.slug}
                className="grid scroll-mt-24 gap-10 py-16 lg:grid-cols-12 lg:gap-16"
              >
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
                      <ServiceIconByKey iconKey={svc.iconKey} />
                    </div>
                    <p className="eyebrow">0{i + 1} — Service</p>
                  </div>
                  <h2 className="serif-head mt-4 text-4xl text-white sm:text-5xl">
                    {svc.title}
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-[var(--color-text-muted)]">
                    {svc.long}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href="/booking" className="btn-primary">
                      Request a Quote
                      <ArrowRight />
                    </Link>
                    <Link href="/gallery" className="btn-secondary">
                      See Results
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <div className="card-surface p-6 sm:p-8">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-blue-bright)]">
                      What&apos;s included
                    </h3>
                    <ul className="mt-5 space-y-3">
                      {svc.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm text-white/90"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-blue)]/20 text-[var(--color-brand-blue-bright)]">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
