import { motion } from 'framer-motion';

// Componente de raio realista
const LightningBolt = ({ delay, startX, startY }: { delay: number; startX: number; startY: number }) => {
  // Criar caminho de raio com segmentos irregulares
  const segments = 8;
  let path = `M ${startX} ${startY}`;
  let currentX = startX;
  let currentY = startY;
  
  for (let i = 0; i < segments; i++) {
    currentX += (Math.random() - 0.5) * 80 + 30;
    currentY += 60 + Math.random() * 40;
    path += ` L ${currentX} ${currentY}`;
  }

  return (
    <motion.svg
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.6 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.8, 0.4, 0] }}
      transition={{
        duration: 0.4,
        delay,
        repeat: Infinity,
        repeatDelay: 6,
      }}
    >
      <motion.path
        d={path}
        stroke="rgba(147, 51, 234, 0.8)"
        strokeWidth="2"
        fill="none"
        filter="url(#glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1] }}
        transition={{
          duration: 0.3,
          delay,
          repeat: Infinity,
          repeatDelay: 6,
        }}
      />
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </motion.svg>
  );
};

export function EnergyGrid() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {/* Grid de fundo sutil */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3,
        }}
      />

      {/* Raios realistas */}
      {[0, 1, 2].map((i) => (
        <LightningBolt
          key={`lightning-${i}`}
          delay={i * 2.5}
          startX={20 + i * 35}
          startY={-20}
        />
      ))}

      {/* Pulsos sutis de energia */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full bg-primary"
          style={{
            left: `${20 + i * 25}%`,
            top: `${30 + (i % 2) * 30}%`,
            filter: 'blur(2px)',
            boxShadow: '0 0 8px rgba(147, 51, 234, 0.6)',
          }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 2,
            delay: i * 0.5,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />
      ))}
    </div>
  );
}
