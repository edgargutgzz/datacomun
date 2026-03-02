"use client";

import { useEffect, useRef } from "react";
import { Delaunay } from "d3";

const POINT_COUNT = 60;
const SPEED = 0.4;
const BG = "#f9f7f4";
const STROKE = "rgba(0,0,0,0.15)";
const DOT = "rgba(0,0,0,0.5)";

export default function VoronoiBg() {
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

    const points = Array.from({ length: POINT_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED,
      vy: (Math.random() - 0.5) * SPEED,
    }));

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      // Update positions
      for (const p of points) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      // Draw
      ctx.fillStyle = BG;
      ctx.fillRect(0, 0, w, h);

      const coords = points.flatMap((p) => [p.x, p.y]);
      const delaunay = Delaunay.from(points, (p) => p.x, (p) => p.y);
      const voronoi = delaunay.voronoi([0, 0, w, h]);

      // Cells
      ctx.strokeStyle = STROKE;
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length; i++) {
        const cell = voronoi.cellPolygon(i);
        if (!cell) continue;
        ctx.beginPath();
        ctx.moveTo(cell[0][0], cell[0][1]);
        for (let j = 1; j < cell.length; j++) {
          ctx.lineTo(cell[j][0], cell[j][1]);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Seed dots
      ctx.fillStyle = DOT;
      for (const p of points) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />;
}
