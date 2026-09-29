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

export default function CoverageGrid() {
  const { estaciones } = data;
  const days = Math.max(...estaciones.map((e) => e.dias.length));
  const width = estaciones.length * COL - GAP;

  return (
    <svg
      viewBox={`0 0 ${width} ${days}`}
      preserveAspectRatio="none"
      className="h-full w-full"
      shapeRendering="crispEdges"
      role="img"
      aria-label={`Cobertura diaria de PM2.5 en ${estaciones.length} estaciones de Monterrey, 2026`}
    >
      <defs>
        <linearGradient id="coverage-fill" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="0" y2={days}>
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="60%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
      </defs>
      {estaciones.map((e, col) =>
        runs(e.dias).map((r) => (
          <rect
            key={`${col}-${r.start}`}
            x={col * COL}
            y={r.start}
            width={COL - GAP}
            height={r.len}
            fill={r.ok ? "url(#coverage-fill)" : "rgba(255,255,255,0.07)"}
          />
        ))
      )}
    </svg>
  );
}
