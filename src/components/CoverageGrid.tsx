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

const MESES = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago"];
const INICIO_MES = [0, 31, 59, 90, 120, 151, 181, 212];

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
      <p className="text-sm text-white/80 leading-snug">
        Cobertura de estaciones en la Zona Metropolitana de Monterrey
      </p>
      <div className="mt-2 mb-5 flex gap-4 text-xs text-white/50">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-[2px] bg-gradient-to-b from-[#06b6d4] to-[#8b5cf6]" />
          Con datos
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-[2px] bg-white/15" />
          Datos insuficientes
        </span>
      </div>
      <div className="flex flex-1 gap-2">
        <div className="relative w-7 text-[10px] text-white/40">
          {MESES.map((m, i) => (
            <span key={m} className="absolute left-0" style={{ top: `${(INICIO_MES[i] / days) * 100}%` }}>
              {m}
            </span>
          ))}
        </div>
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
      </div>
      <p className="mt-4 min-h-[2.5rem] text-xs text-white/50">
        {active ? (
          <>
            <span className="text-white">{active.nombre}</span> · {active.cobertura}% de días con datos
            <br />
            {fecha(hover.day)}: {active.dias[hover.day] === "1" ? "con datos" : "datos insuficientes"}
          </>
        ) : (
          <>
            Cada barra es una estación y cada línea, un día.
            <br />
            Pasa el cursor o toca una barra para ver la estación.
          </>
        )}
      </p>
      <a
        href="https://www.observatoriodelaire.com/datos#:~:text=Cobertura%20de%20estaciones"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 w-fit text-xs text-white/70 underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white transition-colors"
      >
        Ver la gráfica completa en observatoriodelaire.com →
      </a>
    </div>
  );
}
