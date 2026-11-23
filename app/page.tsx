'use client';

import { useEffect, useState, type ReactNode } from 'react';
import {
  ACCENT,
  DEVICES,
  EMAIL,
  FILES,
  LOCATION,
  MARQUEE_WORDS,
  MODES,
  PIPE,
  ROTATING,
  RUN_ID,
  SECTORS,
  STEPS,
} from './data';
import { s, shade, two } from './style';

const accent = ACCENT;
const accentInk = shade(accent, 0.78);

interface Product {
  href: string;
  name: string;
  desc: string;
  icon: ReactNode;
  isNew?: boolean;
}

interface Principle {
  n: string;
  title: string;
  body: string;
}

interface ApproachStep {
  step: string;
  title: string;
  body: string;
}

interface FooterNav {
  label: string;
  heading: string;
  links: [href: string, text: string][];
}

const PRODUCTS: Product[] = [
  {
    href: '#platform',
    name: 'Foundry',
    desc: 'Turn raw records, documents and logs into training-ready data.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#1F1F1F" strokeWidth="1.5" aria-hidden="true">
        <ellipse cx="18" cy="9" rx="11" ry="4" />
        <path d="M7 9v9c0 2.2 4.9 4 11 4s11-1.8 11-4V9" />
        <path d="M7 18v9c0 2.2 4.9 4 11 4s11-1.8 11-4v-9" />
      </svg>
    ),
  },
  {
    href: '#platform',
    name: 'Tune',
    desc: 'Fine-tuning, preference tuning and RL on open-weight models.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#1F1F1F" strokeWidth="1.5" aria-hidden="true">
        <path d="M6 26c4-10 8-14 12-14s8 4 12 14" />
        <circle cx="18" cy="12" r="3" fill={accent} stroke="none" />
        <path d="M4 30h28" />
      </svg>
    ),
  },
  {
    href: '#platform',
    name: 'Eval',
    desc: 'Benchmarks built from your work, red-teaming and release gates.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#1F1F1F" strokeWidth="1.5" aria-hidden="true">
        <rect x="5" y="5" width="26" height="26" rx="5" />
        <path d="M11 23l5-6 4 4 6-8" />
      </svg>
    ),
  },
  {
    href: '#ondevice',
    name: 'Edge',
    isNew: true,
    desc: 'Distilled small models that run offline on phones and edge hardware.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#1F1F1F" strokeWidth="1.5" aria-hidden="true">
        <rect x="11" y="3" width="14" height="30" rx="3.5" />
        <rect x="15" y="14" width="6" height="6" rx="1.5" fill={accent} stroke="none" />
      </svg>
    ),
  },
  {
    href: '#deploy',
    name: 'Serve',
    desc: 'Optimized inference in your cloud, data centre or air-gapped site.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="#1F1F1F" strokeWidth="1.5" aria-hidden="true">
        <rect x="5" y="6" width="26" height="9" rx="2.5" />
        <rect x="5" y="21" width="26" height="9" rx="2.5" />
        <circle cx="10" cy="10.5" r="1.4" fill="#1F1F1F" />
        <circle cx="10" cy="25.5" r="1.4" fill="#1F1F1F" />
      </svg>
    ),
  },
];

const PRINCIPLES: Principle[] = [
  {
    n: '001',
    title: 'Your weights.',
    body: 'Every model we train is yours. No lock-in, no per-token rent on your own intelligence.',
  },
  {
    n: '002',
    title: 'Your perimeter.',
    body: 'Training and inference run where the data lives, down to a single device.',
  },
  {
    n: '003',
    title: 'Your outcomes.',
    body: 'Measured on your tasks and your people, never on public leaderboards.',
  },
];

const EDGE_PIPELINE: [label: string, body: string][] = [
  ['01 · DISTILL', 'A compact student learns your large model’s skills and voice.'],
  ['02 · QUANTIZE', 'Memory and power cut to fit the chip it ships on.'],
  ['03 · MEASURE', 'Latency and quality tested on the real device, not a simulator.'],
];

const APPROACH: ApproachStep[] = [
  {
    step: 'STEP 01',
    title: 'Scope',
    body: 'We pick one high-value problem with you, audit the data you already have and define what success looks like in production.',
  },
  {
    step: 'STEP 02',
    title: 'Build',
    body: 'Our research engineers post-train, evaluate and iterate with your experts in the loop until the model clears the bar you set.',
  },
  {
    step: 'STEP 03',
    title: 'Own',
    body: 'You receive the weights, the pipelines and the playbook. Your team runs it, and we stay close for the next problem.',
  },
];

const SECTOR_OPTIONS: string[] = [
  'Healthcare',
  'Finance',
  'Energy',
  'Defence & security',
  'Agriculture',
  'Public sector',
  'Telecom & mobile',
  'Other',
];

const FOOTER: FooterNav[] = [
  {
    label: 'Products',
    heading: 'PRODUCTS',
    links: [
      ['#products', 'Foundry'],
      ['#products', 'Tune'],
      ['#products', 'Eval'],
      ['#ondevice', 'Edge'],
      ['#deploy', 'Serve'],
    ],
  },
  {
    label: 'Sectors',
    heading: 'SECTORS',
    links: [
      ['#sectors', 'Healthcare'],
      ['#sectors', 'Finance'],
      ['#sectors', 'Energy'],
      ['#sectors', 'Defence'],
      ['#sectors', 'Public sector'],
    ],
  },
  {
    label: 'Company',
    heading: 'COMPANY',
    links: [
      ['#approach', 'Approach'],
      ['#contact', 'Careers'],
      ['#contact', 'Contact'],
      ['#top', 'Privacy'],
    ],
  },
];

const Check = ({
  size = 15,
  stroke = accent,
  width = 2,
}: {
  size?: number;
  stroke?: string;
  width?: number;
}) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={stroke} strokeWidth={width} aria-hidden="true">
    <path d="M3 8.5l3 3 7-7" />
  </svg>
);

const Arrow = ({ size = 16, stroke = '#FFFFFF' }: { size?: number; stroke?: string }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" stroke={stroke} strokeWidth="1.8" aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

const Logo = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden="true">
    <rect x="1" y="1" width="26" height="26" rx="7" fill="#1F1F1F" />
    <rect x="9" y="9" width="10" height="10" rx="2.5" fill={accent} />
  </svg>
);

