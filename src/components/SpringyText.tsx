"use client";
import { useEffect, useRef } from "react";
import { burstPush, disturbance } from "@/lib/disturbance";

const PUSH_RADIUS = 150;
const PUSH_FORCE = 1.6;
const SPRING = 0.06;
const DAMPING = 0.84;
const BURST_BAND = 40;
const BURST_FORCE = 1.2;

type Letter = { el: HTMLSpanElement; hx: number; hy: number; x: number; y: number; vx: number; vy: number };

// Splits text into letters that get nudged by the hero's cursor, then spring back.
export default function SpringyText({ text, highlight }: { text: string; highlight?: string }) {
  const rootRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const spans = Array.from(root.querySelectorAll<HTMLSpanElement>("[data-letter]"));
    let letters: Letter[] = [];
    let raf = 0;
    let running = true;

    // Home = each letter's untransformed center, relative to the particle canvas.
    const measure = () => {
      const origin = disturbance.origin?.getBoundingClientRect();
      if (!origin) return false;
      letters = spans.map((el, i) => {
        const prev = letters[i];
        const r = el.getBoundingClientRect();
        const ox = prev?.x ?? 0;
        const oy = prev?.y ?? 0;
        return {
          el,
          hx: r.left + r.width / 2 - ox - origin.left,
          hy: r.top + r.height / 2 - oy - origin.top,
          x: ox,
          y: oy,
          vx: prev?.vx ?? 0,
          vy: prev?.vy ?? 0,
        };
      });
      return true;
    };

    let measured = false;
    const loop = (now: number) => {
      if (!running) return;
      if (!measured) measured = measure();
      const { pointer } = disturbance;

      for (const l of letters) {
        const cx = l.hx + l.x;
        const cy = l.hy + l.y;

        if (pointer) {
          const dx = cx - pointer.x;
          const dy = cy - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < PUSH_RADIUS && dist > 0.01) {
            const f = (1 - dist / PUSH_RADIUS) ** 2 * PUSH_FORCE;
            l.vx += (dx / dist) * f;
            l.vy += (dy / dist) * f;
          }
        }

        const kick = burstPush(l.hx, l.hy, now, BURST_BAND);
        if (kick) {
          l.vx += kick.fx * BURST_FORCE;
          l.vy += kick.fy * BURST_FORCE;
        }

        l.vx = (l.vx - l.x * SPRING) * DAMPING;
        l.vy = (l.vy - l.y * SPRING) * DAMPING;
        l.x += l.vx;
        l.y += l.vy;

        const moving = Math.abs(l.x) > 0.05 || Math.abs(l.y) > 0.05;
        l.el.style.transform = moving
          ? `translate(${l.x.toFixed(2)}px, ${l.y.toFixed(2)}px) rotate(${(l.vx * 1.5).toFixed(2)}deg)`
          : "";
      }

      raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      measured = measure();
    };
    const onVisibility = () => {
      running = !document.hidden;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    document.fonts?.ready.then(onResize);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      spans.forEach((el) => (el.style.transform = ""));
    };
  }, []);

  // Character range of `highlight` within `text`, colored with the brand cycle.
  const hlStart = highlight ? text.indexOf(highlight) : -1;
  const hlEnd = hlStart >= 0 ? hlStart + highlight!.length : -1;
  const words = text.split(" ");
  let offset = 0;
  return (
    <span ref={rootRef}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, wi) => {
          const wordStart = offset;
          offset += word.length + 1;
          return (
            <span key={wi}>
              <span className="inline-block whitespace-nowrap">
                {Array.from(word).map((ch, ci) => {
                  const i = wordStart + ci;
                  const lit = i >= hlStart && i < hlEnd;
                  return (
                    <span key={ci} data-letter className={`inline-block will-change-transform${lit ? " logo-comun" : ""}`}>
                      {ch}
                    </span>
                  );
                })}
              </span>
              {wi < words.length - 1 && " "}
            </span>
          );
        })}
      </span>
    </span>
  );
}
