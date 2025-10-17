import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  hex: string;
  opacity: number;
  size: number;
}

export function HexParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const styles = getComputedStyle(document.documentElement);
    const cyberCyan = styles.getPropertyValue('--cyber-cyan').trim();
    const neonGlow = styles.getPropertyValue('--neon-glow').trim();

    const particles: Particle[] = [];
    const particleCount = 30;

    const hexChars = '0123456789ABCDEF';
    const generateHex = () => {
      let hex = '0x';
      for (let i = 0; i < 6; i++) {
        hex += hexChars[Math.floor(Math.random() * 16)];
      }
      return hex;
    };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -Math.random() * 0.8 - 0.3,
        hex: generateHex(),
        opacity: Math.random() * 0.5 + 0.3,
        size: Math.random() * 12 + 8,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.y < -50) {
          particle.y = canvas.height + 50;
          particle.x = Math.random() * canvas.width;
          particle.hex = generateHex();
        }

        if (particle.x < -50 || particle.x > canvas.width + 50) {
          particle.x = Math.random() * canvas.width;
        }

        const gradient = ctx.createLinearGradient(
          particle.x,
          particle.y,
          particle.x,
          particle.y + 20
        );
        gradient.addColorStop(0, `hsl(${cyberCyan} / ${particle.opacity})`);
        gradient.addColorStop(1, `hsl(${neonGlow} / ${particle.opacity * 0.5})`);

        ctx.font = `${particle.size}px JetBrains Mono`;
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity;
        ctx.fillText(particle.hex, particle.x, particle.y);
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
}
