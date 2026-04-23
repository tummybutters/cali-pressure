// Minimal inline icon set matching the mockup's line-art style.
// Each icon is a 24px stroke=1.6 outline in currentColor.

type IconProps = { className?: string };

const base =
  "h-6 w-6 stroke-[1.6] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round]";

export function ConcreteIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M4 20h16" />
      <path d="M4 16h12" />
      <path d="M7 12h10" />
      <path d="M13 3l-1.4 5.5a1 1 0 0 0 .2 1L15 13" />
      <path d="M13 3l2 1.5" />
      <path d="M15 13l3 3" />
    </svg>
  );
}

export function SealingIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
      <path d="M9.5 12l2 2 3.5-4" />
    </svg>
  );
}

export function RoofIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M3 13l9-7 9 7" />
      <path d="M5 12v8h14v-8" />
      <path d="M8 20v-4h4v4" />
      <path d="M16 16c.8 0 1.5.6 1.5 1.5S16.8 19 16 19c-.4 0-.7-.1-1-.3" />
    </svg>
  );
}

export function HouseIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-5h4v5" />
      <path d="M7 7.5l2-1.5" />
    </svg>
  );
}

export function SolarIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <rect x="3" y="4" width="18" height="14" rx="1.5" />
      <path d="M3 9h18" />
      <path d="M9 4v14" />
      <path d="M15 4v14" />
      <path d="M7 22h10" />
      <path d="M12 18v4" />
    </svg>
  );
}

export function WindowIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M4 12h16" />
      <path d="M12 3v18" />
    </svg>
  );
}

/* Trust-bar icons */
export function StarIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-6 w-6 fill-current ${className}`}
      aria-hidden="true"
    >
      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.9L12 17.3 5.9 20.7l1.4-6.9L2.2 9.1l6.9-.8L12 2z" />
    </svg>
  );
}

export function BadgeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 3l2.5 1.5L17 4l1 2.5L20 8l-1 2.5L20 13l-2 1.5-1 2.5-2.5-.5L12 18l-2.5-1.5L7 17l-1-2.5L4 13l1-2.5L4 8l2-1.5L7 4l2.5.5L12 3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function LeafIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M20 4c0 8-5 13-12 13-1.5 0-3-.3-4-1 0-7 5-12 12-12 1.5 0 3 .3 4 0z" />
      <path d="M4 20c4-7 9-10 15-12" />
    </svg>
  );
}

export function PalmIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 21v-9" />
      <path d="M12 12c-2-3-5-3-8-2 2-3 5-4 8-2" />
      <path d="M12 12c2-3 5-3 8-2-2-3-5-4-8-2" />
      <path d="M12 12c-1-3-3-4-6-4 2-2 5-2 6 0" />
      <path d="M12 12c1-3 3-4 6-4-2-2-5-2-6 0" />
    </svg>
  );
}

export function CalendarIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}

export function ArrowRight({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 stroke-[2] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] ${className}`}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M5 4h4l2 5-2 1a12 12 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MailIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function PinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v8h3v-8h2.5l.5-3H14V8.5c0-.3.2-.5.5-.5z" />
    </svg>
  );
}

export function GoogleIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <path d="M21 12a9 9 0 1 1-3-6.7" />
      <path d="M21 4v5h-5" />
    </svg>
  );
}

export function ClockIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

export function CheckIcon({ className = "" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-5 w-5 stroke-[2] fill-none stroke-current [stroke-linecap:round] [stroke-linejoin:round] ${className}`}
      aria-hidden="true"
    >
      <path d="M5 12l5 5 9-11" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className}`} aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12l3 3 5-6" />
    </svg>
  );
}

export function ServiceIconByKey({
  iconKey,
  className,
}: {
  iconKey: string;
  className?: string;
}) {
  switch (iconKey) {
    case "concrete":
      return <ConcreteIcon className={className} />;
    case "sealing":
      return <SealingIcon className={className} />;
    case "roof":
      return <RoofIcon className={className} />;
    case "house":
      return <HouseIcon className={className} />;
    case "solar":
      return <SolarIcon className={className} />;
    case "window":
      return <WindowIcon className={className} />;
    default:
      return <ConcreteIcon className={className} />;
  }
}
