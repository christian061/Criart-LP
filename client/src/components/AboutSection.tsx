import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Users, Target, Award } from 'lucide-react';

const stats = [
  {
    icon: Zap,
    value: '500+',
    label: 'Projetos Entregues',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Users,
    value: '200+',
    label: 'Clientes Satisfeitos',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Target,
    value: '98%',
    label: 'Taxa de Sucesso',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Anos de Experiência',
    gradient: 'from-purple-500 to-indigo-500',
  },
];

const values = [
  {
    title: 'Inovação',
    description: 'Sempre buscando as tecnologias mais avançadas para entregar soluções de ponta.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Qualidade',
    description: 'Compromisso com excelência em cada detalhe dos nossos projetos.',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Agilidade',
    description: 'Processos otimizados para entregas rápidas sem comprometer a qualidade.',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Parceria',
    description: 'Trabalhamos lado a lado com nossos clientes para alcançar seus objetivos.',
    gradient: 'from-purple-500 to-indigo-500',
  },
];

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

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4" data-testid="text-about-title">
            Sobre Nós
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-about-subtitle">
            Somos uma equipe apaixonada por tecnologia, dedicada a transformar ideias em soluções digitais inovadoras que impulsionam negócios e criam experiências memoráveis.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover-elevate text-center p-6 transition-all duration-300 hover:border-primary/50">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <motion.div 
                    className="relative inline-block mb-3"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    <div className={`relative z-10 w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <motion.div
                      variants={sparkVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      transition={{ delay: index * 0.1 + 0.3 }}
                      className={`absolute inset-0 w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} blur-md`}
                    />
                    
                    <motion.div
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-primary/50 rounded-lg`}
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
                      key={`border-${index}-${isInView}`}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { 
                        scale: [0, 1.5, 0], 
                        opacity: [0, 0.8, 0],
                        rotate: [0, 180, 360]
                      } : { scale: 0, opacity: 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: index * 0.1 + 0.3,
                        times: [0, 0.5, 1]
                      }}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-primary/50 rounded-lg`}
                    />
                  </motion.div>
                  
                  <div className="text-3xl md:text-4xl font-display font-bold mb-1 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-12">
            <CardContent className="p-0">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-center">
                Nossa Missão
              </h3>
              <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
                Capacitar empresas e empreendedores com tecnologia de ponta, criando soluções personalizadas que não apenas atendem, mas superam expectativas. Acreditamos que cada projeto é único e merece atenção especial, combinando criatividade, expertise técnica e visão estratégica para entregar resultados excepcionais.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  rotateY: -180,
                  scale: 0.5
                }}
                animate={isInView ? { 
                  opacity: 1, 
                  rotateY: 0,
                  scale: 1
                } : { 
                  opacity: 0, 
                  rotateY: -180,
                  scale: 0.5
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                style={{ perspective: '1000px' }}
              >
                <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover-elevate h-full p-6 transition-all duration-300 hover:border-primary/50">
                  {/* Subtle gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Gradient accent bar on left */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${value.gradient} opacity-60`} />
                  
                  <div className="relative z-10">
                    <h4 className={`text-xl font-display font-semibold mb-3 bg-gradient-to-r ${value.gradient} bg-clip-text text-transparent`}>
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
