'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const BG = '#06080c';
const ACCENT = '#3b82f6';

type Screen = { src: string; img?: HTMLImageElement };

const SCREENS: Screen[] = [{ src: '/screens/02-awizacja.png' }, { src: '/screens/01-planer.png' }];

const LABELS = [
  {
    tag: '01 · Awizacja',
    title: 'Wyprowadzenie towaru\nw kilka kliknięć.',
    sub: 'Status celny, relacja, dokument i środek transportu — wszystko w jednym formularzu, bez przełączania kontekstu.',
  },
  {
    tag: '02 · Planer dyspozytorski',
    title: 'Cały port w jednym\nkalendarzu.',
    sub: 'Rejony, statki, sloty czasowe — widok tygodnia i miesiąca z gotowymi statusami i konfliktami.',
  },
];

function preloadImages(screens: Screen[]): Promise<void> {
  return Promise.all(
    screens.map(
      s =>
        new Promise<void>(resolve => {
          const img = new window.Image();
          img.crossOrigin = 'anonymous';
          img.onload = () => {
            s.img = img;
            resolve();
          };
          img.onerror = () => resolve();
          img.src = s.src;
        })
    )
  ).then(() => undefined);
}

function createLaptop(canvas: HTMLCanvasElement, screens: Screen[]) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 1.0, 7.0);
  camera.lookAt(0, 0.4, 0);

  scene.add(new THREE.AmbientLight(0xffffff, 1.2));
  const key = new THREE.DirectionalLight(0xffffff, 2.2);
  key.position.set(3, 5, 4);
  scene.add(key);
  const fill = new THREE.DirectionalLight(0x93c5fd, 1.0);
  fill.position.set(-4, 2, 3);
  scene.add(fill);
  const rim = new THREE.DirectionalLight(0xffffff, 0.8);
  rim.position.set(0, 3, -5);
  scene.add(rim);
  const under = new THREE.DirectionalLight(0xbfdbfe, 0.5);
  under.position.set(0, -3, 3);
  scene.add(under);

  const W = 4.2,
    D = 2.8,
    baseT = 0.13,
    lidT = 0.08;
  const screenInsetX = 0.18,
    screenInsetY = 0.22;
  const aluColor = 0x4a5568;
  const bezelColor = 0x111827;

  const laptop = new THREE.Group();
  laptop.position.y = -0.4;
  laptop.rotation.x = -0.18;
  scene.add(laptop);

  const aluMat = new THREE.MeshStandardMaterial({
    color: aluColor,
    roughness: 0.38,
    metalness: 0.8,
  });
  const base = new THREE.Mesh(new THREE.BoxGeometry(W, baseT, D), aluMat);
  base.position.y = -baseT / 2;
  laptop.add(base);

  const kb = new THREE.Mesh(
    new THREE.BoxGeometry(W * 0.86, 0.01, D * 0.78),
    new THREE.MeshStandardMaterial({ color: 0x0a0f1a, roughness: 0.85 })
  );
  kb.position.set(0, 0.005, -D * 0.04);
  laptop.add(kb);

  const tp = new THREE.Mesh(
    new THREE.BoxGeometry(W * 0.32, 0.012, D * 0.22),
    new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.5, metalness: 0.2 })
  );
  tp.position.set(0, 0.011, D * 0.28);
  laptop.add(tp);

  const keyMat = new THREE.MeshStandardMaterial({ color: 0x0d1525, roughness: 0.7 });
  const cols = 14,
    kbRows = 5;
  const kbW = W * 0.78,
    kbD = D * 0.42;
  const cellW = kbW / cols,
    cellD = kbD / kbRows;
  for (let r = 0; r < kbRows; r++) {
    for (let c = 0; c < cols; c++) {
      const k = new THREE.Mesh(new THREE.BoxGeometry(cellW * 0.78, 0.012, cellD * 0.72), keyMat);
      k.position.set(-kbW / 2 + cellW * (c + 0.5), 0.013, -kbD / 2 + cellD * (r + 0.5) - D * 0.08);
      laptop.add(k);
    }
  }

  const hinge = new THREE.Group();
  hinge.position.set(0, baseT / 2, -D / 2 + lidT / 2);
  laptop.add(hinge);

  const lidGroup = new THREE.Group();
  hinge.add(lidGroup);

  const lidH = D;
  const lid = new THREE.Mesh(
    new THREE.BoxGeometry(W, lidH, lidT),
    new THREE.MeshStandardMaterial({ color: aluColor, roughness: 0.36, metalness: 0.82 })
  );
  lid.position.set(0, lidH / 2, 0);
  lidGroup.add(lid);

  const bezel = new THREE.Mesh(
    new THREE.PlaneGeometry(W * 0.96, lidH * 0.92),
    new THREE.MeshStandardMaterial({ color: bezelColor, roughness: 0.6 })
  );
  bezel.position.set(0, lidH / 2, lidT / 2 + 0.001);
  lidGroup.add(bezel);

  const screenW = W * 0.96 - screenInsetX * 2;
  const screenH = lidH * 0.92 - screenInsetY * 2;

  const tCanvas = document.createElement('canvas');
  tCanvas.width = 1600;
  tCanvas.height = Math.round(1600 * (screenH / screenW));
  const tctx = tCanvas.getContext('2d')!;
  const tex = new THREE.CanvasTexture(tCanvas);
  tex.anisotropy = 8;
  tex.colorSpace = THREE.SRGBColorSpace;

  const screenMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(screenW, screenH),
    new THREE.MeshBasicMaterial({ map: tex })
  );
  screenMesh.position.set(0, lidH / 2, lidT / 2 + 0.005);
  lidGroup.add(screenMesh);

  const camDot = new THREE.Mesh(
    new THREE.CircleGeometry(0.018, 16),
    new THREE.MeshStandardMaterial({ color: 0x000000, roughness: 0.4 })
  );
  camDot.position.set(0, lidH * 0.96, lidT / 2 + 0.006);
  lidGroup.add(camDot);

  hinge.rotation.x = Math.PI / 2;

  let currentIdx = 0;

  function drawScreen(i: number) {
    const s = screens[i];
    if (!s) return;
    const w = tCanvas.width,
      h = tCanvas.height;
    tctx.clearRect(0, 0, w, h);
    if (s.img?.complete && s.img.naturalWidth > 0) {
      tctx.fillStyle = '#ffffff';
      tctx.fillRect(0, 0, w, h);
      const ir = s.img.width / s.img.height;
      const cr = w / h;
      let dw, dh;
      if (ir > cr) {
        dw = w;
        dh = w / ir;
      } else {
        dh = h;
        dw = h * ir;
      }
      tctx.drawImage(s.img, (w - dw) / 2, (h - dh) / 2, dw, dh);
    } else {
      tctx.fillStyle = BG;
      tctx.fillRect(0, 0, w, h);
    }
    tex.needsUpdate = true;
  }

  drawScreen(0);

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
  const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x));
  const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

  let onScreenChange: ((idx: number) => void) | null = null;

  function setProgress(p: number) {
    p = clamp(p, 0, 1);

    const openP = clamp((p - 0.04) / 0.18, 0, 1);
    hinge.rotation.x = lerp(Math.PI / 2 - 0.05, -0.26, easeInOut(openP));

    laptop.rotation.y = Math.sin(p * Math.PI * 2) * 0.08;
    laptop.rotation.x = -0.18 + Math.sin(p * Math.PI) * 0.02;

    const camZ = lerp(7.0, 5.4, easeInOut(clamp(p / 0.25, 0, 1)));
    camera.position.z = camZ + Math.sin(p * Math.PI * 3) * 0.06;
    camera.position.y = 1.0 + Math.sin(p * Math.PI * 2) * 0.04;
    camera.lookAt(0, 0.4, 0);

    const afterOpen = clamp((p - 0.18) / 0.78, 0, 1);
    const idx = clamp(Math.floor(afterOpen * screens.length), 0, screens.length - 1);
    if (idx !== currentIdx) {
      currentIdx = idx;
      drawScreen(idx);
      onScreenChange?.(idx);
    }
  }

  function redraw() {
    drawScreen(currentIdx);
  }

  function resize() {
    const w = canvas.clientWidth,
      h = canvas.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  let rafId: number;
  (function tick() {
    renderer.render(scene, camera);
    rafId = requestAnimationFrame(tick);
  })();

  function destroy() {
    cancelAnimationFrame(rafId);
    window.removeEventListener('resize', resize);
    renderer.dispose();
  }

  return {
    setProgress,
    redraw,
    destroy,
    setOnScreenChange: (cb: (i: number) => void) => {
      onScreenChange = cb;
    },
  };
}

