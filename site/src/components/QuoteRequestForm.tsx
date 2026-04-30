"use client";

import { FormEvent, useMemo, useState } from "react";
import { ArrowRight, MailIcon, PhoneIcon } from "@/components/Icons";
import { services } from "@/content/services";
import { site } from "@/content/site";

type ContactMethod = "text" | "email";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  address: "",
  service: "",
  timing: "",
  message: "",
};

function buildBody(form: typeof initialForm) {
  return [
    `Name: ${form.name}`,
    form.phone ? `Phone: ${form.phone}` : null,
    form.email ? `Email: ${form.email}` : null,
    form.address ? `Address: ${form.address}` : null,
    `Service: ${form.service}`,
    form.timing ? `Timing: ${form.timing}` : null,
    "",
    "Job details:",
    form.message,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function QuoteRequestForm() {
  const [method, setMethod] = useState<ContactMethod>("text");
  const [form, setForm] = useState(initialForm);

  const destination = method === "text" ? site.phone : site.email;
  const actionLabel = method === "text" ? "Open Messages" : "Open Email";

  const composeHref = useMemo(() => {
    const body = encodeURIComponent(buildBody(form));
    if (method === "text") {
      const phone = site.phoneHref.replace("tel:", "");
      return `sms:${phone}?&body=${body}`;
    }

    const subject = encodeURIComponent(
      `${site.shortName} quote request from ${form.name || "new customer"}`,
    );
    return `mailto:${site.email}?subject=${subject}&body=${body}`;
  }, [form, method]);

  function update(field: keyof typeof initialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    if (!formEl.reportValidity()) return;
    window.location.href = composeHref;
  }

  return (
    <form onSubmit={onSubmit} className="card-surface flex flex-col gap-5 p-6 sm:p-8">
      <div>
        <p className="eyebrow">Request a Quote</p>
        <h2 className="serif-head mt-3 text-3xl text-white sm:text-4xl">
          Send us the details.
        </h2>
        <p className="mt-3 text-sm text-[var(--color-text-muted)]">
          Choose text or email and we&apos;ll open your Messages or Mail app
          with the quote request ready for {site.ownerFirst}.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2" role="radiogroup" aria-label="Send by">
        {[
          { key: "text" as const, label: "Text Message", Icon: PhoneIcon },
          { key: "email" as const, label: "Email", Icon: MailIcon },
        ].map(({ key, label, Icon }) => {
          const active = method === key;
          return (
            <button
              key={key}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setMethod(key)}
              className={`flex min-h-14 items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${
                active
                  ? "border-[var(--color-brand-blue)] bg-[var(--color-brand-blue)]/15 text-white"
                  : "border-white/10 bg-white/[0.03] text-[var(--color-text-muted)] hover:border-white/25 hover:text-white"
              }`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--color-brand-blue)]/35 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue-bright)]">
                <Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-sm font-semibold">{label}</span>
                <span className="mt-0.5 block text-xs text-[var(--color-text-muted)]">
                  To {destination}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Name
          </span>
          <input
            name="name"
            required
            type="text"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-white placeholder:text-white/30 focus:border-[var(--color-brand-blue)] focus:outline-none"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Phone {method === "email" && "(optional)"}
          </span>
          <input
            name="phone"
            required={method === "text"}
            type="tel"
            value={form.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-white placeholder:text-white/30 focus:border-[var(--color-brand-blue)] focus:outline-none"
            placeholder="(555) 555-5555"
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Email {method === "text" && "(optional)"}
        </span>
        <input
          name="email"
          required={method === "email"}
          type="email"
          value={form.email}
          onChange={(event) => update("email", event.target.value)}
          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-white placeholder:text-white/30 focus:border-[var(--color-brand-blue)] focus:outline-none"
          placeholder="you@example.com"
        />
      </label>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Address (optional)
        </span>
        <input
          name="address"
          type="text"
          value={form.address}
          onChange={(event) => update("address", event.target.value)}
          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-white placeholder:text-white/30 focus:border-[var(--color-brand-blue)] focus:outline-none"
          placeholder="Street, City"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Service
          </span>
          <select
            name="service"
            required
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-white focus:border-[var(--color-brand-blue)] focus:outline-none"
          >
            <option value="" disabled>
              Select a service
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Multiple / Not sure">Multiple / Not sure</option>
          </select>
        </label>

        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
            Timing
          </span>
          <select
            name="timing"
            value={form.timing}
            onChange={(event) => update("timing", event.target.value)}
            className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-white focus:border-[var(--color-brand-blue)] focus:outline-none"
          >
            <option value="">Select timing</option>
            <option value="ASAP">ASAP</option>
            <option value="This week">This week</option>
            <option value="This month">This month</option>
            <option value="Flexible">Flexible</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm">
        <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
          Tell us about the job
        </span>
        <textarea
          name="message"
          rows={5}
          required
          value={form.message}
          onChange={(event) => update("message", event.target.value)}
          className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5 text-white placeholder:text-white/30 focus:border-[var(--color-brand-blue)] focus:outline-none"
          placeholder="Surface type, approx. square footage, timeline, anything we should know..."
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <p className="text-xs text-[var(--color-text-muted)]">
          Nothing is sent until you tap send in your own app.
        </p>
        <button
          type="submit"
          className="btn-primary"
          data-compose-href={composeHref}
        >
          {actionLabel}
          <ArrowRight />
        </button>
      </div>
    </form>
  );
}
