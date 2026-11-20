import type { CSSProperties } from 'react';

/**
 * Parses a CSS declaration string into a React style object, so the design's
 * original inline CSS can stay verbatim instead of being hand-camelCased.
 * Splits on the first colon only, so values keep their own colons and commas.
 */
export const s = (css: string): CSSProperties =>
  Object.fromEntries(
    css
      .split(';')
      .map((r) => r.trim())
      .filter(Boolean)
      .map((r) => {
        const i = r.indexOf(':');
        const k = r.slice(0, i).trim();
        return [k.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase()), r.slice(i + 1).trim()];
      })
  ) as CSSProperties;

/** Multiplies each RGB channel by `f` — used to derive the darker accent ink. */
export const shade = (hex: string, f: number): string => {
  const n = parseInt(hex.replace('#', ''), 16);
  const c = (v: number) => Math.round(v * f);
  return (
    '#' +
    ((1 << 24) + (c((n >> 16) & 255) << 16) + (c((n >> 8) & 255) << 8) + c(n & 255))
      .toString(16)
      .slice(1)
  );
};

/** Zero-pads a counter: 3 -> "03". */
export const two = (n: number): string => (n < 10 ? '0' : '') + n;
