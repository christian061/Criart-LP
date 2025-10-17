import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import type { HeroTheme } from '@shared/schema';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import aiImage from '@assets/generated_images/AI_Automation_neural_network_999d2180.png';
import videoImage from '@assets/generated_images/Video_production_cinema_setup_9787088a.png';
import appImage from '@assets/generated_images/App_development_mobile_interface_07358ce2.png';
import webImage from '@assets/generated_images/Web_design_laptop_display_6b029b9c.png';
import cloudImage from '@assets/generated_images/Cloud_solutions_infrastructure_visualization_cd4e70a9.png';
import blockchainImage from '@assets/generated_images/Blockchain_network_diagram_b6ab8c96.png';
import analyticsImage from '@assets/generated_images/Data_analytics_dashboard_visualization_164ce5ff.png';
import iotImage from '@assets/generated_images/IoT_connected_devices_ecosystem_22880f33.png';
import securityImage from '@assets/generated_images/Cybersecurity_shield_encryption_e029631a.png';
import innovationImage from '@assets/generated_images/Innovation_futuristic_abstract_shapes_da478514.png';

const heroThemes: HeroTheme[] = [
  {
    id: 1,
    name: 'AI Automation',
    title: 'Automações Inteligentes',
    subtitle: 'Potencialize seu negócio com IA e automações avançadas que economizam tempo e recursos',
    backgroundImage: aiImage,
    gradientFrom: '#9333ea',
    gradientTo: '#06b6d4',
  },
  {
    id: 2,
    name: 'Video Production',
    title: 'Video Making Profissional',
    subtitle: 'Crie conteúdo visual impactante com nossa expertise em produção de vídeos cinematográficos',
    backgroundImage: videoImage,
    gradientFrom: '#06b6d4',
    gradientTo: '#9333ea',
  },
  {
    id: 3,
    name: 'App Development',
    title: 'Desenvolvimento de Apps',
    subtitle: 'Apps móveis modernos e funcionais que encantam usuários e impulsionam resultados',
    backgroundImage: appImage,
    gradientFrom: '#9333ea',
    gradientTo: '#f59e0b',
  },
  {
    id: 4,
    name: 'Web Design',
    title: 'Sites Profissionais',
    subtitle: 'Landing pages e websites responsivos com design único e performance excepcional',
    backgroundImage: webImage,
    gradientFrom: '#06b6d4',
    gradientTo: '#9333ea',
  },
  {
    id: 5,
    name: 'Cloud Solutions',
    title: 'Soluções em Nuvem',
    subtitle: 'Infraestrutura escalável e segura para seu negócio crescer sem limites',
    backgroundImage: cloudImage,
    gradientFrom: '#9333ea',
    gradientTo: '#06b6d4',
  },
  {
    id: 6,
    name: 'Blockchain',
    title: 'Tecnologia Blockchain',
    subtitle: 'Inovação descentralizada com smart contracts e soluções Web3',
    backgroundImage: blockchainImage,
    gradientFrom: '#f59e0b',
    gradientTo: '#9333ea',
  },
  {
    id: 7,
    name: 'Data Analytics',
    title: 'Análise de Dados',
    subtitle: 'Transforme dados em insights acionáveis com dashboards inteligentes',
    backgroundImage: analyticsImage,
    gradientFrom: '#06b6d4',
    gradientTo: '#f59e0b',
  },
  {
    id: 8,
    name: 'IoT Integration',
    title: 'Integração IoT',
    subtitle: 'Conecte dispositivos e crie ecossistemas inteligentes e automatizados',
    backgroundImage: iotImage,
    gradientFrom: '#9333ea',
    gradientTo: '#06b6d4',
  },
  {
    id: 9,
    name: 'Cybersecurity',
    title: 'Segurança Digital',
    subtitle: 'Proteja seus dados e sistemas com as melhores práticas de cibersegurança',
    backgroundImage: securityImage,
    gradientFrom: '#06b6d4',
    gradientTo: '#9333ea',
  },
  {
    id: 10,
    name: 'Innovation',
    title: 'Inovação & Futuro',
    subtitle: 'Tecnologias emergentes para transformar o futuro do seu negócio',
    backgroundImage: innovationImage,
    gradientFrom: '#f59e0b',
    gradientTo: '#06b6d4',
  },
];

const cameraTransitions = [
  {
    name: 'dollyZoom',
    enter: { scale: 1.4, opacity: 0, rotateZ: 0 },
    animate: { scale: 1, opacity: 1, rotateZ: 0 },
    exit: { scale: 0.8, opacity: 0, rotateZ: 0 },
  },
  {
    name: 'panLeft',
    enter: { x: '100%', opacity: 0, scale: 1.1 },
    animate: { x: '0%', opacity: 1, scale: 1 },
    exit: { x: '-100%', opacity: 0, scale: 1.1 },
  },
  {
    name: 'rotate3D',
    enter: { rotateY: 90, opacity: 0, scale: 0.8 },
    animate: { rotateY: 0, opacity: 1, scale: 1 },
    exit: { rotateY: -90, opacity: 0, scale: 0.8 },
  },
  {
    name: 'zoomRotate',
    enter: { scale: 0.5, rotateZ: -45, opacity: 0 },
    animate: { scale: 1, rotateZ: 0, opacity: 1 },
    exit: { scale: 1.5, rotateZ: 45, opacity: 0 },
  },
  {
    name: 'verticalSlide',
    enter: { y: '100%', opacity: 0, scale: 1.2 },
    animate: { y: '0%', opacity: 1, scale: 1 },
    exit: { y: '-100%', opacity: 0, scale: 1.2 },
  },
  {
    name: 'diagonalWipe',
    enter: { x: '50%', y: '50%', opacity: 0, scale: 0.7 },
    animate: { x: '0%', y: '0%', opacity: 1, scale: 1 },
    exit: { x: '-50%', y: '-50%', opacity: 0, scale: 0.7 },
  },
];

