import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface EnergyBorderProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function EnergyBorder({ children, className = '', delay = 0 }: EnergyBorderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Borda com efeito de energia */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(79, 70, 229, 0.8), transparent)',
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% 0%', '-200% 0%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'linear',
          delay: delay,
        }}
      />
      
      {/* Brilho nos cantos */}
      <motion.div
        className="absolute top-0 left-0 w-2 h-2 rounded-full bg-primary"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay,
        }}
      />
      
      <motion.div
        className="absolute top-0 right-0 w-2 h-2 rounded-full bg-chart-2"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 0.5,
        }}
      />
      
      <motion.div
        className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-chart-2"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 1,
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-primary"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.5, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: delay + 1.5,
        }}
      />
      
      {/* Partículas de energia */}
      <motion.div
        className="absolute inset-0 rounded-lg overflow-hidden pointer-events-none"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: '0%',
              top: `${25 * (i + 1)}%`,
            }}
            animate={{
              left: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: delay + i * 0.7,
            }}
          />
        ))}
      </motion.div>
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
