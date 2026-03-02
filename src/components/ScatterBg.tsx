"use client";

import { useEffect, useRef } from "react";

const POINT_COUNT = 120;
const CLUSTER_COUNT = 5;
const BG = "#f5f3ff";
const COLORS = [
  [139, 92, 246],   // violet
  [236, 100, 150],  // rose
  [56, 169, 234],   // sky blue
  [34, 197, 150],   // mint
  [234, 179, 8],    // amber yellow
];

type Cluster = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Point = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  alpha: number;
  alphaDelta: number;
  color: number[];
  cluster: number;
};

export default function ScatterBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: -1000, y: -1000 };
    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = -1000; mouse.y = -1000; };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    const clusters: Cluster[] = Array.from({ length: CLUSTER_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
    }));

    const points: Point[] = Array.from({ length: POINT_COUNT }, () => {
      const cluster = Math.floor(Math.random() * CLUSTER_COUNT);
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() < 0.15 ? Math.random() * 3 + 3 : Math.random() * 2 + 1,
        alpha: Math.random(),
        alphaDelta: (Math.random() - 0.5) * 0.005,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        cluster,
      };
    });

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, w, h);

      // Move clusters
      for (const c of clusters) {
        c.x += c.vx;
        c.y += c.vy;
        if (c.x < 0 || c.x > w) c.vx *= -1;
        if (c.y < 0 || c.y > h) c.vy *= -1;
      }

      // Move points with gentle pull toward their cluster
      for (const p of points) {
        const c = clusters[p.cluster];
        const dx = c.x - p.x;
        const dy = c.y - p.y;
        p.vx += dx * 0.0004;
        p.vy += dy * 0.0004;

        // Mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const dist = Math.sqrt(mdx * mdx + mdy * mdy);
        const repelRadius = 120;
        if (dist < repelRadius && dist > 0) {
          const force = (repelRadius - dist) / repelRadius;
          p.vx += (mdx / dist) * force * 2;
          p.vy += (mdy / dist) * force * 2;
        }

        // Jitter to keep points alive
        p.vx += (Math.random() - 0.5) * 0.1;
        p.vy += (Math.random() - 0.5) * 0.1;

        // Speed cap
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 2) { p.vx = (p.vx / speed) * 2; p.vy = (p.vy / speed) * 2; }

        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDelta;

        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        if (p.alpha < 0.4 || p.alpha > 0.95) p.alphaDelta *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${p.alpha.toFixed(2)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