export function HeroSection() {
  const [currentTheme, setCurrentTheme] = useState(0);
  const [transitionIndex, setTransitionIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const [isMobile, setIsMobile] = useState(false);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null);

  useGSAP(() => {
    if (bgRef.current && overlayRef.current) {
      gsap.to(bgRef.current, {
        scale: 1.05,
        duration: 5,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
      });

      gsap.to(overlayRef.current, {
        opacity: 0.3,
        duration: 3,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, [currentTheme]);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Autoplay for mobile
  useEffect(() => {
    if (isMobile) {
      autoplayInterval.current = setInterval(() => {
        setCurrentTheme((prev) => (prev + 1) % heroThemes.length);
        setTransitionIndex((prev) => (prev + 1) % cameraTransitions.length);
      }, 5000); // Change slide every 5 seconds

      return () => {
        if (autoplayInterval.current) {
          clearInterval(autoplayInterval.current);
        }
      };
    }
  }, [isMobile]);

  // Wheel event for desktop only
  useEffect(() => {
    if (isMobile) return; // Skip wheel event on mobile

    const handleWheel = (e: WheelEvent) => {
      const currentScrollY = window.scrollY;
      
      // Apenas funciona quando está no topo da página
      if (currentScrollY < 100) {
        // deltaY negativo = scroll para cima
        if (e.deltaY < 0) {
          setScrollDirection('up');
          if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
          }
          scrollTimeout.current = setTimeout(() => {
            setCurrentTheme((prev) => (prev + 1) % heroThemes.length);
            setTransitionIndex((prev) => (prev + 1) % cameraTransitions.length);
          }, 50);
        } else {
          setScrollDirection('down');
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isMobile]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const theme = heroThemes[currentTheme];
  const transition = cameraTransitions[transitionIndex];

  const getExitTransition = () => {
    if (scrollDirection === 'up') {
      return transition.exit;
    } else {
      return transition.enter;
    }
  };

  const getEnterTransition = () => {
    if (scrollDirection === 'up') {
      return transition.enter;
    } else {
      return transition.exit;
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={theme.id}
          initial={getEnterTransition()}
          animate={transition.animate}
          exit={getExitTransition()}
          transition={{ 
            duration: 1.5, 
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-0"
          style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
        >
          <motion.div 
            ref={bgRef}
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${theme.backgroundImage})`,
              willChange: 'transform',
            }}
            initial={{ filter: 'blur(10px)' }}
            animate={{ filter: 'blur(0px)' }}
            exit={{ filter: 'blur(10px)' }}
            transition={{ duration: 0.8 }}
          />
          <motion.div 
            ref={overlayRef}
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${theme.gradientFrom}dd, ${theme.gradientTo}dd)`,
              mixBlendMode: 'multiply',
            }}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: 0.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/10 to-background/60" />
          
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.3, 0] }}
            transition={{ duration: 0.5, times: [0, 0.5, 1] }}
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
              transform: 'skewX(-20deg) translateX(-100%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={theme.id}
            initial={{ y: 50, opacity: 0, rotateX: -20 }}
            animate={{ y: 0, opacity: 1, rotateX: 0 }}
            exit={{ y: -50, opacity: 0, rotateX: 20 }}
            transition={{ 
              duration: 1, 
              ease: [0.16, 1, 0.3, 1],
              delay: 0.3,
            }}
            style={{ perspective: '1000px' }}
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6 text-white drop-shadow-2xl"
              data-testid="text-hero-title"
              initial={{ letterSpacing: '0.1em', opacity: 0 }}
              animate={{ letterSpacing: '0em', opacity: 1 }}
              exit={{ letterSpacing: '-0.05em', opacity: 0 }}
              transition={{ duration: 1.2 }}
            >
              {theme.title}
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto drop-shadow-lg"
              data-testid="text-hero-subtitle"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {theme.subtitle}
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Button 
                size="lg"
                onClick={() => {
                  const whatsappNumber = '5561995157781';
                  const message = 'Olá! Gostaria de começar um projeto com a Criart. Podemos conversar?';
                  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
                className="bg-gradient-to-r from-primary to-chart-2 text-white font-semibold text-lg px-8 py-6 group"
                data-testid="button-hero-cta"
              >
                Começar Projeto
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 font-semibold text-lg px-8 py-6"
                data-testid="button-hero-services"
              >
                Ver Serviços
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {!isMobile && (
        <motion.div 
          className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-white font-medium text-base drop-shadow-lg whitespace-nowrap">Role para ver mais</span>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white drop-shadow-lg"
          >
            <ChevronRight className="-rotate-90 w-6 h-6" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
