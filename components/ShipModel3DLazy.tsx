'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const ShipModel3DImpl = dynamic(() => import('./ShipModel3D'), { ssr: false });

export default function ShipModel3DLazy({ direction = 1 }: { direction?: 1 | -1 }) {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '300px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{loaded && <ShipModel3DImpl direction={direction} />}</div>;
}
