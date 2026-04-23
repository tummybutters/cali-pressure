import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import TestimonialCard from "@/components/TestimonialCard";
import { ArrowRight, GoogleIcon, StarIcon } from "@/components/Icons";
import { testimonials } from "@/content/testimonials";
import { homeOnlyPreview, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: `Read real Google reviews from California Pressure Washing customers across San Diego — ${site.googleReviewCount}+ five-star ratings and counting.`,
};

export default function ReviewsPage() {
  if (homeOnlyPreview) {
    redirect("/");
  }

  return (
    <>
      <PageHero
        eyebrow="Customer Reviews"
        title="Don't take it from us —"
        accent="hear it from them."
        lead={`California Pressure Washing has ${site.googleReviewCount}+ five-star reviews on Google. Here's a cross-section of what real San Diego homeowners and businesses have said.`}
      />

      {/* RATING SUMMARY */}
      <section className="pb-4 pt-12 sm:pt-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="card-surface flex flex-col items-start p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                Average Rating
              </p>
              <p className="serif-head mt-3 text-5xl text-white">
                {site.googleRating}/5
              </p>
              <div className="mt-3 flex gap-0.5 text-[var(--color-brand-yellow-bright)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
            </div>

            <div className="card-surface flex flex-col items-start p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                Total Reviews
              </p>
              <p className="serif-head mt-3 text-5xl text-white">
                {site.googleReviewCount}+
              </p>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                From verified Google Business customers.
              </p>
            </div>

            <div className="card-surface flex flex-col items-start p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                Where We Work
              </p>
              <p className="serif-head mt-3 text-3xl text-white">
                San Diego County
              </p>
              <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                Residential and commercial properties across {site.region}.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* REVIEW GRID */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="eyebrow">In Their Words</p>
              <h2 className="serif-head mt-3 text-3xl text-white sm:text-4xl">
                {testimonials.length} pull-quotes from real customers.
              </h2>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </Container>
      </section>

      {/* GOOGLE CTA */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <div className="card-surface flex flex-col items-center gap-6 p-8 text-center sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <GoogleIcon className="h-7 w-7" />
            </div>
            <div>
              <h3 className="serif-head text-3xl text-white sm:text-4xl">
                Read every review on Google.
              </h3>
              <p className="mt-3 max-w-xl text-sm text-[var(--color-text-muted)]">
                Full, unfiltered list of all {site.googleReviewCount}+ reviews —
                straight from our Google Business profile.
              </p>
            </div>
            <a
              href={site.googleBusiness}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View on Google
              <ArrowRight />
            </a>
          </div>
        </Container>
      </section>

      <CTABand
        title="Ready to write the next review?"
        subtitle="Book your job — we'll earn it."
      />
    </>
  );
}
