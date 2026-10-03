// Shared cursor state between the hero particle field and anything else that
// should react to it. Coordinates are relative to `origin`.

export const disturbance: {
  origin: HTMLElement | null;
  pointer: { x: number; y: number } | null;
} = { origin: null, pointer: null };