export default function Page() {
  const [file, setFile] = useState(0);
  const [step, setStep] = useState(0);
  const [sector, setSector] = useState(0);
  const [device, setDevice] = useState(0);
  const [mode, setMode] = useState(1);
  const [sent, setSent] = useState(false);
  const [auto, setAuto] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) setAuto(false);
  }, []);

  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setDevice((d) => (d + 1) % DEVICES.length), 5000);
    return () => clearInterval(t);
  }, [auto]);

  const cf = FILES[file];
  const runIdx = file + 1;
  const cs = STEPS[step];
  const cz = SECTORS[sector];
  const cd = DEVICES[device];
  const cm = MODES[mode];
  const marquee = MARQUEE_WORDS.concat(MARQUEE_WORDS);

  return (
    <div
      style={s(
        "width: 100%; background: #FFFFFF; color: #1F1F1F; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased"
      )}
    >
      {/* ANNOUNCEMENT */}
      <a
        href="#ondevice"
        style={s(
          'display: flex; justify-content: center; align-items: center; gap: 12px; padding: 10px 20px; background: #1F1F1F; color: #E9EAEE; font-size: 13px; flex-wrap: wrap; text-align: center'
        )}
      >
        <span
          style={s(
            `font-family: 'Geist Mono', monospace; font-size: 11px; padding: 2px 8px; border-radius: 0; background: ${accent}; color: #FFFFFF; letter-spacing: 0.04em`
          )}
        >
          NEW
        </span>
        <span className="kl-ann-long">
          Kernel Edge: specialized small models that run on phones, laptops and edge hardware
        </span>
        <span className="kl-ann-short">Kernel Edge: small models for any device</span>
        <span aria-hidden="true">→</span>
      </a>

      {/* NAV */}
      <header
        style={s(
          'position: sticky; top: 0; z-index: 10; background: rgba(255,255,255,0.88); backdrop-filter: saturate(180%) blur(14px); border-bottom: 1px solid #ECEDF0'
        )}
      >
        <nav
          aria-label="Main"
          style={s(
            'max-width: 1280px; margin: 0 auto; padding: 14px clamp(20px, 4vw, 40px); display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 16px'
          )}
        >
          <a href="#top" style={s('display: flex; align-items: center; gap: 10px; color: #1F1F1F')}>
            <Logo />
            <span style={s('font-weight: 600; font-size: 19px; letter-spacing: -0.02em')}>Kernel Labs</span>
          </a>
          <div className={menuOpen ? 'kl-menu kl-menu-open' : 'kl-menu'}>
            <button
              type="button"
              className="kl-menu-toggle kl-btn"
              aria-label="Menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="#1F1F1F" strokeWidth="1.6" aria-hidden="true">
                {menuOpen ? <path d="M4 4l10 10M14 4L4 14" /> : <path d="M2 5h14M2 9h14M2 13h14" />}
              </svg>
            </button>
            {/* Tapping any link dismisses the dropdown. */}
            <div className="kl-menu-body" onClick={() => setMenuOpen(false)}>
              <a href="#products">Products</a>
              <a href="#platform">Platform</a>
              <a href="#sectors">Sectors</a>
              <a href="#ondevice">Edge</a>
              <a href="#deploy">Deployment</a>
              <div className="kl-menu-cta" style={s('display: flex; gap: 8px')}>
                <a
                  href="#contact"
                  className="kl-btn kl-ghost"
                  style={s(
                    'padding: 9px 16px; border-radius: 0; border: 1px solid #DFE1E6; color: #1F1F1F; font-weight: 500'
                  )}
                >
                  Talk to an engineer
                </a>
                <a
                  href="#contact"
                  className="kl-btn"
                  style={s('padding: 9px 16px; border-radius: 0; background: #1F1F1F; color: #FFFFFF; font-weight: 500')}
                >
                  Start building
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" style={s('background: #FFFFFF')}>
        <div
          style={s(
            'max-width: 1280px; margin: 0 auto; padding: clamp(56px, 8vw, 104px) clamp(20px, 4vw, 40px) clamp(20px, 3vw, 40px)'
          )}
        >
          <div
            style={s(
              'display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 520px), 1fr)); gap: clamp(32px, 5vw, 80px); align-items: end'
            )}
          >
            <div style={s('display: flex; flex-direction: column; align-items: flex-start; gap: 28px')}>
              <a
                href="#ondevice"
                className="kl-btn kl-ghost"
                style={s(
                  'display: inline-flex; align-items: center; gap: 10px; padding: 5px 14px 5px 5px; border-radius: 0; background: #FFFFFF; border: 1px solid #E3E5EA; font-size: 13px; color: #3B3F4A'
                )}
              >
                <span
                  style={s(
                    'display: inline-flex; align-items: center; gap: 6px; padding: 3px 10px; border-radius: 0; background: #1F1F1F; color: #FFFFFF; font-weight: 500'
                  )}
                >
                  <span
                    className="kl-pulse"
                    aria-hidden="true"
                    style={s('width: 6px; height: 6px; border-radius: 50%; background: #FFFFFF')}
                  />
                  New
                </span>
                <span>Kernel Edge: small models for any device</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#3B3F4A" strokeWidth="1.8" aria-hidden="true">
                  <path d="M5 3l5 5-5 5" />
                </svg>
              </a>
              <h1
                className="kl-h1"
                style={s('margin: 0; font-weight: 400; line-height: 0.86; letter-spacing: -0.05em')}
              >
                Own your
                <br />
                <em style={s(`font-style: normal; color: ${accent}`)}>intelligence.</em>
              </h1>
            </div>
            <div style={s('display: flex; flex-direction: column; gap: 26px; padding-bottom: 10px; max-width: 520px')}>
              <p
                style={s(
                  'margin: 0; font-size: clamp(22px, 2vw, 28px); line-height: 1.2; letter-spacing: -0.02em; color: #1F1F1F'
                )}
              >
                Specialized models for
                <br />
                <span
                  className="kl-rot"
                  style={s('display: inline-block; height: 1.2em; overflow: hidden; vertical-align: bottom')}
                >
                  <span
                    className="kl-rot-in"
                    style={s(`display: flex; flex-direction: column; color: ${accentInk}; font-weight: 500`)}
                  >
                    {ROTATING.map((w, i) => (
                      <span key={i} style={s('height: 1.2em; line-height: 1.2em')}>
                        {w}
                      </span>
                    ))}
                  </span>
                </span>
              </p>
              <p style={s('margin: 0; font-size: 17px; line-height: 1.6; color: #5F6470')}>
                We post-train open models on the data only you have, prove them on your real tasks and deploy them
                anywhere, from your data centre to the phone in your team’s pocket.
              </p>
              <div style={s('display: flex; flex-wrap: wrap; gap: 10px')}>
                <a
                  href="#contact"
                  className="kl-btn"
                  style={s(
                    'display: inline-flex; align-items: center; gap: 10px; padding: 15px 24px; border-radius: 0; background: #1F1F1F; color: #FFFFFF; font-weight: 500; font-size: 15px; box-shadow: 0 14px 30px -16px rgba(60,30,5,.7)'
                  )}
                >
                  Start a pilot
                  <Arrow />
                </a>
                <a
                  href="#contact"
                  className="kl-btn kl-ghost"
                  style={s(
                    'display: inline-flex; align-items: center; padding: 15px 24px; border-radius: 0; border: 1px solid #DFE1E6; background: #FFFFFF; color: #1F1F1F; font-weight: 500; font-size: 15px'
                  )}
                >
                  Talk to an engineer
                </a>
              </div>
            </div>
          </div>

          {/* Stage */}
          <div
            style={s(
              'position: relative; overflow: hidden; margin-top: clamp(48px, 6vw, 80px); background: #FFF8E1; border: 1px solid #F1E3BF; border-bottom: none; padding: clamp(72px, 6.5vw, 96px) clamp(12px, 5vw, 72px) 0'
            )}
          >
            <div aria-hidden="true" className="kl-dots kl-fade" style={s('position: absolute; inset: 0')} />
            <div aria-hidden="true" style={s('position: absolute; left: 50%; top: 46%; width: 0; height: 0')}>
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="kl-ring"
                  style={s(
                    `position: absolute; left: -300px; top: -300px; width: 600px; height: 600px; border-radius: 0; border: 1px solid ${accent}`
                  )}
                />
              ))}
            </div>
            <div
              style={s(
                "position: absolute; z-index: 2; top: 32px; left: 0; right: 0; display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 24px; font-family: 'Geist Mono', monospace; font-size: 11.5px; letter-spacing: 0.04em; color: #3B3F4A"
              )}
            >
              {['OPEN-WEIGHT MODELS', 'YOUR PERIMETER', 'YOUR WEIGHTS'].map((t) => (
                <span key={t} style={s('display: inline-flex; align-items: center; gap: 7px')}>
                  <Check />
                  {t}
                </span>
              ))}
            </div>
            <div
              className="kl-float kl-bob"
              aria-hidden="true"
              style={s(
                'position: absolute; z-index: 3; left: clamp(12px, 2.5vw, 36px); top: 14px; display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 0; background: #FFFFFF; border: 1px solid #E3E5EA; box-shadow: 0 20px 40px -20px rgba(140,70,10,.3); font-size: 13px; text-align: left'
              )}
            >
              <span
                style={s(
                  'width: 30px; height: 30px; border-radius: 0; background: #FFF0E5; display: flex; align-items: center; justify-content: center'
                )}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke={accent} strokeWidth="1.6">
                  <rect x="3" y="7" width="10" height="7" rx="1.5" />
                  <path d="M5 7V5a3 3 0 016 0v2" />
                </svg>
              </span>
              <span style={s('display: flex; flex-direction: column; line-height: 1.3')}>
                <span style={s('font-weight: 500')}>Egress: none</span>
                <span style={s('color: #6B707B; font-size: 12px')}>Data stays in your perimeter</span>
              </span>
            </div>
            <div
              className="kl-float kl-bob2"
              aria-hidden="true"
              style={s(
                'position: absolute; z-index: 3; right: clamp(12px, 2.5vw, 36px); top: 14px; display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 0; background: #FFFFFF; border: 1px solid #E3E5EA; box-shadow: 0 20px 40px -20px rgba(140,70,10,.3); font-size: 13px; text-align: left'
              )}
            >
              <span
                style={s(
                  'width: 30px; height: 30px; border-radius: 0; background: #1F1F1F; display: flex; align-items: center; justify-content: center'
                )}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" strokeWidth="1.6">
                  <rect x="5" y="1.5" width="6" height="13" rx="1.6" />
                </svg>
              </span>
              <span style={s('display: flex; flex-direction: column; line-height: 1.3')}>
                <span style={s('font-weight: 500')}>Distilled for phones</span>
                <span style={s('color: #6B707B; font-size: 12px')}>Runs fully offline</span>
              </span>
            </div>

            {/* Product window */}
            <div
              style={s(
                'position: relative; z-index: 1; width: 100%; max-width: 1080px; margin: 0 auto; background: #FFFFFF; border: 1px solid #DDE0E7; border-bottom: none; border-radius: 0; box-shadow: 0 30px 80px -30px rgba(140,70,10,0.28), 0 0 0 6px rgba(255,255,255,0.6); overflow: hidden; text-align: left'
              )}
            >
              <div
                style={s(
                  'display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px; border-bottom: 1px solid #ECEDF0; flex-wrap: wrap; background: #FFFDF7'
                )}
              >
                <div style={s('display: flex; align-items: center; gap: 14px')}>
                  <div style={s('display: flex; gap: 6px')} aria-hidden="true">
                    {[0, 1, 2].map((i) => (
                      <span key={i} style={s('width: 10px; height: 10px; border-radius: 50%; background: #E3E5EA')} />
                    ))}
                  </div>
                  <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470")}>
                    kernel / your-org / clinical-assist
                  </span>
                </div>
                <div
                  role="group"
                  aria-label="Pipeline step"
                  style={s('display: flex; gap: 2px; padding: 3px; border-radius: 0; background: #F6EFDF; font-size: 13px')}
                >
                  {FILES.map((f, i) => (
                    <button
                      key={f.label}
                      type="button"
                      className="kl-btn"
                      onClick={() => setFile(i)}
                      aria-pressed={i === file}
                      style={s(
                        i === file
                          ? 'font-family: inherit; font-size: inherit; font-weight: 500; padding: 7px 14px; min-height: 34px; border-radius: 0; border: none; background: #FFFFFF; color: #1F1F1F; box-shadow: 0 1px 2px rgba(60,30,5,.12)'
                          : 'font-family: inherit; font-size: inherit; font-weight: 400; padding: 7px 14px; min-height: 34px; border-radius: 0; border: none; background: transparent; color: #5F6470'
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>
              <div style={s('display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr))')}>
                <div
                  style={s(
                    "padding: 24px 28px 32px; font-family: 'Geist Mono', monospace; font-size: 13.5px; line-height: 2; border-right: 1px solid #ECEDF0; background: #FFFDF7; min-height: 320px"
                  )}
                >
                  <div style={s('color: #8A8F9A')}>{cf.comment}</div>
                  {cf.lines.map(([k, v]) => (
                    <div key={k} style={s('display: flex; gap: 12px; flex-wrap: wrap')}>
                      <span style={s(`color: ${accentInk}; min-width: 112px`)}>{k}:</span>
                      <span style={s('color: #1F2229')}>{v}</span>
                    </div>
                  ))}
                  <div style={s('margin-top: 14px; color: #5F6470')}>
                    $ kernel {cf.cmd}{' '}
                    <span
                      className="kl-caret"
                      style={s(`display: inline-block; width: 8px; height: 16px; background: ${accent}; vertical-align: -3px`)}
                    />
                  </div>
                </div>
                <div style={s('padding: 24px 28px 32px; display: flex; flex-direction: column; gap: 18px')}>
                  <div
                    style={s('display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: #5F6470')}
                  >
                    <span>Pipeline</span>
                    <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px")}>{RUN_ID}</span>
                  </div>
                  <div style={s('display: flex; flex-direction: column; gap: 6px')}>
                    {PIPE.map(([name, desc], i) => {
                      const done = i < runIdx;
                      const running = i === runIdx;
                      return (
                        <div
                          key={name}
                          style={s(
                            `display: flex; align-items: center; gap: 14px; padding: 12px 14px; border-radius: 0; border: 1px solid ${
                              running ? accent : '#ECEDF0'
                            }; background: ${running ? '#FFF6EF' : '#FFFFFF'}`
                          )}
                        >
                          {done && (
                            <span
                              aria-hidden="true"
                              style={s(
                                'width: 22px; height: 22px; border-radius: 50%; background: #1F1F1F; display: flex; align-items: center; justify-content: center'
                              )}
                            >
                              <Check size={12} stroke="#FFFFFF" width={2.4} />
                            </span>
                          )}
                          {running && (
                            <span
                              aria-hidden="true"
                              style={s(
                                `width: 22px; height: 22px; border-radius: 50%; border: 2px solid ${accent}; display: flex; align-items: center; justify-content: center`
                              )}
                            >
                              <span
                                className="kl-pulse"
                                style={s(`width: 8px; height: 8px; border-radius: 50%; background: ${accent}`)}
                              />
                            </span>
                          )}
                          {!done && !running && (
                            <span
                              aria-hidden="true"
                              style={s('width: 22px; height: 22px; border-radius: 50%; border: 1.5px dashed #C3C6CE')}
                            />
                          )}
                          <span style={s('flex: 1; display: flex; flex-direction: column; line-height: 1.3')}>
                            <span style={s('font-weight: 500; font-size: 14px')}>{name}</span>
                            <span style={s('font-size: 12.5px; color: #6B707B')}>{desc}</span>
                          </span>
                          <span
                            style={s(
                              `font-family: 'Geist Mono', monospace; font-size: 11.5px; color: ${
                                done ? '#1F1F1F' : running ? accent : '#8A8F9A'
                              }`
                            )}
                          >
                            {done ? 'PASSED' : running ? 'RUNNING' : 'QUEUED'}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTOR MARQUEE */}
      <section
        aria-label="Sectors we serve"
        style={s(
          'border-bottom: 1px solid #ECEDF0; padding: 28px 0; overflow: hidden; display: flex; align-items: center; gap: 40px'
        )}
      >
        <div
          style={s(
            'overflow: hidden; width: 100%; -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent); mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)'
          )}
        >
          <div className="kl-track">
            {marquee.map((m, i) => (
              <span
                key={i}
                style={s(
                  'display: inline-flex; align-items: center; gap: 14px; padding: 0 28px; font-size: 24px; font-weight: 500; letter-spacing: -0.02em; color: #8A8F9A; white-space: nowrap'
                )}
              >
                <span aria-hidden="true" style={s('width: 6px; height: 6px; border-radius: 0; background: #C3C6CE')} />
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section
        id="products"
        style={s('max-width: 1280px; margin: 0 auto; padding: clamp(88px, 10vw, 128px) clamp(20px, 4vw, 40px) 40px')}
      >
        <div
          style={s(
            'display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 48px'
          )}
        >
          <div style={s('display: flex; flex-direction: column; gap: 18px; max-width: 760px')}>
            <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470; letter-spacing: 0.06em")}>
              [01] PRODUCTS
            </span>
            <h2
              style={s(
                'margin: 0; font-weight: 500; font-size: clamp(40px, 5vw, 68px); line-height: 1; letter-spacing: -0.035em'
              )}
            >
              One stack for every model <em style={s(`font-style: normal; color: ${accent}`)}>you will ever own.</em>
            </h2>
          </div>
          <p style={s('margin: 0; max-width: 380px; color: #5F6470')}>
            Use the full pipeline or the pieces you need. Every product runs in your environment and every artifact
            belongs to you.
          </p>
        </div>
        <div style={s('display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 12px')}>
          {PRODUCTS.map((p) => (
            <a
              key={p.name}
              href={p.href}
              className="kl-tile"
              style={s(
                'border: 1px solid #E6E7EB; border-radius: 0; padding: 26px 24px; display: flex; flex-direction: column; gap: 40px; background: #FFFFFF; color: #1F1F1F'
              )}
            >
              {p.icon}
              <span style={s('display: flex; flex-direction: column; gap: 6px')}>
                <span style={s('font-weight: 600; font-size: 19px; letter-spacing: -0.015em')}>
                  {p.name}
                  {p.isNew && (
                    <span
                      style={s(
                        `font-family: 'Geist Mono', monospace; font-size: 10.5px; font-weight: 500; padding: 2px 7px; border-radius: 0; background: #FFF0E5; color: ${accentInk}; vertical-align: 3px; margin-left: 8px`
                      )}
                    >
                      NEW
                    </span>
                  )}
                </span>
                <span style={s('font-size: 14.5px; color: #5F6470; line-height: 1.5')}>{p.desc}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* STATEMENT */}
      <section style={s('max-width: 1280px; margin: 0 auto; padding: clamp(80px, 10vw, 136px) clamp(20px, 4vw, 40px)')}>
        <p
          style={s(
            'margin: 0; max-width: 1140px; font-weight: 400; font-size: clamp(32px, 4.3vw, 60px); line-height: 1.1; letter-spacing: -0.03em; color: #1F1F1F'
          )}
        >
          Intelligence is becoming the core infrastructure of this century.{' '}
          <span style={s('color: #9A9EA8')}>
            The hospitals, banks, grids and nations that run the world should
          </span>{' '}
          <em style={s(`font-style: normal; color: ${accent}`)}>own it, not rent it.</em>{' '}
          <span style={s('color: #9A9EA8')}>We build it with them, then hand over the keys.</span>
        </p>
      </section>

      {/* PRINCIPLES */}
      <section style={s('border-top: 1px solid #ECEDF0; border-bottom: 1px solid #ECEDF0')}>
        <div
          style={s(
            'max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr))'
          )}
        >
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.n}
              style={s(
                `padding: 48px clamp(20px, 4vw, 40px); ${
                  i < PRINCIPLES.length - 1 ? 'border-right: 1px solid #ECEDF0; ' : ''
                }display: flex; flex-direction: column; gap: 56px`
              )}
            >
              <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470")}>{p.n}</span>
              <div style={s('display: flex; flex-direction: column; gap: 10px')}>
                <span
                  style={s(
                    'font-weight: 500; font-size: clamp(36px, 3.6vw, 52px); letter-spacing: -0.035em; line-height: 1'
                  )}
                >
                  {p.title}
                </span>
                <span style={s('color: #5F6470')}>{p.body}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLATFORM */}
      <section
        id="platform"
        style={s('max-width: 1280px; margin: 0 auto; padding: clamp(88px, 10vw, 136px) clamp(20px, 4vw, 40px)')}
      >
        <div
          style={s(
            'display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 48px'
          )}
        >
          <div style={s('display: flex; flex-direction: column; gap: 18px; max-width: 760px')}>
            <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470; letter-spacing: 0.06em")}>
              [02] PLATFORM
            </span>
            <h2
              style={s(
                'margin: 0; font-weight: 500; font-size: clamp(40px, 5vw, 68px); line-height: 1; letter-spacing: -0.035em'
              )}
            >
              From raw data to a model <em style={s(`font-style: normal; color: ${accent}`)}>you own.</em>
            </h2>
          </div>
          <p style={s('margin: 0; max-width: 380px; color: #5F6470')}>
            Four stages, run end to end by our research engineers alongside your domain experts.
          </p>
        </div>
        <div style={s('display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr)); gap: 16px')}>
          <div
            role="group"
            aria-label="Pipeline stages"
            style={s('display: flex; flex-direction: column; border-top: 1px solid #ECEDF0')}
          >
            {STEPS.map((st, i) => {
              const on = i === step;
              return (
                <button
                  key={st.name}
                  type="button"
                  className={on ? 'kl-btn' : 'kl-btn kl-row'}
                  onClick={() => setStep(i)}
                  aria-pressed={on}
                  style={s(
                    `font: inherit; text-align: left; display: flex; align-items: center; gap: 24px; padding: 26px 8px; border: none; border-bottom: 1px solid #ECEDF0; background: transparent; color: ${
                      on ? '#1F1F1F' : '#8A8F9A'
                    }`
                  )}
                >
                  <span
                    style={s(
                      `font-family: 'Geist Mono', monospace; font-size: 12px; color: ${on ? accentInk : '#9A9EA8'}`
                    )}
                  >
                    {two(i + 1)}
                  </span>
                  <span style={s('display: flex; flex-direction: column; gap: 4px; flex: 1')}>
                    <span
                      style={s(
                        'font-weight: 500; font-size: clamp(26px, 2.6vw, 34px); letter-spacing: -0.04em; line-height: 1.1'
                      )}
                    >
                      {st.name}
                    </span>
                    <span style={s(`font-size: 14px; color: ${on ? '#5F6470' : '#6B707B'}`)}>{st.tag}</span>
                  </span>
                  {on ? (
                    <span
                      aria-hidden="true"
                      style={s(
                        `width: 36px; height: 36px; border-radius: 50%; background: ${accentInk}; display: flex; align-items: center; justify-content: center`
                      )}
                    >
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="#FFFFFF" strokeWidth="2">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </span>
                  ) : (
                    <span
                      aria-hidden="true"
                      style={s('width: 36px; height: 36px; border-radius: 50%; border: 1px solid #DFE1E6')}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div
            style={s(
              'border-radius: 0; background: #FFFAEB; border: 1px solid #ECEDF0; padding: clamp(28px, 4vw, 48px); display: flex; flex-direction: column; gap: 22px'
            )}
          >
            <div
              style={s(
                "display: flex; align-items: center; justify-content: space-between; gap: 12px; font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470"
              )}
            >
              <span>STAGE {two(step + 1)} / 04</span>
              <span
                style={s(
                  `padding: 4px 10px; border-radius: 0; background: #FFFFFF; border: 1px solid #E3E5EA; color: ${accentInk}`
                )}
              >
                {cs.tag}
              </span>
            </div>
            <h3
              style={s(
                'margin: 0; font-weight: 500; font-size: clamp(32px, 3.4vw, 46px); line-height: 1.02; letter-spacing: -0.03em'
              )}
            >
              {cs.name}
            </h3>
            <p style={s('margin: 0; font-size: 17px; color: #3B3F4A')}>{cs.body}</p>
            <div style={s('display: flex; flex-direction: column; gap: 8px; margin-top: 4px')}>
              {cs.points.map((t) => (
                <div
                  key={t}
                  style={s(
                    'display: flex; align-items: center; gap: 14px; padding: 14px 16px; border-radius: 0; background: #FFFFFF; border: 1px solid #E6E7EB; color: #1F2229; font-size: 15px'
                  )}
                >
                  <Check size={16} />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section
        id="sectors"
        style={s('background: #FFFAEB; border-top: 1px solid #ECEDF0; border-bottom: 1px solid #ECEDF0')}
      >
        <div style={s('max-width: 1280px; margin: 0 auto; padding: clamp(88px, 10vw, 136px) clamp(20px, 4vw, 40px)')}>
          <div
            style={s(
              'display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 40px'
            )}
          >
            <div style={s('display: flex; flex-direction: column; gap: 18px; max-width: 780px')}>
              <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470; letter-spacing: 0.06em")}>
                [03] SECTORS
              </span>
              <h2
                style={s(
                  'margin: 0; font-weight: 500; font-size: clamp(40px, 5vw, 68px); line-height: 1; letter-spacing: -0.035em'
                )}
              >
                AI pointed at the problems <em style={s(`font-style: normal; color: ${accent}`)}>that matter.</em>
              </h2>
            </div>
            <p style={s('margin: 0; max-width: 380px; color: #5F6470')}>
              Where the data is sensitive, the stakes are high and generic models fall short.
            </p>
          </div>
          <div
            role="group"
            aria-label="Choose a sector"
            className="kl-chips"
            style={s('display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px')}
          >
            {SECTORS.map((z, i) => {
              const on = i === sector;
              return (
                <button
                  key={z.name}
                  type="button"
                  className={on ? 'kl-btn' : 'kl-btn kl-ghost'}
                  onClick={() => setSector(i)}
                  aria-pressed={on}
                  style={s(
                    on
                      ? 'font-family: inherit; font-size: 15px; font-weight: 500; padding: 11px 18px; min-height: 44px; border-radius: 0; border: 1px solid #1F1F1F; background: #1F1F1F; color: #FFFFFF'
                      : 'font-family: inherit; font-size: 15px; font-weight: 400; padding: 11px 18px; min-height: 44px; border-radius: 0; border: 1px solid #DFE1E6; background: #FFFFFF; color: #3B3F4A'
                  )}
                >
                  {z.name}
                </button>
              );
            })}
          </div>
          <div
            style={s(
              'background: #FFFFFF; border: 1px solid #E6E7EB; border-radius: 0; overflow: hidden; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr))'
            )}
          >
            <div
              style={s(
                'padding: clamp(32px, 4.5vw, 60px); display: flex; flex-direction: column; justify-content: space-between; gap: 48px; border-right: 1px solid #ECEDF0; min-height: 480px'
              )}
            >
              <div style={s('display: flex; flex-direction: column; gap: 22px')}>
                <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470")}>
                  {two(sector + 1)} / {two(SECTORS.length)} · {cz.name.toUpperCase()}
                </span>
                <h3
                  style={s(
                    'margin: 0; font-weight: 500; font-size: clamp(34px, 3.8vw, 54px); line-height: 1; letter-spacing: -0.035em'
                  )}
                >
                  {cz.title}
                </h3>
                <p style={s('margin: 0; font-size: 17px; color: #5F6470; max-width: 520px')}>{cz.body}</p>
              </div>
              <div style={s('display: flex; flex-wrap: wrap; align-items: center; gap: 12px')}>
                <span
                  style={s(
                    `display: inline-flex; align-items: center; gap: 8px; padding: 8px 14px; border-radius: 0; background: #FFF0E5; color: ${accentInk}; font-size: 13.5px; font-weight: 500`
                  )}
                >
                  <span aria-hidden="true" style={s(`width: 7px; height: 7px; border-radius: 50%; background: ${accent}`)} />
                  {cz.deploy}
                </span>
                <a href="#contact" style={s('font-size: 14px; font-weight: 500; color: #1F1F1F')}>
                  Discuss a {cz.short} pilot →
                </a>
              </div>
            </div>
            <div style={s('padding: clamp(24px, 3.5vw, 44px); display: flex; flex-direction: column')}>
              {cz.uses.map(([t, d], i) => (
                <div
                  key={t}
                  className="kl-row"
                  style={s('display: flex; align-items: flex-start; gap: 22px; padding: 22px 18px; border-radius: 0')}
                >
                  <span
                    style={s(
                      `font-family: 'Geist Mono', monospace; font-size: 12px; color: ${accentInk}; padding-top: 6px`
                    )}
                  >
                    {two(i + 1)}
                  </span>
                  <span style={s('display: flex; flex-direction: column; gap: 4px')}>
                    <span style={s('font-weight: 500; font-size: 22px; letter-spacing: -0.02em')}>{t}</span>
                    <span style={s('color: #5F6470; font-size: 15px')}>{d}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EDGE / ON-DEVICE */}
      <section
        id="ondevice"
        style={s('max-width: 1280px; margin: 0 auto; padding: clamp(88px, 10vw, 136px) clamp(20px, 4vw, 40px)')}
      >
        <div
          style={s(
            'display: flex; flex-direction: column; align-items: center; text-align: center; gap: 20px; margin-bottom: 56px'
          )}
        >
          <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470; letter-spacing: 0.06em")}>
            [04] KERNEL EDGE
          </span>
          <h2
            style={s(
              'margin: 0; max-width: 980px; font-weight: 500; font-size: clamp(44px, 6vw, 88px); line-height: 0.96; letter-spacing: -0.04em'
            )}
          >
            Frontier intelligence, <em style={s(`font-style: normal; color: ${accent}`)}>sized for the device.</em>
          </h2>
          <p style={s('margin: 0; max-width: 620px; color: #5F6470; font-size: 18px')}>
            We distill your specialized model into small models built with the hardware in the loop. They run offline,
            answer instantly and your data never leaves the device.
          </p>
          <div
            role="group"
            aria-label="Choose a device"
            className="kl-chips"
            style={s(
              'display: flex; flex-wrap: wrap; justify-content: center; gap: 2px; padding: 4px; border-radius: 0; background: #F6EFDF; margin-top: 12px'
            )}
          >
            {DEVICES.map((d, i) => {
              const on = i === device;
              return (
                <button
                  key={d.name}
                  type="button"
                  className="kl-btn"
                  onClick={() => {
                    setDevice(i);
                    setAuto(false);
                  }}
                  aria-pressed={on}
                  style={s(
                    on
                      ? 'position: relative; overflow: hidden; font-family: inherit; font-size: 14.5px; font-weight: 500; padding: 10px 18px; min-height: 42px; border-radius: 0; border: none; background: #FFFFFF; color: #1F1F1F; box-shadow: 0 1px 3px rgba(60,30,5,.14)'
                      : 'font-family: inherit; font-size: 14.5px; font-weight: 400; padding: 10px 18px; min-height: 42px; border-radius: 0; border: none; background: transparent; color: #5F6470'
                  )}
                >
                  {d.name}
                  {on && auto && (
                    <span
                      key={device}
                      className="kl-prog"
                      aria-hidden="true"
                      style={s(`position: absolute; left: 0; bottom: 0; height: 2px; background: ${accent}`)}
                    />
                  )}
                </button>
              );
            })}
            <button
              type="button"
              className="kl-btn"
              onClick={() => setAuto((a) => !a)}
              aria-label={auto ? 'Pause device tour' : 'Play device tour'}
              style={s(
                'font: inherit; width: 42px; min-height: 42px; border: none; border-left: 1px solid #E6DCC4; background: transparent; display: flex; align-items: center; justify-content: center'
              )}
            >
              {auto ? (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#1F1F1F" aria-hidden="true">
                  <rect x="3" y="2.5" width="3.5" height="11" />
                  <rect x="9.5" y="2.5" width="3.5" height="11" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="#1F1F1F" aria-hidden="true">
                  <path d="M4 2.5l9 5.5-9 5.5z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div style={s('display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr)); gap: 16px')}>
          {/* Device stage */}
          <div
            className="kl-dots"
            style={s(
              'border: 1px solid #E6E7EB; border-radius: 0; background-color: #FFFAEB; padding: clamp(32px, 4vw, 56px) 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 22px; min-height: 560px'
            )}
          >
            <div
              style={s(
                'width: 100%; max-width: 300px; border: 1px solid #DFE1E6; border-radius: 0; background: #FFFFFF; padding: 14px; box-shadow: 0 50px 80px -40px rgba(60,30,5,0.35), 0 0 0 6px #FFFFFF, 0 0 0 7px #E3E5EA'
              )}
            >
              <div
                style={s(
                  'border-radius: 0; background: #FFFDF7; border: 1px solid #F0F1F4; padding: 16px; display: flex; flex-direction: column; gap: 12px; min-height: 380px'
                )}
              >
                <div style={s('display: flex; align-items: center; justify-content: space-between; font-size: 12px; color: #5F6470')}>
                  <span style={s('font-weight: 500; color: #1F1F1F')}>{cd.app}</span>
                  <span
                    style={s(
                      `display: inline-flex; align-items: center; gap: 6px; padding: 3px 9px; border-radius: 0; background: #FFF0E5; color: ${accentInk}; font-family: 'Geist Mono', monospace; font-size: 10.5px`
                    )}
                  >
                    <span aria-hidden="true" style={s(`width: 6px; height: 6px; border-radius: 50%; background: ${accent}`)} />
                    ON-DEVICE · OFFLINE
                  </span>
                </div>
                <div style={s('flex: 1')} />
                <div
                  style={s(
                    'align-self: flex-end; max-width: 86%; padding: 10px 14px; border-radius: 0; background: #F6EFDF; font-size: 14px; line-height: 1.45; color: #1F2229'
                  )}
                >
                  {cd.ask}
                </div>
                <div
                  style={s(
                    `align-self: flex-start; max-width: 92%; padding: 10px 14px; border-radius: 0; background: ${accent}; font-size: 14px; line-height: 1.45; color: #FFFFFF`
                  )}
                >
                  {cd.reply}
                </div>
                <div
                  style={s(
                    'display: flex; align-items: center; gap: 8px; padding: 11px 14px; border-radius: 0; border: 1px solid #E3E5EA; font-size: 13px; color: #8A8F9A; background: #FFFFFF'
                  )}
                >
                  <span style={s('flex: 1')}>Ask anything</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#8A8F9A" strokeWidth="1.6" aria-hidden="true">
                    <rect x="5.5" y="1.5" width="5" height="8" rx="2.5" />
                    <path d="M3 7.5a5 5 0 0010 0M8 12.5v2" />
                  </svg>
                </div>
              </div>
            </div>
            <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470")}>
              RUNS ON · {cd.hw}
            </span>
          </div>

          {/* Device detail */}
          <div style={s('display: flex; flex-direction: column; gap: 16px')}>
            <div
              style={s(
                'border: 1px solid #E6E7EB; border-radius: 0; padding: clamp(28px, 4vw, 48px); display: flex; flex-direction: column; gap: 20px; flex: 1'
              )}
            >
              <h3
                style={s(
                  'margin: 0; font-weight: 500; font-size: clamp(30px, 3.2vw, 42px); line-height: 1.04; letter-spacing: -0.03em'
                )}
              >
                {cd.title}
              </h3>
              <p style={s('margin: 0; color: #5F6470; font-size: 17px')}>{cd.body}</p>
              <div style={s('display: flex; flex-direction: column; border-top: 1px solid #ECEDF0')}>
                {cd.uses.map((t) => (
                  <div
                    key={t}
                    style={s(
                      'display: flex; align-items: center; gap: 14px; padding: 15px 0; border-bottom: 1px solid #ECEDF0; color: #1F2229'
                    )}
                  >
                    <span
                      aria-hidden="true"
                      style={s(`width: 7px; height: 7px; background: ${accent}; border-radius: 0; flex-shrink: 0`)}
                    />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div style={s('display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 160px), 1fr)); gap: 12px')}>
              {EDGE_PIPELINE.map(([k, v]) => (
                <div
                  key={k}
                  style={s(
                    'border: 1px solid #E6E7EB; border-radius: 0; padding: 20px; display: flex; flex-direction: column; gap: 22px'
                  )}
                >
                  <span style={s(`font-family: 'Geist Mono', monospace; font-size: 11.5px; color: ${accentInk}`)}>{k}</span>
                  <span style={s('font-size: 14.5px; color: #3B3F4A; line-height: 1.45')}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section id="deploy" style={s('border-top: 1px solid #ECEDF0')}>
        <div
          style={s(
            'max-width: 1280px; margin: 0 auto; padding: clamp(88px, 10vw, 136px) clamp(20px, 4vw, 40px); display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 440px), 1fr)); gap: 56px; align-items: start'
          )}
        >
          <div style={s('display: flex; flex-direction: column; gap: 20px')}>
            <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470; letter-spacing: 0.06em")}>
              [05] DEPLOYMENT
            </span>
            <h2
              style={s(
                'margin: 0; font-weight: 500; font-size: clamp(40px, 5vw, 68px); line-height: 1; letter-spacing: -0.035em'
              )}
            >
              Runs where your <em style={s(`font-style: normal; color: ${accent}`)}>data lives.</em>
            </h2>
            <p style={s('margin: 0; color: #5F6470; font-size: 17px; max-width: 460px')}>
              Choose the environment. We optimize and serve the model for that hardware, then hand over the weights and
              the pipelines that made them.
            </p>
            <div
              role="radiogroup"
              aria-label="Deployment environment"
              style={s('display: flex; flex-direction: column; gap: 8px; margin-top: 12px')}
            >
              {MODES.map((m, i) => {
                const on = i === mode;
                return (
                  <button
                    key={m.name}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    className={on ? 'kl-btn' : 'kl-btn kl-ghost'}
                    onClick={() => setMode(i)}
                    style={s(
                      on
                        ? `font: inherit; text-align: left; display: flex; align-items: center; gap: 16px; padding: 18px 20px; border-radius: 0; border: 1px solid ${accent}; background: #FFFFFF; color: #1F1F1F; box-shadow: 0 0 0 3px #FFF0E5`
                        : 'font: inherit; text-align: left; display: flex; align-items: center; gap: 16px; padding: 18px 20px; border-radius: 0; border: 1px solid #E6E7EB; background: #FFFFFF; color: #3B3F4A'
                    )}
                  >
                    {on ? (
                      <span
                        aria-hidden="true"
                        style={s(
                          `width: 18px; height: 18px; border-radius: 50%; border: 2px solid ${accent}; display: flex; align-items: center; justify-content: center`
                        )}
                      >
                        <span style={s(`width: 8px; height: 8px; border-radius: 50%; background: ${accent}`)} />
                      </span>
                    ) : (
                      <span
                        aria-hidden="true"
                        style={s('width: 18px; height: 18px; border-radius: 50%; border: 2px solid #C3C6CE')}
                      />
                    )}
                    <span style={s(`font-weight: ${on ? 500 : 400}; font-size: 17px; flex: 1`)}>{m.name}</span>
                    <span
                      style={s(
                        `font-family: 'Geist Mono', monospace; font-size: 12px; color: ${on ? '#5F6470' : '#6B707B'}`
                      )}
                    >
                      {m.hint}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
          <div
            style={s(
              'border: 1px solid #E6E7EB; border-radius: 0; background: #FFFFFF; padding: clamp(28px, 4vw, 44px); display: flex; flex-direction: column; gap: 26px; box-shadow: 0 30px 60px -40px rgba(60,30,5,.2)'
            )}
          >
            <div
              style={s(
                "display: flex; justify-content: space-between; align-items: center; gap: 12px; font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470"
              )}
            >
              <span>TOPOLOGY</span>
              <span style={s(`color: ${accentInk}`)}>{cm.code}</span>
            </div>
            <div
              className="kl-dots"
              style={s(
                `border: 1.5px dashed ${cm.ring}; border-radius: 0; padding: 24px; display: flex; flex-direction: column; gap: 16px; background-color: #FFFDF7`
              )}
            >
              <span
                style={s("font-family: 'Geist Mono', monospace; font-size: 11.5px; color: #5F6470; letter-spacing: 0.06em")}
              >
                {cm.boundary}
              </span>
              <div style={s('display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px')}>
                <div
                  style={s(
                    'border: 1px solid #E6E7EB; border-radius: 0; padding: 16px; display: flex; flex-direction: column; gap: 6px; background: #FFFFFF'
                  )}
                >
                  <span style={s("font-family: 'Geist Mono', monospace; font-size: 11px; color: #6B707B")}>DATA</span>
                  <span style={s('font-weight: 500')}>Your sources</span>
                </div>
                <div
                  style={s(
                    `border: 1px solid ${accent}; border-radius: 0; padding: 16px; display: flex; flex-direction: column; gap: 6px; background: #FFF0E5`
                  )}
                >
                  <span style={s(`font-family: 'Geist Mono', monospace; font-size: 11px; color: ${accentInk}`)}>MODEL</span>
                  <span style={s('font-weight: 500')}>Your weights</span>
                </div>
                <div
                  style={s(
                    'border: 1px solid #E6E7EB; border-radius: 0; padding: 16px; display: flex; flex-direction: column; gap: 6px; background: #FFFFFF'
                  )}
                >
                  <span style={s("font-family: 'Geist Mono', monospace; font-size: 11px; color: #6B707B")}>APPS</span>
                  <span style={s('font-weight: 500')}>Your users</span>
                </div>
              </div>
              <div
                style={s(
                  "display: flex; align-items: center; gap: 10px; font-family: 'Geist Mono', monospace; font-size: 11.5px; color: #5F6470"
                )}
              >
                <span aria-hidden="true" style={s('flex: 1; height: 1px; background: #DFE1E6')} />
                <span>{cm.egress}</span>
                <span aria-hidden="true" style={s('flex: 1; height: 1px; background: #DFE1E6')} />
              </div>
            </div>
            <p style={s('margin: 0; font-size: 17px; color: #3B3F4A')}>{cm.body}</p>
            <div style={s('display: flex; flex-wrap: wrap; gap: 8px')}>
              {cm.tags.map((t) => (
                <span
                  key={t}
                  style={s(
                    'font-size: 13px; padding: 6px 12px; border-radius: 0; background: #FFFAEB; border: 1px solid #ECEDF0; color: #3B3F4A'
                  )}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" style={s('background: #FFFAEB; border-top: 1px solid #ECEDF0')}>
        <div style={s('max-width: 1280px; margin: 0 auto; padding: clamp(88px, 10vw, 136px) clamp(20px, 4vw, 40px)')}>
          <div style={s('display: flex; flex-direction: column; gap: 18px; max-width: 760px; margin-bottom: 48px')}>
            <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #5F6470; letter-spacing: 0.06em")}>
              [06] HOW WE WORK
            </span>
            <h2
              style={s(
                'margin: 0; font-weight: 500; font-size: clamp(40px, 5vw, 68px); line-height: 1; letter-spacing: -0.035em'
              )}
            >
              Start with one problem. <em style={s(`font-style: normal; color: ${accent}`)}>End with a capability.</em>
            </h2>
          </div>
          <div style={s('display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 12px')}>
            {APPROACH.map((a) => (
              <div
                key={a.step}
                style={s(
                  'border: 1px solid #E6E7EB; border-radius: 0; padding: 32px; display: flex; flex-direction: column; gap: 64px; background: #FFFFFF'
                )}
              >
                <span style={s(`font-family: 'Geist Mono', monospace; font-size: 12px; color: ${accentInk}`)}>{a.step}</span>
                <div style={s('display: flex; flex-direction: column; gap: 10px')}>
                  <h3 style={s('margin: 0; font-weight: 500; font-size: 30px; letter-spacing: -0.03em')}>{a.title}</h3>
                  <p style={s('margin: 0; color: #5F6470')}>{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={s('max-width: 1280px; margin: 0 auto; padding: clamp(88px, 10vw, 136px) clamp(20px, 4vw, 40px)')}
      >
        <div
          style={s(
            `background: ${accent}; color: #1F1F1F; border-radius: 0; padding: clamp(32px, 5.5vw, 80px); display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 420px), 1fr)); gap: 56px; align-items: start; position: relative; overflow: hidden`
          )}
        >
          <div style={s('display: flex; flex-direction: column; gap: 24px')}>
            <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px; color: #1F1F1F; letter-spacing: 0.06em")}>
              [07] GET STARTED
            </span>
            <h2
              style={s(
                'margin: 0; font-weight: 500; font-size: clamp(46px, 6vw, 88px); line-height: 0.94; letter-spacing: -0.04em'
              )}
            >
              Build the model only <em style={s('font-style: normal; color: #FFFFFF')}>you</em> can build.
            </h2>
            <p style={s('margin: 0; color: #1F1F1F; font-size: 18px; max-width: 460px')}>
              Tell us the problem and the data behind it. A research engineer, not a sales rep, will reply.
            </p>
            <div
              style={s(
                "display: flex; flex-direction: column; gap: 6px; font-family: 'Geist Mono', monospace; font-size: 13.5px; color: #1F1F1F; margin-top: 8px"
              )}
            >
              <span>{EMAIL}</span>
              <span>{LOCATION}</span>
            </div>
          </div>
          <div
            style={s(
              'background: #FFFFFF; color: #1F1F1F; border-radius: 0; padding: clamp(24px, 3.5vw, 36px); box-shadow: 0 40px 80px -40px rgba(60,30,5,.45)'
            )}
          >
            {sent ? (
              <div style={s('display: flex; flex-direction: column; gap: 16px; padding: 40px 0; align-items: flex-start')}>
                <span
                  style={s(
                    `width: 48px; height: 48px; border-radius: 50%; background: ${accent}; display: flex; align-items: center; justify-content: center`
                  )}
                >
                  <Check size={22} stroke="#FFFFFF" />
                </span>
                <h3 style={s('margin: 0; font-weight: 500; font-size: 32px; letter-spacing: -0.03em')}>Message received.</h3>
                <p style={s('margin: 0; color: #5F6470')}>
                  Thanks. A member of our research team will reply shortly.
                </p>
                <button
                  type="button"
                  className="kl-btn kl-ghost"
                  onClick={() => setSent(false)}
                  style={s(
                    'font: inherit; padding: 12px 20px; min-height: 44px; border-radius: 0; border: 1px solid #DFE1E6; background: #FFFFFF; color: #1F1F1F'
                  )}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form
                style={s('display: flex; flex-direction: column; gap: 16px')}
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div style={s('display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr)); gap: 16px')}>
                  <label
                    style={s('display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; font-weight: 500; color: #3B3F4A')}
                  >
                    Name
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Ada Okafor"
                      style={s(
                        'font: inherit; font-weight: 400; font-size: 16px; padding: 13px 15px; border-radius: 0; border: 1px solid #DFE1E6; background: #FFFDF7; color: #1F1F1F'
                      )}
                    />
                  </label>
                  <label
                    style={s('display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; font-weight: 500; color: #3B3F4A')}
                  >
                    Work email
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      style={s(
                        'font: inherit; font-weight: 400; font-size: 16px; padding: 13px 15px; border-radius: 0; border: 1px solid #DFE1E6; background: #FFFDF7; color: #1F1F1F'
                      )}
                    />
                  </label>
                </div>
                <label
                  style={s('display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; font-weight: 500; color: #3B3F4A')}
                >
                  Sector
                  <select
                    name="sector"
                    style={s(
                      'font: inherit; font-weight: 400; font-size: 16px; padding: 13px 15px; border-radius: 0; border: 1px solid #DFE1E6; background: #FFFDF7; color: #1F1F1F'
                    )}
                  >
                    {SECTOR_OPTIONS.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </label>
                <label
                  style={s('display: flex; flex-direction: column; gap: 8px; font-size: 13.5px; font-weight: 500; color: #3B3F4A')}
                >
                  What are you trying to solve?
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="The problem, the data you have, and where it has to run."
                    style={s(
                      'font: inherit; font-weight: 400; font-size: 16px; padding: 13px 15px; border-radius: 0; border: 1px solid #DFE1E6; background: #FFFDF7; color: #1F1F1F; resize: vertical'
                    )}
                  />
                </label>
                <button
                  type="submit"
                  className="kl-btn"
                  style={s(
                    'font: inherit; font-size: 16px; font-weight: 500; padding: 15px 24px; min-height: 52px; border-radius: 0; border: none; background: #1F1F1F; color: #FFFFFF; display: flex; align-items: center; justify-content: center; gap: 10px'
                  )}
                >
                  Send message
                  <Arrow />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={s('border-top: 1px solid #ECEDF0; overflow: hidden')}>
        <div
          style={s(
            'max-width: 1280px; margin: 0 auto; padding: 64px clamp(20px, 4vw, 40px) 0; display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr)); gap: 40px; font-size: 14px'
          )}
        >
          <div style={s('display: flex; flex-direction: column; gap: 14px; min-width: 0')}>
            <div style={s('display: flex; align-items: center; gap: 10px')}>
              <Logo size={24} />
              <span style={s('font-weight: 600; font-size: 18px; letter-spacing: -0.02em')}>Kernel Labs</span>
            </div>
            <p style={s('margin: 0; color: #5F6470; max-width: 320px')}>
              Specialized models on proprietary data, deployed anywhere and owned by you.
            </p>
          </div>
          {FOOTER.map((nav) => (
            <nav key={nav.label} aria-label={nav.label} style={s('display: flex; flex-direction: column; gap: 10px')}>
              <span
                style={s("font-family: 'Geist Mono', monospace; font-size: 11.5px; color: #5F6470; letter-spacing: 0.06em")}
              >
                {nav.heading}
              </span>
              {nav.links.map(([href, text]) => (
                <a key={text} href={href}>
                  {text}
                </a>
              ))}
            </nav>
          ))}
        </div>
        <div
          style={s(
            'max-width: 1280px; margin: 0 auto; padding: 48px clamp(20px, 4vw, 40px) 0; display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: 13px; color: #5F6470'
          )}
        >
          <span>© 2026 Kernel Labs. All rights reserved.</span>
          <span style={s("font-family: 'Geist Mono', monospace; font-size: 12px")}>OWN YOUR INTELLIGENCE</span>
        </div>
        <div
          aria-hidden="true"
          style={s(
            'max-width: 1280px; margin: 0 auto; padding: 8px clamp(12px, 2vw, 24px) 0; font-weight: 600; font-size: clamp(72px, 15.5vw, 228px); line-height: 0.8; letter-spacing: -0.05em; color: #F6EFDF; white-space: nowrap; text-align: center; transform: translateY(14%)'
          )}
        >
          Kernel Labs
        </div>
      </footer>
    </div>
  );
}
