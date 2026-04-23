import Image from "next/image";
import Link from "next/link";

export default function Logo({
  className = "",
  width = 180,
}: {
  className?: string;
  width?: number;
}) {
  const height = Math.round(width * (400 / 1200));
  return (
    <Link
      href="/"
      aria-label="California Pressure Washing — home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/logo/logo.png"
        alt="California Pressure Washing"
        width={width * 2}
        height={height * 2}
        priority
        sizes={`${width}px`}
        style={{ width, height: "auto" }}
      />
    </Link>
  );
}
