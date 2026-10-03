"use client";
import { useEffect, useRef } from "react";

// Brand cycle: cyan → violet → pink
const PALETTE: [number, number, number][] = [
  [6, 182, 212],
  [139, 92, 246],
  [236, 72, 153],
];

const SPACING = 22;
const MAX_RADIUS = 2.4;

function mix(t: number): [number, number, number] {
  const s = Math.min(Math.max(t, 0), 1) * (PALETTE.length - 1);
  const i = Math.min(Math.floor(s), PALETTE.length - 2);
  const f = s - i;
  const a = PALETTE[i];
  const b = PALETTE[i + 1];
  return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
}

// Interfering sine waves — reads like a slowly shifting reading across a grid of sensors.
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

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const t = time / 4000;
      ctx.clearRect(0, 0, w, h);
      const diag = Math.hypot(w, h);
      for (let y = SPACING / 2; y < h; y += SPACING) {
        for (let x = SPACING / 2; x < w; x += SPACING) {
          const v = (field(x, y, t) + 2) / 4; // ~0..1
          // Fade toward the bottom-left, where the headline sits.
          const reach = Math.hypot(x, h - y) / diag;
          const alpha = v * v * Math.min(reach * 1.4, 1) * 0.55;
          if (alpha < 0.03) continue;
          const [r, g, b] = mix(x / w * 0.7 + v * 0.3);
          ctx.fillStyle = `rgba(${r | 0},${g | 0},${b | 0},${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, 0.6 + v * MAX_RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (time: number) => {
      if (!running) return;
      draw(time);
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      running = !document.hidden && !reduceMotion;
      cancelAnimationFrame(raf);
      if (running) raf = requestAnimationFrame(loop);
    };

    const onResize = () => {
      resize();
      if (reduceMotion) draw(0);
    };

    resize();
    if (reduceMotion) draw(0);
    else raf = requestAnimationFrame(loop);

    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
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
