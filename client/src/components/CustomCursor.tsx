import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const newTrailPoint = { x: e.clientX, y: e.clientY, id: trailId++ };
      setTrail(prev => [...prev, newTrailPoint].slice(-8));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 rounded-full bg-primary/30 blur-sm"
          style={{
            left: point.x - 6,
            top: point.y - 6,
            width: 12 - index,
            height: 12 - index,
            opacity: (index + 1) / trail.length * 0.5,
          }}
        />
      ))}
      <div
        className="fixed pointer-events-none z-50 w-4 h-4 rounded-full border-2 border-primary/70 mix-blend-difference"
        style={{
          left: position.x - 8,
          top: position.y - 8,
        }}
      />
    </>
  );
}
