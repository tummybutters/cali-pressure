"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
  aspect?: string;
  priority?: boolean;
};

export default function BeforeAfter({
  before,
  after,
  beforeAlt = "Before",
  afterAlt = "After",
  aspect = "4 / 3",
  priority = false,
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(4, Math.min(96, next)));
  }, []);

  useEffect(() => {
    function onMove(e: MouseEvent | TouchEvent) {
      if (!dragging.current) return;
      const x =
        "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      update(x);
    }
    function onUp() {
      dragging.current = false;
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [update]);

  return (
    <div
      ref={wrapRef}
      className="ba-slider"
      style={{ aspectRatio: aspect }}
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onTouchStart={(e) => {
        dragging.current = true;
        update(e.touches[0].clientX);
      }}
    >
      <Image
        src={after}
        alt={afterAlt}
        fill
        sizes="(min-width: 1024px) 640px, 100vw"
        priority={priority}
        className="object-cover"
      />

      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          priority={priority}
          className="object-cover"
        />
      </div>

      <span className="absolute left-4 top-4 rounded bg-black/70 px-2.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-white/90">
        BEFORE
      </span>
      <span className="absolute right-4 top-4 rounded bg-black/70 px-2.5 py-1 text-[11px] font-semibold tracking-[0.2em] text-white/90">
        AFTER
      </span>

      <div className="ba-handle" style={{ left: `calc(${pos}% - 1.5px)` }} />
    </div>
  );
}
