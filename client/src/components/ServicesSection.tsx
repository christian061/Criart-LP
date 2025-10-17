import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Settings, Video, Smartphone, Globe } from 'lucide-react';
import { EnergyBorder } from '@/components/ui/energy-border';

const services = [
  {
    id: 'automacao',
    icon: Settings,
    title: 'Automações',
    description: 'Automatize processos, integre sistemas e economize tempo com nossas soluções de automação inteligente.',
    features: ['RPA & IA', 'Integração de APIs', 'Workflows Automatizados', 'Chatbots & Assistentes'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'video',
    icon: Video,
    title: 'Video Making',
    description: 'Produção de vídeos profissionais com edição cinematográfica, motion graphics e efeitos visuais.',
    features: ['Edição Profissional', 'Motion Graphics', 'Animações 2D/3D', 'VFX & Pós-Produção'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'app',
    icon: Smartphone,
    title: 'Criação de Apps',
    description: 'Desenvolvimento de aplicativos móveis nativos e híbridos com UX excepcional e performance otimizada.',
    features: ['iOS & Android', 'React Native', 'UI/UX Design', 'Performance Otimizada'],
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 'site',
    icon: Globe,
    title: 'Sites Profissionais',
    description: 'Websites responsivos, landing pages de alta conversão e sistemas web completos sob medida.',
    features: ['Design Responsivo', 'SEO Otimizado', 'Alta Performance', 'CMS & E-commerce'],
    gradient: 'from-amber-500 to-orange-500',
  },
];

const assemblyVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const pieceVariants = {
  iconPiece: {
    hidden: { 
      x: -100, 
      y: -100, 
      opacity: 0, 
      scale: 0.3,
      rotate: -180,
    },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8,
      }
    }
  },
  titlePiece: {
    hidden: { 
      x: 100, 
      y: -80, 
      opacity: 0, 
      scale: 0.5,
      rotateY: 90,
    },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 18,
        duration: 0.7,
      }
    }
  },
  descriptionPiece: {
    hidden: { 
      x: -80, 
      y: 100, 
      opacity: 0, 
      scale: 0.4,
      rotateX: -90,
    },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 16,
        duration: 0.6,
      }
    }
  },
  featurePiece: {
    hidden: { 
      x: 120, 
      y: 60, 
      opacity: 0, 
      scale: 0.2,
      rotate: 45,
    },
    visible: (i: number) => ({ 
      x: 0, 
      y: 0, 
      opacity: 1, 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 140,
        damping: 14,
        delay: i * 0.08,
        duration: 0.5,
      }
    })
  },
};

const sparkVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: [0, 1, 0],
    scale: [0, 1.5, 0],
    transition: {
      duration: 0.6,
      times: [0, 0.5, 1],
    }
  }
};

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="services" ref={ref} className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4" data-testid="text-services-title">
            Nossos Serviços
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Soluções tecnológicas completas para transformar sua visão em realidade
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const hasEnergyEffect = index === 0 || index === 2; // Adiciona efeito no 1º e 3º card
            
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={assemblyVariants}
                transition={{ delay: index * 0.2 }}
                style={{ perspective: '1000px' }}
              >
                {hasEnergyEffect ? (
                  <EnergyBorder delay={index * 0.5}>
                    <Card 
                      className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover-elevate h-full transition-all duration-300 hover:border-primary/50"
                      data-testid={`card-service-${service.id}`}
                    >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <CardHeader className="space-y-4 relative">
                    <motion.div 
                      variants={pieceVariants.iconPiece}
                      className="relative"
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                    >
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center relative z-10`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <motion.div
                        variants={sparkVariants}
                        className={`absolute inset-0 w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} blur-md`}
                      />
                      
                      <motion.div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-primary/50 rounded-lg`}
                        variants={{
                          rest: { scale: 0, opacity: 0, rotate: 0 },
                          hover: { 
                            scale: [0, 1.5, 0], 
                            opacity: [0, 0.8, 0],
                            rotate: [0, 180, 360],
                            transition: { duration: 0.8, times: [0, 0.5, 1] }
                          }
                        }}
                      />
                      
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { 
                          scale: [0, 1.5, 0], 
                          opacity: [0, 0.8, 0],
                          rotate: [0, 180, 360]
                        } : {}}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.2 + 0.3,
                          times: [0, 0.5, 1]
                        }}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-primary/50 rounded-lg`}
                      />
                    </motion.div>
                    
                    <motion.h3 
                      variants={pieceVariants.titlePiece}
                      className="text-2xl font-display font-semibold relative z-10" 
                      data-testid={`text-service-title-${service.id}`}
                    >
                      {service.title}
                      <motion.span
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${service.gradient}`}
                      />
                    </motion.h3>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <motion.p 
                      variants={pieceVariants.descriptionPiece}
                      className="text-muted-foreground" 
                      data-testid={`text-service-description-${service.id}`}
                    >
                      {service.description}
                    </motion.p>
                    <motion.ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          custom={idx}
                          variants={pieceVariants.featurePiece}
                          className="flex items-center text-sm text-foreground/80 relative"
                          data-testid={`text-feature-${service.id}-${idx}`}
                        >
                          <motion.span 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : {}}
                            transition={{ 
                              type: "spring",
                              stiffness: 300,
                              delay: index * 0.2 + 0.8 + idx * 0.08 
                            }}
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mr-2`}
                          />
                          {feature}
                          
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? {
                              opacity: [0, 1, 0],
                              scale: [0, 2, 0],
                            } : {}}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + 0.8 + idx * 0.08,
                              times: [0, 0.5, 1]
                            }}
                            className={`absolute -left-1 w-3 h-3 rounded-full bg-primary/30 blur-sm`}
                          />
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { 
                      opacity: [0, 0.3, 0],
                    } : {}}
                    transition={{ 
                      duration: 1,
                      delay: index * 0.2 + 1.2,
                      times: [0, 0.5, 1]
                    }}
                    className="absolute inset-0 border-2 border-primary/50 rounded-lg pointer-events-none"
                  />
                </Card>
                  </EnergyBorder>
                ) : (
                  <Card 
                    className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover-elevate h-full transition-all duration-300 hover:border-primary/50"
                    data-testid={`card-service-${service.id}`}
                  >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <CardHeader className="space-y-4 relative">
                    <motion.div 
                      variants={pieceVariants.iconPiece}
                      className="relative"
                      whileHover="hover"
                      initial="rest"
                      animate="rest"
                    >
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center relative z-10`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <motion.div
                        variants={sparkVariants}
                        className={`absolute inset-0 w-16 h-16 rounded-lg bg-gradient-to-br ${service.gradient} blur-md`}
                      />
                      
                      <motion.div
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-primary/50 rounded-lg`}
                        variants={{
                          rest: { scale: 0, opacity: 0, rotate: 0 },
                          hover: { 
                            scale: [0, 1.5, 0], 
                            opacity: [0, 0.8, 0],
                            rotate: [0, 180, 360],
                            transition: { duration: 0.8, times: [0, 0.5, 1] }
                          }
                        }}
                      />
                      
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { 
                          scale: [0, 1.5, 0], 
                          opacity: [0, 0.8, 0],
                          rotate: [0, 180, 360]
                        } : {}}
                        transition={{ 
                          duration: 0.8, 
                          delay: index * 0.2 + 0.3,
                          times: [0, 0.5, 1]
                        }}
                        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border-2 border-primary/50 rounded-lg`}
                      />
                    </motion.div>
                    
                    <motion.h3 
                      variants={pieceVariants.titlePiece}
                      className="text-2xl font-display font-semibold relative z-10" 
                      data-testid={`text-service-title-${service.id}`}
                    >
                      {service.title}
                      <motion.span
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : {}}
                        transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${service.gradient}`}
                      />
                    </motion.h3>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <motion.p 
                      variants={pieceVariants.descriptionPiece}
                      className="text-muted-foreground" 
                      data-testid={`text-service-description-${service.id}`}
                    >
                      {service.description}
                    </motion.p>
                    <motion.ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <motion.li 
                          key={idx}
                          custom={idx}
                          variants={pieceVariants.featurePiece}
                          className="flex items-center text-sm text-foreground/80 relative"
                          data-testid={`text-feature-${service.id}-${idx}`}
                        >
                          <motion.span 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={isInView ? { scale: 1, rotate: 0 } : {}}
                            transition={{ 
                              type: "spring",
                              stiffness: 300,
                              delay: index * 0.2 + 0.8 + idx * 0.08 
                            }}
                            className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.gradient} mr-2`}
                          />
                          {feature}
                          
                          <motion.span
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? {
                              opacity: [0, 1, 0],
                              scale: [0, 2, 0],
                            } : {}}
                            transition={{
                              duration: 0.4,
                              delay: index * 0.2 + 0.8 + idx * 0.08,
                              times: [0, 0.5, 1]
                            }}
                            className={`absolute -left-1 w-3 h-3 rounded-full bg-primary/30 blur-sm`}
                          />
                        </motion.li>
                      ))}
                    </motion.ul>
                  </CardContent>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { 
                      opacity: [0, 0.3, 0],
                    } : {}}
                    transition={{ 
                      duration: 1,
                      delay: index * 0.2 + 1.2,
                      times: [0, 0.5, 1]
                    }}
                    className="absolute inset-0 border-2 border-primary/50 rounded-lg pointer-events-none"
                  />
                </Card>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
