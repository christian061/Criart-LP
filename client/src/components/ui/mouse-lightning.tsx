import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LightningTrail {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export function MouseLightning() {
  const [trails, setTrails] = useState<LightningTrail[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let lastUpdate = 0;
    const throttleDelay = 50; // Atualizar a cada 50ms

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      
      if (now - lastUpdate > throttleDelay) {
        setMousePos({ x: e.clientX, y: e.clientY });
        
        setTrails((prev) => {
          const newTrail: LightningTrail = {
            id: now,
            x: e.clientX,
            y: e.clientY,
            timestamp: now,
          };
          
          // Manter apenas os últimos 5 pontos
          const filtered = prev.filter((t) => now - t.timestamp < 500);
          return [...filtered, newTrail].slice(-5);
        });
        
        lastUpdate = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Limpar trails antigos
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      setTrails((prev) => prev.filter((t) => now - t.timestamp < 500));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <filter id="mouseLightningGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 191, 255, 0)" />
            <stop offset="50%" stopColor="rgba(0, 191, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(0, 191, 255, 0)" />
          </linearGradient>
        </defs>

        {/* Desenhar linhas entre os pontos do trail */}
        {trails.length > 1 && trails.map((trail, index) => {
          if (index === 0) return null;
          
          const prevTrail = trails[index - 1];
          const age = Date.now() - trail.timestamp;
          const opacity = Math.max(0, 1 - age / 500);
          
          // Criar linha com pequenos desvios para parecer raio
          const midX = (prevTrail.x + trail.x) / 2 + (Math.random() - 0.5) * 10;
          const midY = (prevTrail.y + trail.y) / 2 + (Math.random() - 0.5) * 10;
          
          return (
            <motion.path
              key={trail.id}
              d={`M ${prevTrail.x} ${prevTrail.y} Q ${midX} ${midY} ${trail.x} ${trail.y}`}
              stroke="url(#trailGradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#mouseLightningGlow)"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(0, 191, 255, 0.8))',
              }}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: opacity * 0.4 }}
              transition={{ duration: 0.2 }}
            />
          );
        })}

        {/* Ponto brilhante no cursor */}
        {trails.length > 0 && (
          <>
            <motion.circle
              cx={mousePos.x}
              cy={mousePos.y}
              r="4"
              fill="rgba(0, 191, 255, 0.8)"
              filter="url(#mouseLightningGlow)"
              style={{
                filter: 'drop-shadow(0 0 6px rgba(0, 191, 255, 1))',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
            {/* Anel externo pulsante */}
            <motion.circle
              cx={mousePos.x}
              cy={mousePos.y}
              r="4"
              fill="none"
              stroke="rgba(0, 191, 255, 0.6)"
              strokeWidth="1"
              animate={{
                r: [4, 8, 4],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            />
          </>
        )}

        {/* Pequenas partículas ao redor do cursor */}
        {trails.slice(-1).map((trail) => (
          [0, 1, 2].map((i) => {
            const angle = (i * 120) * (Math.PI / 180);
            const distance = 15;
            
            return (
              <motion.circle
                key={`particle-${trail.id}-${i}`}
                cx={trail.x}
                cy={trail.y}
                r="1.5"
                fill="rgba(0, 191, 255, 0.8)"
                style={{
                  filter: 'drop-shadow(0 0 3px rgba(0, 191, 255, 1))',
                }}
                initial={{
                  x: 0,
                  y: 0,
                  opacity: 0.8,
                }}
                animate={{
                  x: Math.cos(angle) * distance,
                  y: Math.sin(angle) * distance,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              />
            );
          })
        ))}
      </svg>
    </div>
  );
}
