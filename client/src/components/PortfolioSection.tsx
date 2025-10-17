import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ExternalLink, Play, X } from 'lucide-react';
import { EnergyBorder } from '@/components/ui/energy-border';

const categories = ['Todos', 'Automação', 'Vídeo', 'Apps', 'Sites'];

const projects = [
  {
    id: 1,
    title: 'Sistema de Automação ',
    category: 'Automação',
    description: 'Automação completa de processos de vendas, estoque e atendimento ao cliente com IA.',
    fullDescription: 'Desenvolvemos um sistema completo de automação para e-commerce que integra processos de vendas, controle de estoque e atendimento ao cliente. Utilizando inteligência artificial, o sistema aprende com os padrões de compra e otimiza automaticamente o estoque, prevê demandas e personaliza o atendimento. Inclui integração com múltiplas plataformas de vendas, automação de respostas via chatbot e relatórios analíticos em tempo real.',
    features: ['Integração multi-plataforma', 'IA para previsão de demanda', 'Chatbot inteligente', 'Automação de estoque', 'Relatórios em tempo real', 'API REST completa'],
    results: 'Redução de 60% no tempo de atendimento, aumento de 40% na eficiência operacional e 95% de satisfação dos clientes.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Python', 'IA', 'API Integration'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Campanha Institucional Tech Corp',
    category: 'Vídeo',
    description: 'Produção audiovisual completa com motion graphics e VFX para campanha corporativa.',
    fullDescription: 'Criamos uma campanha institucional completa para uma empresa de tecnologia, incluindo vídeo principal de 2 minutos, versões curtas para redes sociais e material de apoio. O projeto envolveu roteiro, storyboard, filmagem, motion graphics avançados em 2D e 3D, composição de VFX e pós-produção completa. Utilizamos técnicas cinematográficas modernas e efeitos visuais de última geração.',
    features: ['Roteiro e storyboard', 'Filmagem profissional 4K', 'Motion graphics 2D/3D', 'VFX e composição', 'Color grading cinematográfico', 'Versões para múltiplas plataformas'],
    results: 'Mais de 2 milhões de visualizações, aumento de 150% no engajamento da marca e prêmio de melhor vídeo corporativo do ano.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80',
    tags: ['After Effects', 'Cinema 4D', 'Motion Graphics'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  
  {
    id: 4,
    title: 'Landing Page Premium',
    category: 'Sites',
    description: 'Website de alta conversão e integração CRM.',
    fullDescription: 'Criamos uma landing page de alta conversão para uma empresa do setor imobiliário. O site conta com tour virtual 360° dos imóveis usando Three.js, formulários inteligentes integrados ao CRM, otimização SEO avançada e design responsivo premium. Implementamos técnicas de persuasão e UX para maximizar a conversão de visitantes em leads qualificados.',
    features: ['Tour virtual 360° interativo', 'Integração CRM automática', 'SEO otimizado', 'Design responsivo premium', 'Formulários inteligentes', 'Analytics avançado'],
    results: 'Taxa de conversão de 12% (média do setor: 2-3%), redução de 70% no tempo de qualificação de leads.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    tags: ['Next.js', 'Three.js', 'SEO'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 5,
    title: 'Bot de Atendimento WhatsApp feito com N8N',
    category: 'Automação',
    description: 'Chatbot inteligente com IA para atendimento automatizado 24/7 via WhatsApp.',
    fullDescription: 'Desenvolvemos um chatbot inteligente para WhatsApp Business que utiliza IA (OpenAI GPT) para entender e responder perguntas dos clientes de forma natural. O bot aprende com as conversas, identifica intenções, agenda atendimentos, processa pedidos e escala para atendimento humano quando necessário. Inclui dashboard administrativo para monitoramento e treinamento contínuo.',
    features: ['IA conversacional avançada', 'Atendimento 24/7', 'Integração WhatsApp Business', 'Agendamento automático', 'Escalação inteligente', 'Dashboard de analytics'],
    results: 'Redução de 80% no volume de atendimento humano, tempo médio de resposta de 2 segundos, 92% de satisfação.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    tags: ['Node.js', 'OpenAI', 'WhatsApp API'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 6,
    title: 'Vídeo Explicativo Animado',
    category: 'Vídeo',
    description: 'Animação 2D explicativa para startup de tecnologia com storytelling envolvente.',
    fullDescription: 'Criamos um vídeo explicativo animado em 2D para uma startup de tecnologia apresentar seu produto de forma clara e envolvente. O projeto incluiu desenvolvimento de roteiro com storytelling, criação de personagens e cenários únicos, animação fluida e trilha sonora original. O vídeo foi otimizado para uso em landing pages, redes sociais e apresentações comerciais.',
    features: ['Roteiro com storytelling', 'Design de personagens único', 'Animação 2D profissional', 'Trilha sonora original', 'Locução profissional', 'Versões para múltiplos formatos'],
    results: 'Aumento de 200% na taxa de conversão da landing page, 500 mil visualizações em 3 meses.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    tags: ['Illustrator', 'After Effects', '2D Animation'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 7,
    title: 'App Fitness & Wellness',
    category: 'Apps',
    description: 'Aplicativo de treinos personalizados com IA, tracking de progresso e comunidade.',
    fullDescription: 'Desenvolvemos um aplicativo completo de fitness que utiliza IA para criar planos de treino personalizados baseados nos objetivos, nível e progresso do usuário. O app inclui biblioteca de exercícios com vídeos, tracking de métricas corporais, integração com wearables, comunidade social e desafios gamificados. A IA ajusta automaticamente os treinos conforme o progresso.',
    features: ['IA para treinos personalizados', 'Biblioteca com 500+ exercícios', 'Tracking de progresso', 'Integração com wearables', 'Comunidade e desafios', 'Planos de nutrição'],
    results: '100 mil usuários ativos, nota 4.9 nas lojas, 85% de retenção mensal.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    tags: ['Flutter', 'TensorFlow', 'Cloud Functions'],
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    id: 8,
    title: 'E-commerce Fashion Store',
    category: 'Sites',
    description: 'Loja virtual completa com sistema de recomendação por IA e checkout otimizado.',
    fullDescription: 'Criamos uma loja virtual completa para uma marca de moda com design premium e experiência de compra excepcional. O site inclui sistema de recomendação por IA que sugere produtos baseado no comportamento do usuário, checkout em uma página otimizado para conversão, integração com múltiplos meios de pagamento e sistema de gestão de estoque em tempo real.',
    features: ['Recomendações por IA', 'Checkout otimizado', 'Design responsivo premium', 'Integração Shopify', 'Múltiplos pagamentos', 'Gestão de estoque'],
    results: 'Aumento de 180% nas vendas online, taxa de abandono de carrinho reduzida em 45%.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    tags: ['React', 'Shopify', 'Stripe'],
    gradient: 'from-amber-500 to-orange-500',
  },
];

export function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px' });
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" ref={ref} className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4" data-testid="text-portfolio-title">
            Portfolio
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-portfolio-subtitle">
            Conheça alguns dos projetos que desenvolvemos com excelência
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`
                ${selectedCategory === category 
                  ? 'bg-gradient-to-r from-primary to-chart-2' 
                  : 'border-border/50 hover:border-primary/50'
                }
                transition-all duration-300
              `}
              data-testid={`button-category-${category}`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => {
            const hasEnergyEffect = index % 2 === 0; // Adiciona efeito nos cards pares (0, 2, 4...)
            
            return (
            <motion.div
              key={project.id}
              initial={{ 
                opacity: 0, 
                y: 50,
                rotateX: -15,
                scale: 0.9
              }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                rotateX: 0,
                scale: 1
              } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              style={{ perspective: '1000px' }}
              layout
            >
              {hasEnergyEffect ? (
                <EnergyBorder delay={index * 0.4}>
                  <Card 
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover-elevate h-full transition-all duration-300 hover:border-primary/50 cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Tech Grid Background */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(var(--primary-rgb, 147, 51, 234), 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--primary-rgb, 147, 51, 234), 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Scan Line Effect */}
                <motion.div
                  className={`absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent`}
                  initial={{ y: '-100%' }}
                  animate={{ y: '200%' }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.3
                  }}
                />

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Digital Glitch Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: [0, 0.3, 0, 0.2, 0],
                      x: [0, -2, 2, -1, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div 
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center backdrop-blur-sm relative`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.category === 'Vídeo' ? (
                        <Play className="w-8 h-8 text-white" />
                      ) : (
                        <ExternalLink className="w-8 h-8 text-white" />
                      )}
                      {/* Pulse ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full border-2 border-white`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
                </EnergyBorder>
              ) : (
                <Card 
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover-elevate h-full transition-all duration-300 hover:border-primary/50 cursor-pointer"
                onClick={() => openModal(project)}
              >
                {/* Tech Grid Background */}
                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(var(--primary-rgb, 147, 51, 234), 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--primary-rgb, 147, 51, 234), 0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Scan Line Effect */}
                <motion.div
                  className={`absolute inset-0 h-full w-full bg-gradient-to-b from-transparent via-primary/20 to-transparent`}
                  initial={{ y: '-100%' }}
                  animate={{ y: '200%' }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: index * 0.3
                  }}
                />

                {/* Corner Brackets */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  
                  {/* Digital Glitch Effect on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-primary/10"
                    initial={{ opacity: 0 }}
                    whileHover={{
                      opacity: [0, 0.3, 0, 0.2, 0],
                      x: [0, -2, 2, -1, 0],
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div 
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${project.gradient} flex items-center justify-center backdrop-blur-sm relative`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {project.category === 'Vídeo' ? (
                        <Play className="w-8 h-8 text-white" />
                      ) : (
                        <ExternalLink className="w-8 h-8 text-white" />
                      )}
                      
                      {/* Pulse Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full border-2 border-white/50`}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white font-medium whitespace-nowrap`}>
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              )}
            </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Quer ver seu projeto aqui também?
          </p>
          <Button 
            size="lg"
            onClick={() => {
              const whatsappNumber = '5561995157781';
              const message = 'Olá! Gostaria de começar um projeto com a Criart. Podemos conversar?';
              const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
              window.open(url, '_blank');
            }}
            className="bg-gradient-to-r from-primary to-chart-2 font-semibold"
          >
            Começar Meu Projeto
          </Button>
        </motion.div>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-display font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
                <DialogDescription className="text-base">
                  {selectedProject.category}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Image */}
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-20`} />
                </div>

                {/* Full Description */}
                <div>
                  <h3 className="text-xl font-display font-semibold mb-3">Sobre o Projeto</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-xl font-display font-semibold mb-3">Funcionalidades</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className={`mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br ${selectedProject.gradient} flex-shrink-0`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6">
                  <h3 className="text-xl font-display font-semibold mb-3 flex items-center gap-2">
                    <span className={`w-3 h-3 rounded-full bg-gradient-to-br ${selectedProject.gradient}`} />
                    Resultados
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.results}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-xl font-display font-semibold mb-3">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className={`px-4 py-2 rounded-full bg-gradient-to-br ${selectedProject.gradient} text-white font-medium text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4">
                  <Button 
                    size="lg"
                    onClick={() => {
                      const whatsappNumber = '5561995157781';
                      const message = `Olá! Gostei do projeto "${selectedProject.title}" e gostaria de fazer algo similar. Podemos conversar?`;
                      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                      window.open(url, '_blank');
                      closeModal();
                    }}
                    className="flex-1 bg-gradient-to-r from-primary to-chart-2 font-semibold"
                  >
                    Quero um Projeto Assim
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={closeModal}
                    className="border-border/50"
                  >
                    Fechar
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
