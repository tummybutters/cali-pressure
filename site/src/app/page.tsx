import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import BeforeAfter from "@/components/BeforeAfter";
import TestimonialCard from "@/components/TestimonialCard";
import {
  ArrowRight,
  BadgeIcon,
  CheckCircleIcon,
  CheckIcon,
  PalmIcon,
  ServiceIconByKey,
  StarIcon,
} from "@/components/Icons";
import { services } from "@/content/services";
import { testimonials } from "@/content/testimonials";
import { site } from "@/content/site";

const trust = [
  {
    Icon: StarIcon,
    title: "5-Star Rated",
    body: "50+ five-star Google reviews from San Diego homeowners.",
  },
  {
    Icon: BadgeIcon,
    title: "Owner-Operated",
    body: "Ivan personally runs every job — no subcontractors.",
  },
  {
    Icon: PalmIcon,
    title: "San Diego Local",
    body: "Proud to serve our neighbors across SoCal.",
  },
  {
    Icon: CheckCircleIcon,
    title: "Free Quotes",
    body: "No-obligation estimate, fast response.",
  },
];

const whyUs = [
  "Experienced & professional — hundreds of homes served",
  "Right equipment and chemistry for every surface",
  "Safe for plants, pets and property",
  "Clear, upfront pricing with no surprises",
];

export default function HomePage() {
  const featured = testimonials.slice(0, 3);
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/driveway-hero-premium.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-38"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink-950)] via-[var(--color-ink-950)]/88 to-[var(--color-ink-950)]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-950)] via-transparent to-transparent" />
          <div className="absolute inset-0 radial-glow" />
        </div>

        <Container className="relative py-20 sm:py-28 lg:py-32">
          <div className="grid items-center gap-10">
            <div className="max-w-5xl">
              <p className="eyebrow">San Diego Pressure Washing Experts</p>
              <h1 className="display-head mt-5 text-5xl text-white sm:text-7xl lg:text-[5.75rem]">
                <span className="block lg:whitespace-nowrap">
                  We bring the clean
                </span>
                <span className="block accent-yellow lg:whitespace-nowrap">
                  California shines.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-base text-[var(--color-text-muted)] sm:text-lg">
                Owner-operated pressure washing for homes and businesses across
                San Diego. Driveways, roofs, houses, solar, windows — done right
                by {site.ownerFirst} and his crew.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/booking" className="btn-primary">
                  Get a Free Quote
                  <ArrowRight />
                </Link>
                <Link href="/services" className="btn-secondary">
                  View Our Services
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
                <div className="flex gap-0.5 text-[var(--color-brand-yellow-bright)]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <span>
                  <span className="font-semibold text-white">
                    {site.googleRating}/5
                  </span>{" "}
                  · {site.googleReviewCount}+ Google reviews
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST BAR */}
      <section className="relative -mt-10 sm:-mt-14">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="flex items-start gap-4 bg-[var(--color-ink-900)] p-5"
              >
                <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-muted)]">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our Services"
            title="Residential & Commercial"
            accent="Services"
            lead="From driveways to rooftops, we deliver a deeper clean that protects your property and boosts curb appeal."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services#${svc.slug}`}
                className="card-surface group flex flex-col p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
                  <ServiceIconByKey
                    iconKey={svc.iconKey}
                    className="h-6 w-6"
                  />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {svc.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {svc.short}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-blue-bright)] group-hover:text-white">
                  Learn More <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 radial-glow opacity-50" />
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Why Choose Us</p>
              <h2 className="serif-head mt-3 text-4xl text-white sm:text-5xl">
                Quality cleaning. <br />
                Reliable results.{" "}
                <em className="not-italic text-[var(--color-brand-yellow)]">
                  Every time.
                </em>
              </h2>
              <p className="mt-5 max-w-md text-base text-[var(--color-text-muted)]">
                We&apos;re a San Diego-local crew obsessed with the details —
                attention, care, and an even finish on every surface we touch.
              </p>

              <ul className="mt-8 space-y-3">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-blue)]/20 text-[var(--color-brand-blue-bright)]">
                      <CheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/booking" className="btn-primary mt-8">
                Get a Free Quote
                <ArrowRight />
              </Link>
            </div>

            <BeforeAfter
              before="/gallery/job-05-before.jpg"
              after="/gallery/job-05-after.jpg"
              beforeAlt="Dirty driveway before pressure washing"
              afterAlt="Clean driveway after pressure washing"
              aspect="4 / 3"
            />
          </div>
        </Container>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What Our"
            accent="Customers Say"
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featured.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/reviews"
              className="btn-secondary inline-flex"
              aria-label="See all reviews"
            >
              Read all {site.googleReviewCount}+ reviews
              <ArrowRight />
            </Link>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
