import { motion } from 'framer-motion';

interface CriartLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  animated?: boolean;
}

export function CriartLogo({ size = 'md', animated = true }: CriartLogoProps) {
  const sizes = {
    sm: { container: 'w-32 h-12', text: 'text-2xl', icon: 'w-8 h-8' },
    md: { container: 'w-40 h-14', text: 'text-3xl', icon: 'w-10 h-10' },
    lg: { container: 'w-48 h-16', text: 'text-4xl', icon: 'w-12 h-12' },
    xl: { container: 'w-64 h-20', text: 'text-5xl', icon: 'w-16 h-16' },
  };

  const currentSize = sizes[size];

  return (
    <div className={`relative ${currentSize.container} flex items-center gap-2`}>
      {/* Ícone 3D */}
      <motion.div
        className={`relative ${currentSize.icon}`}
        animate={animated ? {
          rotateY: [0, 360],
        } : {}}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Cubo 3D com gradiente */}
        <div className="relative w-full h-full">
          {/* Face frontal */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-pink-600 rounded-lg"
            style={{
              transform: 'translateZ(4px)',
              boxShadow: '0 0 20px rgba(147, 51, 234, 0.6)',
            }}
            animate={animated ? {
              boxShadow: [
                '0 0 20px rgba(147, 51, 234, 0.6)',
                '0 0 30px rgba(147, 51, 234, 0.9)',
                '0 0 20px rgba(147, 51, 234, 0.6)',
              ],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {/* Símbolo C estilizado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-3/4 h-3/4 text-white">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c2.85 0 5.44-1.19 7.27-3.11"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <motion.circle
                  cx="19"
                  cy="12"
                  r="2"
                  fill="currentColor"
                  animate={animated ? {
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.7, 1],
                  } : {}}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                />
              </svg>
            </div>
          </motion.div>

          {/* Partículas ao redor */}
          {animated && [0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full"
              style={{
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: [0, Math.cos(i * Math.PI / 2) * 30],
                y: [0, Math.sin(i * Math.PI / 2) * 30],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Texto "Criart" */}
      <div className="relative flex-1">
        <motion.div
          className={`font-display font-bold ${currentSize.text} relative`}
          animate={animated ? {
            textShadow: [
              '0 0 10px rgba(147, 51, 234, 0.5)',
              '0 0 20px rgba(147, 51, 234, 0.8)',
              '0 0 10px rgba(147, 51, 234, 0.5)',
            ],
          } : {}}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          {/* Gradiente no texto */}
          <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Criart
          </span>

          {/* Brilho superior */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent bg-clip-text text-transparent"
            style={{ WebkitBackgroundClip: 'text' }}
          >
            Criart
          </motion.div>

          {/* Linha de energia embaixo */}
          {animated && (
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              style={{ width: '100%' }}
            />
          )}
        </motion.div>

        {/* Subtítulo opcional */}
        <motion.div
          className="text-xs text-muted-foreground font-medium tracking-wider mt-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
        >
          TECH SOLUTIONS
        </motion.div>
      </div>
    </div>
  );
}
