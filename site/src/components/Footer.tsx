import Link from "next/link";
import Logo from "./Logo";
import { services } from "@/content/services";
import { site, nav } from "@/content/site";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  InstagramIcon,
  GoogleIcon,
  ClockIcon,
} from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/5 bg-[var(--color-ink-900)]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-5 lg:gap-8 lg:px-8">
        <div className="lg:col-span-2">
          <Logo width={170} />
          <p className="mt-4 max-w-sm text-sm text-[var(--color-text-muted)]">
            Owner-operated pressure washing serving {site.city} and the
            surrounding {site.region} communities. Rated {site.googleRating}/5
            from {site.googleReviewCount}+ Google reviews.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.googleBusiness}
              target="_blank"
              rel="noreferrer"
              aria-label="Google Business"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
            >
              <GoogleIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
          <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services#${s.slug}`}
                  className="hover:text-white"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
          <ul className="space-y-3 text-sm text-[var(--color-text-muted)]">
            <li className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-4 w-4 text-[var(--color-brand-blue-bright)]" />
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MailIcon className="mt-0.5 h-4 w-4 text-[var(--color-brand-blue-bright)]" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <PinIcon className="mt-0.5 h-4 w-4 text-[var(--color-brand-blue-bright)]" />
              <span>
                Serving {site.city}
                <br /> and {site.region}
              </span>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-4 w-4 text-[var(--color-brand-blue-bright)]" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-[var(--color-text-dim)] sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>Built with care in Southern California.</p>
        </div>
      </div>
    </footer>
  );
}
