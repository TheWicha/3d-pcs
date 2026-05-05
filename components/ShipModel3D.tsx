'use client';

import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll } from 'framer-motion';
import { Suspense, useEffect, useRef } from 'react';
import type { Group } from 'three';
import { useTheme } from './ThemeProvider';

function Ship({
  scrollProgress,
  direction,
}: {
  scrollProgress: React.RefObject<number>;
  direction: 1 | -1;
}) {
  const { scene } = useGLTF('/3d/PCS_ship.glb');
  const cloned = scene.clone(true);
  const ref = useRef<Group>(null);
  const { viewport } = useThree();

  useFrame(() => {
    if (!ref.current) return;
    const p = scrollProgress.current ?? 0;
    const half = viewport.width / 2;
    const start = direction === 1 ? -(half + 1.5) : half + 1.5;
    ref.current.position.x = start + direction * p * (viewport.width + 3);
  });

  return (
    <group ref={ref} rotation={[0, direction === -1 ? Math.PI : 0, 0]}>
      <primitive object={cloned} scale={0.032} />
    </group>
  );
}

useGLTF.setDecoderPath('/draco/');
useGLTF.preload('/3d/PCS_ship.glb');

export default function ShipModel3D({ direction = 1 }: { direction?: 1 | -1 }) {
  const scrollProgress = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const { theme } = useTheme();

  useEffect(() => {
    return scrollYProgress.on('change', v => {
      scrollProgress.current = v;
    });
  }, [scrollYProgress]);
  const lightIntensity = theme == 'light' ? 3 : 4;
  return (
    <div
      ref={containerRef}
      className="absolute left-0 top-1 -translate-y-1/2 w-screen h-65 pointer-events-none z-10"
      aria-hidden="true"
    >
      <Canvas camera={{ position: [0, 1, 7], fov: 18 }}>
        <ambientLight intensity={lightIntensity} />
        <Suspense fallback={null}>
          <Ship scrollProgress={scrollProgress} direction={direction} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  );
}

