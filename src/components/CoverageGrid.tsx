"use client";

import { useState, type PointerEvent } from "react";
import data from "@/data/cobertura-pm25-2026.json";

// One column per station, one row per day. Consecutive days with the same
// status are merged into a single rect so the SVG stays small.
const COL = 10;
const GAP = 3;

function runs(dias: string) {
  const out: { start: number; len: number; ok: boolean }[] = [];
  for (let i = 0; i < dias.length; i++) {
    const ok = dias[i] === "1";
    const last = out[out.length - 1];
    if (last && last.ok === ok) last.len++;
    else out.push({ start: i, len: 1, ok });
  }
  return out;
}

const { estaciones, inicio } = data;
const days = Math.max(...estaciones.map((e) => e.dias.length));
const width = estaciones.length * COL - GAP;
const columns = estaciones.map((e) => ({
  nombre: e.estacion,
  dias: e.dias,
  cobertura: Math.round((100 * e.dias.replaceAll("0", "").length) / e.dias.length),
  runs: runs(e.dias),
}));

function fecha(day: number) {
  const d = new Date(`${inicio}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + day);
  return d.toLocaleDateString("es-MX", { day: "numeric", month: "short", timeZone: "UTC" });
}

export default function CoverageGrid() {
  const [hover, setHover] = useState<{ col: number; day: number } | null>(null);

  function onPointer(e: PointerEvent<SVGSVGElement>) {
    const box = e.currentTarget.getBoundingClientRect();
    const col = Math.floor(((e.clientX - box.left) / box.width) * columns.length);
    const day = Math.floor(((e.clientY - box.top) / box.height) * days);
    if (col < 0 || col >= columns.length || day < 0 || day >= days) setHover(null);
    else setHover({ col, day });
  }

  const active = hover && columns[hover.col];

  return (
    <div className="flex flex-1 flex-col">
      <div className="relative flex-1">
        <svg
          viewBox={`0 0 ${width} ${days}`}
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full cursor-crosshair"
          shapeRendering="crispEdges"
          role="img"
          aria-label={`Cobertura diaria de PM2.5 en ${columns.length} estaciones de Monterrey, 2026`}
          onPointerMove={onPointer}
          onPointerDown={onPointer}
          onPointerLeave={() => setHover(null)}
        >
          <defs>
            <linearGradient id="coverage-fill" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={days}>
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="60%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
          {columns.map((c, col) => (
            <g
              key={c.nombre}
              opacity={hover && hover.col !== col ? 0.3 : 1}
              style={{ transition: "opacity 150ms" }}
            >
              {c.runs.map((r) => (
                <rect
                  key={r.start}
                  x={col * COL}
                  y={r.start}
                  width={COL - GAP}
                  height={r.len}
                  fill={r.ok ? "url(#coverage-fill)" : "rgba(255,255,255,0.07)"}
                />
              ))}
            </g>
          ))}
          {hover && (
            <rect x={0} y={hover.day} width={width} height={1} fill="rgba(255,255,255,0.5)" />
          )}
        </svg>
      </div>
      <a
        href="https://www.aireclaro.com/datos"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 min-h-[2.5rem] text-xs text-white/50 hover:text-white/80 transition-colors"
      >
        {active ? (
          <>
            <span className="text-white">{active.nombre}</span> · {active.cobertura}% de días con datos
            <br />
            {fecha(hover.day)}: {active.dias[hover.day] === "1" ? "con datos" : "datos insuficientes"}
          </>
        ) : (
          <>
            Cobertura diaria de PM2.5 · {columns.length} estaciones · ene–ago 2026
            <br />
            Cada barra es una estación del Observatorio del Aire.
          </>
        )}
      </a>
    </div>
  );
}
