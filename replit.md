# TechVFX - Landing Page Tecnológica Ultra-Moderna

## Visão Geral
Landing page profissional de tecnologia com efeitos VFX cinematográficos, hero section com 10 temas rotativos, partículas criptográficas interativas e design ultra-moderno.

## Stack Tecnológica
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animações**: Framer Motion, GSAP
- **UI Components**: Shadcn/ui, Radix UI
- **Backend**: Express.js, Node.js
- **Storage**: In-memory (MemStorage)
- **Validação**: Zod
- **Roteamento**: Wouter

## Estrutura do Projeto

### Schemas (shared/schema.ts)
- `Contact`: Dados de contato de clientes
- `HeroTheme`: Estrutura dos 10 temas da hero section
- `Service`: Dados dos serviços oferecidos

### Componentes Principais

#### Efeitos VFX
- **MatrixRain**: Chuva de código binário Matrix-style com opacidade 20%
- **HexParticles**: 30 partículas hexadecimais flutuantes com gradiente cyan/purple
- **TechGrid**: Grade tecnológica 3D com linhas em purple/cyan
- **Scanline**: Linha de scan horizontal animada
- **CustomCursor**: Cursor personalizado com trail effect (8 pontos)

#### Seções da Landing Page
- **Navbar**: Navegação fixa com glassmorphism, aparece após 50px de scroll
- **HeroSection**: 10 temas rotativos (5s cada) com transições cinematográficas
  - Temas: AI, Video, App, Web, Cloud, Blockchain, Analytics, IoT, Security, Innovation
  - Transições: fade + scale com duração 1.2s
  - Indicadores de tema na parte inferior
- **ServicesSection**: 4 cards glassmorphic com hover effects
  - Automações, Video Making, Apps, Sites Profissionais
  - Animações: reveal on scroll com delay progressivo
- **ContactSection**: Formulário com validação Zod
  - Campos: nome, email, telefone, serviço, mensagem
- **Footer**: Multi-coluna com links e redes sociais

### Temas da Hero Section (10 temas com imagens geradas)
1. **AI Automation**: Neural network com nodes purple/cyan
2. **Video Production**: Studio cinematográfico profissional
3. **App Development**: Mobile interface com UI mockup
4. **Web Design**: Laptop com website responsivo
5. **Cloud Solutions**: Infraestrutura cloud com servidores
6. **Blockchain**: Network descentralizado com chains
7. **Data Analytics**: Dashboard com charts coloridos
8. **IoT Integration**: Ecossistema de devices conectados
9. **Cybersecurity**: Shield com encryption patterns
10. **Innovation**: Formas geométricas futuristas abstratas

### Paleta de Cores
- **Primary**: 260 100% 65% (Electric Purple)
- **Cyber Cyan**: 190 95% 55%
- **Accent Gold**: 45 100% 60%
- **Matrix Code**: 120 100% 50% (Neon Green)
- **Background Dark**: 0 0% 8%
- **Card**: 0 0% 12%

### Animações Personalizadas (Tailwind)
- `float`: Flutuação vertical 6s
- `glow`: Pulsação de brilho 2s
- `slide-up/down`: Entrada de elementos
- `fade-in`: Fade suave
- `scanline`: Linha de scan 5s

### Fontes
- **Display**: Rajdhani, Orbitron (títulos e headings)
- **Sans**: Inter (corpo de texto)
- **Mono**: JetBrains Mono (códigos e hex)

## Rotas da Aplicação
- `/` - Home (landing page completa)

## APIs (Backend)
- `POST /api/contact` - Criar novo contato
- `GET /api/contacts` - Listar todos os contatos

## Interações do Usuário
1. **Hero Section**: Rotação automática de temas a cada 5s ou manual via indicadores
2. **Scroll**: Animações reveal-on-scroll para serviços
3. **Hover Cards**: Efeitos de elevação e glow em cards de serviço
4. **Formulário**: Validação em tempo real com feedback visual
5. **Cursor**: Trail effect seguindo movimento do mouse
6. **Navbar**: Glassmorphism e scroll-to-section suave

## Performance
- Debounce em eventos de mouse (16ms)
- Lazy loading de efeitos pesados
- Canvas otimizado para Matrix e Particles
- Transformações CSS (GPU accelerated)
- Limite de partículas: 30 (otimizado para performance)

## Design Guidelines
Seguindo rigorosamente o arquivo `design_guidelines.md`:
- Glassmorphic cards com backdrop-blur-xl
- Gradientes purple-to-cyan em CTAs
- Espaçamento consistente (8, 12, 16, 20, 24)
- Tipografia hierárquica clara
- Contraste de cores acessível
- Animações suaves com cubic-bezier easing
- Responsive breakpoints: sm, md, lg, xl

## Dados de Exemplo
Os serviços estão hard-coded no componente com:
- Ícones Lucide React
- Features detalhadas por serviço
- Gradientes únicos por categoria

## Integração Frontend-Backend
- **Mutation**: useMutation do TanStack Query para envio de formulário
- **Loading State**: Spinner animado com texto "Enviando..." durante requisição
- **Success Toast**: Notificação verde com ícone CheckCircle após envio bem-sucedido
- **Error Toast**: Notificação vermelha com mensagem de erro em caso de falha
- **Form Reset**: Formulário limpo automaticamente após envio bem-sucedido
- **Validação**: Zod schema validando dados no frontend e backend

## Estado Atual
✅ Task 1 Completa: Frontend com todos os componentes VFX, hero rotativo, serviços, contato e footer
✅ Task 2 Completa: Backend APIs com validação Zod e storage em memória
✅ Task 3 Completa: Integração completa com loading/error states e toasts elegantes

## Funcionalidades Implementadas
1. ✅ Hero section com 10 temas rotativos (transições cinematográficas)
2. ✅ Efeitos VFX: Matrix Rain, Hex Particles, Tech Grid, Scanline
3. ✅ Cursor personalizado com trail effect
4. ✅ Navbar glassmorphic com scroll detection
5. ✅ Seção de serviços com cards interativos
6. ✅ Formulário de contato funcional com API
7. ✅ Footer multi-coluna com links
8. ✅ Animações GSAP e Framer Motion
9. ✅ Design responsivo completo
10. ✅ Loading states e error handling

## Próximos Passos (Melhorias Futuras)
1. Adicionar mais temas na hero section
2. Implementar galeria de portfolio
3. Adicionar seção de depoimentos
4. Integração com email service (SendGrid/Mailgun)
5. Analytics e tracking de conversão
