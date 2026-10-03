// Shared cursor state between the hero particle field and anything else that
// should react to it. Coordinates are relative to `origin`.

export const BURST_SPEED = 0.55; // px per ms
export const BURST_LIFE = 1800; // ms

export const disturbance: {
  origin: HTMLElement | null;
  pointer: { x: number; y: number } | null;
  // One ring on page load, so visitors see the hero is interactive.
  burst: { x: number; y: number; start: number } | null;
} = { origin: null, pointer: null, burst: null };

// Outward push on a point at (x, y) as the burst ring passes it, or null if the ring isn't there.
export function burstPush(x: number, y: number, now: number, band: number) {
  const b = disturbance.burst;
  if (!b) return null;
  const age = now - b.start;
  if (age < 0 || age > BURST_LIFE) return null;
  const dx = x - b.x;
  const dy = y - b.y;
  const dist = Math.hypot(dx, dy) || 1;
  const off = Math.abs(dist - age * BURST_SPEED);
  if (off >= band) return null;
  const fade = 1 - age / BURST_LIFE;
  const f = (1 - off / band) * fade;
  return { fx: (dx / dist) * f, fy: (dy / dist) * f, fade };
}
