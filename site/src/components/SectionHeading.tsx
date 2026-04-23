import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  align = "left",
  lead,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  align?: "left" | "center";
  lead?: ReactNode;
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-2xl ${alignCls}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2
        className={`serif-head mt-3 text-4xl text-white sm:text-5xl ${
          align === "center" ? "" : ""
        }`}
      >
        {title}{" "}
        {accent && (
          <em className="not-italic font-medium text-[var(--color-brand-yellow)]">
            {accent}
          </em>
        )}
      </h2>
      {lead && (
        <p className="mt-4 text-base text-[var(--color-text-muted)]">{lead}</p>
      )}
    </div>
  );
}
