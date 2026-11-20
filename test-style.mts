// Self-check for the CSS-string parser and accent shading in app/style.ts.
// Run: npm test   (node strips the types natively, no test framework)
import assert from 'node:assert/strict';
import { s, shade, two } from './app/style.ts';

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

assert.equal(shade('#FFFFFF', 1), '#ffffff');
assert.equal(shade('#2F4BFF', 0.78), '#253bc7');

assert.equal(two(3), '03');
assert.equal(two(12), '12');

console.log('ok');
