"use client";
import { useEffect, useRef } from "react";
import { burstPush, disturbance } from "@/lib/disturbance";

const STEP = 6; // px between points
const PUSH_RADIUS = 90;
const PUSH_FORCE = 1.4;
const BURST_BAND = 40;
const BURST_FORCE = 1.2;
const SPRING = 0.05;
const TENSION = 0.25; // pull toward neighbours, so the line ripples like a string
const DAMPING = 0.88;

// An underline that bends away from the cursor and the load burst, then settles.
export default function SpringyLine({ className = "" }: { className?: string }) {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    if (!svg || !path) return;

    let width = 0;
    let ys: number[] = [];
    let vs: number[] = [];
    let raf = 0;
    let running = true;

    const render = () => {
      let d = "";
      for (let i = 0; i < ys.length; i++) {
        d += `${i ? "L" : "M"}${Math.min(i * STEP, width).toFixed(1)} ${(1 + ys[i]).toFixed(2)}`;
      }
      path.setAttribute("d", d);
    };

    const measure = () => {
      width = svg.getBoundingClientRect().width;
      const n = Math.max(2, Math.ceil(width / STEP) + 1);
      ys = new Array(n).fill(0);
      vs = new Array(n).fill(0);
      render();
    };

    measure();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.addEventListener("resize", measure);
      return () => window.removeEventListener("resize", measure);
    }

    const loop = (now: number) => {
      if (!running) return;
      const origin = disturbance.origin?.getBoundingClientRect();
      if (origin) {
        const r = svg.getBoundingClientRect();
        const left = r.left - origin.left;
        const top = r.top - origin.top + 1;
        const { pointer } = disturbance;
        const n = ys.length;

        for (let i = 0; i < n; i++) {
          const px = left + Math.min(i * STEP, width);
          const py = top + ys[i];
          if (pointer) {
            const dx = px - pointer.x;
            const dy = py - pointer.y;
            const dist = Math.hypot(dx, dy);
            if (dist < PUSH_RADIUS && dist > 0.01) {
              vs[i] += (dy / dist) * (1 - dist / PUSH_RADIUS) ** 2 * PUSH_FORCE;
            }
          }
          const kick = burstPush(px, top, now, BURST_BAND);
          if (kick) vs[i] += kick.fy * BURST_FORCE;
        }

        // Ends stay pinned; the middle springs home and pulls on its neighbours.
        for (let i = 1; i < n - 1; i++) {
          const pull = (ys[i - 1] + ys[i + 1]) / 2 - ys[i];
          vs[i] = (vs[i] - ys[i] * SPRING + pull * TENSION) * DAMPING;
        }
        vs[0] = vs[n - 1] = 0;
        for (let i = 0; i < n; i++) ys[i] += vs[i];
        render();
      }
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      running = !document.hidden;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", measure);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 bottom-0 h-[2px] w-full overflow-visible ${className}`}
    >
      <path ref={pathRef} fill="none" strokeWidth={2} strokeLinecap="round" className="cta-stroke" />
    </svg>
  );
}
