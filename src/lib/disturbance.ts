// Shared state between the hero particle field and anything else that should
// react to the same cursor and ripples. Coordinates are relative to `origin`.

export const RIPPLE_SPEED = 0.55; // px per ms
export const RIPPLE_LIFE = 1600; // ms

export type Ripple = { x: number; y: number; start: number; hue: number };

export const disturbance: {
  origin: HTMLElement | null;
  pointer: { x: number; y: number } | null;
  ripples: Ripple[];
} = { origin: null, pointer: null, ripples: [] };
