import type { Metadata } from "next";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import QuoteRequestForm from "@/components/QuoteRequestForm";
import {
  CheckCircleIcon,
  ClockIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  StarIcon,
} from "@/components/Icons";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Booking",
  description: `Request a free quote from California Pressure Washing. Call ${site.phone} or send details — ${site.ownerFirst} personally responds to every request.`,
};

const steps = [
  {
    title: "Tell us what needs cleaning",
    body: "A couple of photos and rough square footage is usually enough.",
  },
  {
    title: "Get your quote back fast",
    body: `${site.ownerFirst} personally reviews every request — same-day response during business hours.`,
  },
  {
    title: "Pick a date that works",
    body: "We'll lock in a time, show up ready, and walk the finished job with you.",
  },
];

const quoteChecklist = [
  "Photos of the surface if you have them",
  "Rough size or number of areas",
  "Any stains, algae, rust, or oil spots",
  "Best day or window for the work",
];

export default function BookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Get a Quote"
        title="Free estimate."
        accent="Zero pressure."
        lead={`Tell us what you need cleaned and ${site.ownerFirst} will get you a straightforward, all-in quote — no upsells, no surprise fees. Same-day response during business hours.`}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            {/* FORM */}
            <div className="lg:col-span-7">
              <QuoteRequestForm />
            </div>

            {/* SIDEBAR */}
            <aside className="flex flex-col gap-5 lg:col-span-5">
              <div className="card-surface p-6 sm:p-8">
                <p className="eyebrow">Fastest Response</p>
                <h3 className="serif-head mt-3 text-2xl text-white">
                  Just call {site.ownerFirst}.
                </h3>
                <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                  Owner-operated — your call goes straight to the person who
                  runs the business.
                </p>

                <a
                  href={site.phoneHref}
                  className="btn-primary mt-5 w-full justify-center sm:w-auto"
                >
                  <PhoneIcon className="h-5 w-5" />
                  {site.phone}
                </a>

                <ul className="mt-6 space-y-3 text-sm text-white/90">
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
                      <MailIcon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Email
                      </span>
                      <a
                        href={`mailto:${site.email}`}
                        className="hover:text-white"
                      >
                        {site.email}
                      </a>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
                      <ClockIcon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Hours
                      </span>
                      {site.hours}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
                      <PinIcon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Service Area
                      </span>
                      {site.city} & greater {site.region}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
                      <InstagramIcon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
                        Instagram
                      </span>
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-white"
                      >
                        @california.pressure
                      </a>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="card-surface p-6">
                <div className="flex items-center gap-3">
                  <div className="flex gap-0.5 text-[var(--color-brand-yellow-bright)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} className="h-4 w-4" />
                    ))}
                  </div>
                  <span className="text-sm text-white">
                    <span className="font-semibold">{site.googleRating}/5</span>{" "}
                    · {site.googleReviewCount}+ Google reviews
                  </span>
                </div>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                  You&apos;re in good company — every one of our reviewers started
                  with a message just like this one.
                </p>
              </div>

              <div className="card-surface p-6">
                <p className="eyebrow">Helpful Details</p>
                <h3 className="serif-head mt-3 text-2xl text-white">
                  What makes a quote faster?
                </h3>
                <ul className="mt-5 space-y-3">
                  {quoteChecklist.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/85"
                    >
                      <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-brand-blue-bright)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-white/5 py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="eyebrow">What Happens Next</p>
            <h2 className="serif-head mt-3 text-3xl text-white sm:text-4xl">
              Three quick steps to a cleaner property.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="card-surface flex flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-brand-blue)]/40 bg-[var(--color-brand-blue)]/10 text-sm font-semibold text-[var(--color-brand-blue-bright)]">
                    0{i + 1}
                  </span>
                  <CheckCircleIcon className="h-5 w-5 text-[var(--color-brand-yellow-bright)]" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
