import type { Testimonial } from "@/content/testimonials";
import { StarIcon } from "./Icons";

export default function TestimonialCard({
  quote,
  name,
  service,
}: Testimonial) {
  return (
    <article className="card-surface flex h-full flex-col p-6">
      <div className="mb-4 flex gap-0.5 text-[var(--color-brand-yellow-bright)]">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="h-4 w-4" />
        ))}
      </div>
      <blockquote className="mb-6 text-sm leading-relaxed text-white/85">
        “{quote}”
      </blockquote>
      <div className="mt-auto">
        <p className="text-sm font-semibold text-white">{name}</p>
        {service && (
          <p className="text-xs text-[var(--color-text-muted)]">{service}</p>
        )}
      </div>
    </article>
  );
}