export default function LaptopScroll() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const laptopRef = useRef<ReturnType<typeof createLaptop> | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let instance: ReturnType<typeof createLaptop>;
    let destroyed = false;

    preloadImages(SCREENS).then(() => {
      if (destroyed) return;
      instance = createLaptop(canvas, SCREENS);
      instance.redraw();
      instance.setOnScreenChange(setActiveIdx);
      laptopRef.current = instance;

      const runway = runwayRef.current;
      if (!runway) return;

      function onScroll() {
        if (!runway) return;
        const rect = runway.getBoundingClientRect();
        const total = runway.offsetHeight - window.innerHeight;
        const p = Math.max(0, Math.min(1, -rect.top / total));
        instance.setProgress(p);
      }

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      (instance as any)._onScroll = onScroll;
    });

    return () => {
      destroyed = true;
      if (instance) {
        const onScroll = (instance as any)._onScroll;
        if (onScroll) window.removeEventListener('scroll', onScroll);
        instance.destroy();
      }
    };
  }, []);

  const label = LABELS[activeIdx];

  return (
    <section style={{ background: '#0d1117', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      {/* scroll runway */}
      <div ref={runwayRef} style={{ height: '500vh', position: 'relative' }}>
        <div
          style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden' }}
        >
          {/* radial glow behind laptop */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse 70% 55% at 62% 50%, rgba(59,130,246,0.13) 0%, rgba(30,41,59,0.18) 50%, transparent 100%)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* full-bleed canvas */}
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              display: 'block',
              zIndex: 1,
            }}
          />

          {/* left text overlay */}
          <div
            className="absolute left-0 top-0 h-full flex flex-col justify-center px-6 md:px-14 pointer-events-none"
            style={{ maxWidth: 420, zIndex: 20 }}
          >
            {/* mobile backdrop */}
            <div
              className="md:hidden absolute inset-0 -mx-6"
              style={{
                background: 'linear-gradient(90deg, rgba(6,8,12,0.47) 55%, rgba(6,8,12,0.0) 100%)',
                backdropFilter: 'blur(1x)',
                WebkitBackdropFilter: 'blur(1px)',
                zIndex: -1,
              }}
            />
            <div
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: '9.5px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                marginBottom: 14,
                opacity: 0.9,
              }}
            >
              — {label.tag}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-michroma, serif)',
                fontSize: 'clamp(22px, 3.2vw, 46px)',
                fontWeight: 400,
                color: '#fff',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                lineHeight: 1.08,
                margin: '0 0 20px',
                whiteSpace: 'pre-line',
                textShadow: '0 2px 24px rgba(0,0,0,0.8)',
              }}
            >
              {label.title}
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-sans, sans-serif)',
                fontSize: 14,
                lineHeight: 1.6,
                color: 'rgba(255,255,255,0.55)',
                margin: 0,
              }}
            >
              {label.sub}
            </p>

            {/* step dots */}
            <div className="flex items-center gap-3 mt-8">
              {LABELS.map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: i === activeIdx ? 20 : 4,
                    height: 4,
                    background: i === activeIdx ? ACCENT : 'rgba(255,255,255,0.2)',
                    transition: 'all 0.4s ease',
                    display: 'inline-block',
                  }}
                />
              ))}
            </div>
          </div>

          {/* scroll hint */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: '9px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.22)',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          >
            <span>↓</span>
            <span>Przewiń aby odkryć</span>
          </div>
        </div>
      </div>
    </section>
  );
}
