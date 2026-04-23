import Container from "./Container";

export default function PageHero({
  eyebrow,
  title,
  accent,
  lead,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 radial-glow opacity-70" />
      <Container className="relative py-20 sm:py-24 lg:py-28">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1 className="mt-3 text-5xl text-white sm:text-6xl serif-head">
          {title}{" "}
          {accent && (
            <em className="not-italic text-[var(--color-brand-yellow)] font-medium">
              {accent}
            </em>
          )}
        </h1>
        {lead && (
          <p className="mt-5 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg">
            {lead}
          </p>
        )}
      </Container>
    </section>
  );
}
