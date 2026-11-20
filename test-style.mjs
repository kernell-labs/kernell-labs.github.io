// Self-check for the CSS-string -> React style object parser in app/page.jsx.
// Run: node test-style.mjs
import assert from 'node:assert/strict';

const s = (css) =>
  Object.fromEntries(
    css
      .split(';')
      .map((r) => r.trim())
      .filter(Boolean)
      .map((r) => {
        const i = r.indexOf(':');
        const k = r.slice(0, i).trim();
        return [k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()), r.slice(i + 1).trim()];
      })
  );

// camelCase, vendor prefixes, values containing colons/commas/parens, trailing semicolons
assert.deepEqual(s('display: flex; gap: 12px'), { display: 'flex', gap: '12px' });
assert.deepEqual(s('-webkit-font-smoothing: antialiased'), { WebkitFontSmoothing: 'antialiased' });
assert.deepEqual(s('grid-template-columns: repeat(auto-fit, minmax(min(100%, 520px), 1fr));'), {
  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))',
});
assert.deepEqual(s('box-shadow: 0 30px 80px -30px rgba(140,70,10,0.28), 0 0 0 6px rgba(255,255,255,0.6)'), {
  boxShadow: '0 30px 80px -30px rgba(140,70,10,0.28), 0 0 0 6px rgba(255,255,255,0.6)',
});
assert.deepEqual(s('-webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, transparent)'), {
  WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 10%, transparent)',
});
assert.deepEqual(s("font-family: 'Geist Mono', monospace; font: inherit"), {
  fontFamily: "'Geist Mono', monospace",
  font: 'inherit',
});

// accentInk shade()
const shade = (hex, f) => {
  const n = parseInt(hex.replace('#', ''), 16);
  const c = (v) => Math.round(v * f);
  return (
    '#' +
    ((1 << 24) + (c((n >> 16) & 255) << 16) + (c((n >> 8) & 255) << 8) + c(n & 255)).toString(16).slice(1)
  );
};
assert.equal(shade('#FFFFFF', 1), '#ffffff');
assert.equal(shade('#2F4BFF', 0.78), '#253bc7');

console.log('ok');
