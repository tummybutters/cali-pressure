import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTABand from "@/components/CTABand";
import {
  ArrowRight,
  BadgeIcon,
  CheckCircleIcon,
  CheckIcon,
  LeafIcon,
  PalmIcon,
  StarIcon,
} from "@/components/Icons";
import { homeOnlyPreview, site } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${site.ownerFirst}, owner and operator of California Pressure Washing LLC — San Diego's owner-operated cleaning pros.`,
};

const values = [
  {
    Icon: BadgeIcon,
    title: "Owner on every job",
    body: `${site.ownerFirst} is the one quoting, scheduling, and running every clean. No subcontractors, no rotating crews.`,
  },
  {
    Icon: CheckCircleIcon,
    title: "The right method, every time",
    body: "High-pressure where it belongs, soft-wash where it matters. We match the chemistry and PSI to the surface.",
  },
  {
    Icon: LeafIcon,
    title: "Safe around what you love",
    body: "Plant-safe, pet-safe detergents. We rinse thoroughly and watch out for your landscaping on every job.",
  },
  {
    Icon: PalmIcon,
    title: "San Diego neighbors",
    body: "We live here, work here, and take pride in making our corner of Southern California shine.",
  },
];

const process = [
  {
    step: "01",
    title: "Free, on-site or online quote",
    body: "Send photos or book a walkthrough — we'll give you an honest estimate with no pressure and no markup games.",
  },
  {
    step: "02",
    title: "Prep & protect",
    body: "We move what needs moving, rinse landscaping in advance, and cover anything sensitive before a single trigger is pulled.",
  },
  {
    step: "03",
    title: "Method-matched cleaning",
    body: "Surface cleaner for concrete, soft-wash for roofs and siding, detail work on corners and edges — the right tool for every foot.",
  },
  {
    step: "04",
    title: "Walk it with you",
    body: "We don't leave until you've seen the finished work and you're happy with every square foot.",
  },
];

const stats = [
  { value: "50+", label: "Five-star Google reviews" },
  { value: "5.0", label: "Average rating" },
  { value: "100s", label: "Homes cleaned across SoCal" },
  { value: "1", label: "Owner — on every single job" },
];

export default function AboutPage() {
  if (homeOnlyPreview) {
    redirect("/");
  }

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title={`Meet ${site.ownerFirst} —`}
        accent="the guy behind the wand."
        lead={`California Pressure Washing LLC is owner-operated by ${site.ownerFirst}, a San Diego local who built this business on repeat work and word-of-mouth. What you see on the van is what shows up at your house.`}
      />

      {/* OWNER STORY */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/10">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/gallery/job-05-after.jpg"
                    alt="Clean concrete driveway in San Diego"
                    fill
                    sizes="(min-width: 1024px) 480px, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-950)] via-[var(--color-ink-950)]/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="flex items-center gap-2 text-[var(--color-brand-yellow-bright)]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4" />
                      ))}
                    </div>
                    <p className="mt-2 text-sm text-white/90">
                      {site.googleRating}/5 · {site.googleReviewCount}+ Google
                      reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <p className="eyebrow">The Story</p>
              <h2 className="serif-head mt-3 text-4xl text-white sm:text-5xl">
                Built on repeat work{" "}
                <em className="not-italic text-[var(--color-brand-yellow)]">
                  and word-of-mouth.
                </em>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--color-text-muted)]">
                <p>
                  California Pressure Washing started in San Diego with one
                  truck, a commercial-grade surface cleaner, and a simple rule:
                  treat every property like it&apos;s your own. {site.ownerFirst}{" "}
                  personally inspects, quotes, and cleans every job — which is
                  why the reviews read like they were written by the same
                  person: careful, friendly, thorough.
                </p>
                <p>
                  We clean concrete driveways, walkways and patios, seal them
                  so they stay clean, and soft-wash roofs, house exteriors,
                  solar panels and windows. From a single oil stain to a
                  full-property exterior wash, we bring the right equipment,
                  the right chemistry, and the kind of attention to detail
                  that comes from owning the business.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
                  >
                    <p className="serif-head text-3xl text-[var(--color-brand-yellow)]">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* VALUES */}
      <section className="border-t border-white/5 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">What We Stand For</p>
            <h2 className="serif-head mt-3 text-3xl text-white sm:text-4xl">
              Four things we won&apos;t compromise on.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="card-surface flex flex-col p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="border-t border-white/5 py-16 sm:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="eyebrow">How We Work</p>
              <h2 className="serif-head mt-3 text-3xl text-white sm:text-4xl">
                A four-step{" "}
                <em className="not-italic text-[var(--color-brand-yellow)]">
                  process.
                </em>
              </h2>
              <p className="mt-5 text-base text-[var(--color-text-muted)]">
                Simple, transparent, and designed so you know exactly what&apos;s
                happening from the first message to the final walkthrough.
              </p>
              <Link href="/booking" className="btn-primary mt-8">
                Start With a Quote
                <ArrowRight />
              </Link>
            </div>

            <div className="lg:col-span-8">
              <ol className="divide-y divide-white/5 border-y border-white/5">
                {process.map((p) => (
                  <li key={p.step} className="grid gap-6 py-8 sm:grid-cols-12">
                    <div className="sm:col-span-2">
                      <p className="serif-head text-3xl text-[var(--color-brand-yellow)]">
                        {p.step}
                      </p>
                    </div>
                    <div className="sm:col-span-10">
                      <h3 className="text-xl font-semibold text-white">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-[var(--color-text-muted)]">
                        {p.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICE AREA */}
      <section className="border-t border-white/5 py-16 sm:py-20">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Service Area</p>
              <h2 className="serif-head mt-3 text-3xl text-white sm:text-4xl">
                All across{" "}
                <em className="not-italic text-[var(--color-brand-yellow)]">
                  San Diego County.
                </em>
              </h2>
              <p className="mt-5 text-base text-[var(--color-text-muted)]">
                Based in {site.city} and serving homes and businesses across{" "}
                {site.region}. If you&apos;re not sure whether we come to your
                neighborhood, just ask — we almost certainly do.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-2 text-sm text-white/85">
              {[
                "San Diego",
                "La Jolla",
                "Del Mar",
                "Encinitas",
                "Carlsbad",
                "Oceanside",
                "Rancho Santa Fe",
                "Chula Vista",
                "Coronado",
                "Poway",
                "Escondido",
                "Rancho Bernardo",
              ].map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand-blue)]/20 text-[var(--color-brand-blue-bright)]">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CTABand />
    </>
  );
}
