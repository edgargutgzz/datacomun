"use client";
import { useEffect, useRef } from "react";
import { burstPush, disturbance } from "@/lib/disturbance";

// Brand cycle: cyan → violet → pink
const PALETTE: [number, number, number][] = [
  [6, 182, 212],
  [139, 92, 246],
  [236, 72, 153],
];

const SPACING = 22;
const MAX_RADIUS = 2.4;
const PUSH_RADIUS = 110;
const SPRING = 0.045;
const DAMPING = 0.86;
const BURST_DELAY = 700; // ms after mount

type Dot = { hx: number; hy: number; x: number; y: number; vx: number; vy: number; glow: number };

function mix(t: number): [number, number, number] {
  const s = (((t % 1) + 1) % 1) * PALETTE.length;
  const i = Math.floor(s) % PALETTE.length;
  const f = s - Math.floor(s);
  const a = PALETTE[i];
  const b = PALETTE[(i + 1) % PALETTE.length];
  return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
}

// Interfering sine waves — a slowly shifting reading across a grid of sensors.
function field(x: number, y: number, t: number) {
  return (
    Math.sin(x * 0.006 + t * 0.6) * Math.cos(y * 0.008 - t * 0.4) +
    Math.sin((x + y) * 0.004 - t * 0.3) * 0.6 +
    Math.cos(Math.hypot(x - 900, y - 200) * 0.01 - t * 0.8) * 0.4
  );
}

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let running = true;
    let burstFired = false;
    const mountedAt = performance.now();
    let dots: Dot[] = [];
    let pointer: { x: number; y: number } | null = null;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      dots = [];
      for (let y = SPACING / 2; y < h; y += SPACING) {
        for (let x = SPACING / 2; x < w; x += SPACING) {
          dots.push({ hx: x, hy: y, x, y, vx: 0, vy: 0, glow: 0 });
        }
      }
    };

    const toLocal = (clientX: number, clientY: number) => {
      const r = canvas.getBoundingClientRect();
      const x = clientX - r.left;
      const y = clientY - r.top;
      return x >= 0 && y >= 0 && x <= r.width && y <= r.height ? { x, y } : null;
    };

    const draw = (now: number) => {
      const t = now / 4000;
      ctx.clearRect(0, 0, w, h);

      disturbance.origin = canvas;
      disturbance.pointer = pointer;
      if (!burstFired && now - mountedAt > BURST_DELAY) {
        disturbance.burst = { x: w * 0.5, y: h * 0.5, start: now };
        burstFired = true;
      }

      for (const d of dots) {
        // Cursor pushes dots away.
        if (pointer) {
          const dx = d.x - pointer.x;
          const dy = d.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < PUSH_RADIUS && dist > 0.01) {
            const f = (1 - dist / PUSH_RADIUS) ** 2 * 2.2;
            d.vx += (dx / dist) * f;
            d.vy += (dy / dist) * f;
            d.glow = Math.max(d.glow, 1 - dist / PUSH_RADIUS);
          }
        }

        const kick = burstPush(d.hx, d.hy, now, 18);
        if (kick) {
          d.vx += kick.fx * 1.6;
          d.vy += kick.fy * 1.6;
          d.glow = Math.max(d.glow, kick.fade);
        }

        // Springy return home — underdamped so dots wobble.
        d.vx = (d.vx + (d.hx - d.x) * SPRING) * DAMPING;
        d.vy = (d.vy + (d.hy - d.y) * SPRING) * DAMPING;
        d.x += d.vx;
        d.y += d.vy;
        d.glow *= 0.96;

        const v = (field(d.hx, d.hy, t) + 2) / 4; // ~0..1
        // Invisible at rest — dots only show up where something stirs them.
        const alpha = Math.min(d.glow * 0.9, 0.95);
        if (alpha < 0.03) continue;

        const [r, g, b] = mix((d.hx / w) * 0.6 + v * 0.25 + t * 0.05);
        const radius = 0.6 + v * MAX_RADIUS + d.glow * 2.6;
        ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${alpha})`;
        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = (now: number) => {
      if (!running) return;
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    // Only a mouse pushes things around; on touch, dragging doesn't feel right.
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      pointer = toLocal(e.clientX, e.clientY);
    };
    const onPointerLeave = () => {
      pointer = null;
    };
    // Touch can't hover, so a tap sets off a burst instead.
    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse") return;
      const p = toLocal(e.clientX, e.clientY);
      if (p) disturbance.burst = { x: p.x, y: p.y, start: performance.now() };
    };

    const onVisibility = () => {
      running = !document.hidden;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      resize();
      if (reduceMotion) draw(0);
    };

    resize();
    if (reduceMotion) {
      draw(0);
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    raf = requestAnimationFrame(loop);
    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      running = false;
      disturbance.origin = null;
      disturbance.pointer = null;
      disturbance.burst = null;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}
