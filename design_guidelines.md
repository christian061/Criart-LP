# Design Guidelines: Technology Services Landing Page

## Design Approach
**Reference-Based Approach** drawing inspiration from cutting-edge tech companies:
- **Vercel**: Sleek gradients and modern dark aesthetics
- **Linear**: Minimalist typography with subtle, purposeful animations
- **Stripe**: Clean layouts with strategic color use
- **Awwwards-winning tech sites**: Experimental VFX and interactive elements

**Core Principles**: Create an immersive, cinematic experience that showcases technological expertise through visual innovation while maintaining professional credibility and usability.

---

## Color Palette

### Dark Mode (Primary)
- **Background Base**: 0 0% 8% (rich black)
- **Background Elevated**: 0 0% 12% (cards/sections)
- **Primary Brand**: 260 100% 65% (electric purple/violet)
- **Secondary Tech**: 190 95% 55% (cyber cyan)
- **Accent Glow**: 45 100% 60% (golden highlight for premium CTAs)
- **Text Primary**: 0 0% 95%
- **Text Secondary**: 0 0% 65%

### Cryptographic Elements
- **Matrix Code**: 120 100% 50% (neon green) with 40% opacity
- **Hex Floating**: 190 95% 55% (cyan) with gradient to purple
- **Grid Lines**: 260 80% 60% with 20% opacity

---

## Typography

### Font Families
- **Headlines**: 'Rajdhani' or 'Orbitron' (geometric, tech-forward) from Google Fonts
- **Body**: 'Inter' (clean, highly readable) from Google Fonts
- **Code/Tech Elements**: 'JetBrains Mono' for cryptographic text

### Scale
- **Hero H1**: text-6xl md:text-7xl lg:text-8xl font-bold
- **Section Headers**: text-4xl md:text-5xl font-bold
- **Service Titles**: text-2xl md:text-3xl font-semibold
- **Body**: text-base md:text-lg leading-relaxed

---

## Layout System

**Spacing Primitives**: Use Tailwind units of **4, 8, 12, 16, 20, 24** for consistency
- Section padding: py-20 md:py-32
- Container max-width: max-w-7xl
- Card spacing: gap-8 md:gap-12
- Element margins: mb-8, mb-12, mb-16

**Grid Strategy**:
- Hero: Full-width immersive (100vh)
- Services: 4-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Features: 2-column asymmetric layouts
- Portfolio: Masonry-style 3-column grid

---

## Component Library

### Hero Section (10 Rotating Themes)
**Theme Rotation System**:
1. **AI Automation** - Neural network visualizations
2. **Video Production** - Film reel elements, play icons
3. **App Development** - Mobile device mockups, code snippets
4. **Web Design** - Browser frames, responsive layouts
5. **Cloud Solutions** - Server visualizations, data flows
6. **Blockchain** - Cryptographic chains, decentralized nodes
7. **Data Analytics** - Chart animations, dashboard previews
8. **IoT Integration** - Connected device network
9. **Security** - Shield icons, encryption patterns
10. **Innovation** - Abstract tech shapes, future concepts

**Transition Effects**: Use slide-in/slide-out with scale and opacity transforms, 1.2s duration with cubic-bezier easing

### Cryptographic Background Elements
- **Binary Matrix**: Falling green code effect (similar to Matrix) using canvas or CSS animation
- **Floating Hexadecimal**: Randomized hex codes drifting upward with blur and fade
- **Grid Overlay**: Subtle cyan/purple gradient grid lines (1px opacity 20%)
- **Particle System**: Small glowing dots forming connection lines on hover

### Interactive Elements
- **Cursor Trail**: Custom cursor with glowing tail effect following mouse
- **Parallax Layers**: Multiple depth layers moving at different speeds
- **Hover Magnetism**: Cards and buttons subtly follow cursor within proximity
- **Glow Effects**: Elements emit colored glow on hover (box-shadow with brand colors)
- **Scanline Animation**: Horizontal scanning line effect across hero

### Service Cards
- **Glass-morphic Design**: backdrop-blur-xl with border border-white/10
- **3D Tilt Effect**: Card tilts toward cursor on hover
- **Icon Treatment**: Large (96px) icons with gradient fills
- **Hover State**: Scale to 1.05, increase glow intensity
- **Structure**: Icon → Title → Description → CTA button

### Navigation
- **Fixed Header**: Glassmorphic navbar with blur, appears on scroll
- **Animated Menu**: Burger menu transforms with GSAP timeline
- **Active States**: Underline with gradient animation

### CTA Buttons
- **Primary**: Gradient background (purple to cyan), bold text, scale on hover
- **Secondary**: Outline with neon glow effect, backdrop-blur
- **Magnetic Effect**: Follows cursor when nearby (20px radius)

### Footer
- **Multi-column**: 4 columns (Services, Company, Resources, Contact)
- **Animated Links**: Underline slide-in effect on hover
- **Social Icons**: Glowing circle backgrounds with brand colors
- **Newsletter**: Inline form with gradient input focus state

---

## Animations

**Key Animation Libraries**: GSAP for complex timelines, Framer Motion for React components

### Hero Transitions
- **Theme Change**: Outgoing theme slides left with fade, incoming slides from right with scale
- **Text Reveal**: Stagger animation for headlines (each word appears sequentially)
- **Background Morph**: Gradient positions shift between themes

### Scroll Animations
- **Reveal on Scroll**: Elements fade-in and slide-up when entering viewport (threshold: 0.2)
- **Progress Indicators**: Horizontal line grows as user scrolls
- **Parallax Backgrounds**: Move at 0.5x scroll speed

### Micro-interactions
- **Button Hover**: Scale 1.05, glow intensity increase, subtle rotation (2deg)
- **Card Hover**: 3D tilt, shadow expansion, border glow pulse
- **Link Hover**: Underline slides from left to right (200ms)

**Animation Timing**: Use 300-600ms for most transitions, 1200ms for hero theme changes

---

## Images

### Hero Backgrounds (10 Themes)
Use abstract tech imagery for each theme:
1. Neural network visualization with glowing nodes
2. Film production equipment/studio setup
3. Smartphone with app interface mockup
4. Modern website on laptop display
5. Cloud server infrastructure visualization
6. Blockchain node network diagram
7. Analytics dashboard with colorful charts
8. IoT device ecosystem illustration
9. Cybersecurity lock/shield imagery
10. Futuristic innovation abstract shapes

**Placement**: Full-width background with gradient overlay (purple/black 60% opacity)

### Service Section Icons
Replace with visual representations:
- Automation: Gear/cog animations
- Video: Camera/film reel
- Apps: Mobile devices
- Websites: Browser windows

**Treatment**: Use as background elements with 10% opacity, large scale (400px+)

---

## Special Effects Stack

### VFX Elements
- **Glitch Effect**: Apply sparingly to headings on theme transitions
- **Holographic Shader**: Iridescent gradient overlay on cards
- **Neon Outlines**: SVG paths with animated stroke-dasharray
- **Data Visualization**: Animated chart/graph elements showing "processing"
- **Scanlines**: Horizontal lines moving top to bottom (5s loop)

### Performance Considerations
- Debounce mouse events (16ms)
- Use CSS transforms for animations (GPU accelerated)
- Lazy load Three.js effects below the fold
- Reduce particle count on mobile (<50 particles)

---

This design creates an immersive, cinematic technology showcase that balances cutting-edge VFX with professional credibility, ensuring users are engaged while understanding your services clearly.