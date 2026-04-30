import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import BeforeAfter from "@/components/BeforeAfter";
import { ArrowRight } from "@/components/Icons";
import { gallery } from "@/content/gallery";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Real before & after photos from California Pressure Washing jobs across San Diego — driveways, walkways, patios and entry slabs.",
};

const categories = [
  { label: "Driveways", count: 5 },
  { label: "Walkways", count: 5 },
  { label: "Patios", count: 2 },
  { label: "Specialty stains", count: 4 },
];

export default function GalleryPage() {
  const featured = gallery[4]; // job-05: full driveway with heavy oil
  const rest = gallery.filter((g) => g.id !== featured.id);

  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real results."
        accent="Real San Diego homes."
        lead={`Every photo below is an actual California Pressure Washing job. Drag the slider on the featured job to see the transformation — and scan the grid for ${gallery.length} more.`}
      />

      {/* FEATURED BEFORE / AFTER */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Featured Job</p>
              <h2 className="serif-head mt-3 text-4xl text-white sm:text-5xl">
                {featured.title}
              </h2>
              <p className="mt-5 max-w-md text-base text-[var(--color-text-muted)]">
                {featured.description}
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:max-w-md">
                {categories.map((category) => (
                  <div
                    key={category.label}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <p className="serif-head text-3xl text-[var(--color-brand-yellow)]">
                      {category.count}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
                      {category.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link href="/booking" className="btn-primary mt-8">
                Get Your Own Quote
                <ArrowRight />
              </Link>
            </div>

            <BeforeAfter
              before={featured.before}
              after={featured.after}
              beforeAlt={`${featured.title} — before`}
              afterAlt={`${featured.title} — after`}
              aspect="4 / 3"
            />
          </div>
        </Container>
      </section>

      {/* GRID OF ALL JOBS */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">The Full Library</p>
              <h2 className="serif-head mt-3 text-3xl text-white sm:text-4xl">
                {gallery.length} jobs.{" "}
                <em className="not-italic text-[var(--color-brand-yellow)]">
                  Countless surfaces.
                </em>
              </h2>
            </div>
            <p className="max-w-md text-sm text-[var(--color-text-muted)]">
              Real transformations from the current project library, kept
              direct and visual so people can see the kind of finish to expect.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((job) => (
              <article
                key={job.id}
                className="card-surface group overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={job.collage}
                    alt={`${job.title} — before and after`}
                    fill
                    sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 flex gap-2 p-3">
                    <span className="rounded bg-black/70 px-2 py-1 text-[10px] font-semibold tracking-[0.2em] text-white/90">
                      BEFORE
                    </span>
                    <span className="rounded bg-[var(--color-brand-yellow)]/90 px-2 py-1 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-ink-950)]">
                      AFTER
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-white">
                    {job.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                    {job.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-[11px] text-white/75"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-3 text-center">
            <p className="text-sm text-[var(--color-text-muted)]">
              Want to see more? Follow us on Instagram for weekly project posts.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                @california.pressure on Instagram
                <ArrowRight />
              </a>
              <Link href="/booking" className="btn-primary">
                Get a Similar Result
                <ArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTABand
        title="See yours on this page next."
        subtitle="Tell us what needs cleaning — we'll send a free, no-obligation quote."
      />
    </>
  );
}
