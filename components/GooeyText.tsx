'use client';

import type { GooeyTextProps } from '@/types';
import { useEffect, useRef } from 'react';

export default function GooeyText({
  texts,
  morphTime = 1.2,
  cooldownTime = 1.6,
  className = '',
  style,
}: GooeyTextProps) {
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const t1 = text1Ref.current;
    const t2 = text2Ref.current;
    if (!t1 || !t2) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      t1.textContent = texts[0];
      t1.style.opacity = '1';
      t1.style.filter = '';
      t2.style.opacity = '0';
      return;
    }

    let textIndex = 0;
    let morph = 0;
    let cooldown = cooldownTime;
    let lastTime: number | null = null;

    const setMorphFraction = (fraction: number) => {
      t1.textContent = texts[textIndex % texts.length];
      t2.textContent = texts[(textIndex + 1) % texts.length];

      const blur2 = Math.min(8 / (fraction + 0.001) - 8, 100);
      t2.style.filter = `blur(${blur2}px)`;
      t2.style.opacity = String(Math.pow(fraction, 0.4));

      const inv = 1 - fraction;
      const blur1 = Math.min(8 / (inv + 0.001) - 8, 100);
      t1.style.filter = `blur(${blur1}px)`;
      t1.style.opacity = String(Math.pow(inv, 0.4));
    };

    const setClean = () => {
      t1.textContent = texts[textIndex % texts.length];
      t2.textContent = texts[(textIndex + 1) % texts.length];
      t1.style.opacity = '1';
      t1.style.filter = '';
      t2.style.opacity = '0';
      t2.style.filter = '';
    };

    const animate = (time: number) => {
      rafRef.current = requestAnimationFrame(animate);
      if (lastTime === null) {
        lastTime = time;
        return;
      }
      const dt = (time - lastTime) / 1000;
      lastTime = time;
      cooldown -= dt;

      if (cooldown > 0) {
        setClean();
      } else {
        morph += dt;
        if (morph >= morphTime) {
          textIndex++;
          morph = 0;
          cooldown = cooldownTime;
          setClean();
        } else {
          setMorphFraction(morph / morphTime);
        }
      }
    };

    t1.textContent = texts[0];
    t1.style.opacity = '1';
    t2.textContent = texts[1] ?? texts[0];
    t2.style.opacity = '0';

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [texts, morphTime, cooldownTime]);

  const longest = texts.reduce((a, b) => (a.length >= b.length ? a : b), '');

  return (
    <>
      <svg aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <filter id="pcs-threshold">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 255 -140"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <span
        className={className}
        style={{ position: 'relative', display: 'inline-block', filter: 'url(#pcs-threshold)', ...style }}
      >
        <span ref={text1Ref} aria-live="polite" style={{ position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap' }} />
        <span ref={text2Ref} aria-hidden="true" style={{ position: 'absolute', left: 0, top: 0, whiteSpace: 'nowrap' }} />
        <span aria-hidden="true" style={{ visibility: 'hidden', whiteSpace: 'nowrap' }}>{longest}</span>
      </span>
    </>
  );
}
