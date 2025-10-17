import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CriartLogo } from '@/components/ui/criart-logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center" data-testid="logo-container">
            <CriartLogo size="sm" animated={true} />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-home"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-about"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-services"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
              data-testid="link-contact"
            >
              Contato
            </button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61571183361733', '_blank')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-facebook"
            >
              <Facebook className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://www.instagram.com/criart_tech/', '_blank')}
              className="text-foreground hover:text-primary transition-colors"
              data-testid="button-instagram"
            >
              <Instagram className="w-5 h-5" />
            </Button>
            <Button 
              onClick={() => {
                const whatsappNumber = '5561995157781';
                const message = 'Olá! Gostaria de começar um projeto com a Criart. Podemos conversar?';
                const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
              className="bg-gradient-to-r from-primary to-chart-2 font-semibold"
              data-testid="button-cta-nav"
            >
              Começar Agora
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors font-medium"
              data-testid="link-home-mobile"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors font-medium"
              data-testid="link-about-mobile"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors font-medium"
              data-testid="link-services-mobile"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors font-medium"
              data-testid="link-portfolio-mobile"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors font-medium"
              data-testid="link-contact-mobile"
            >
              Contato
            </button>
            <Button
              variant="outline"
              onClick={() => {
                window.open('https://www.facebook.com/profile.php?id=61571183361733', '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2"
              data-testid="button-facebook-mobile"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                window.open('https://www.instagram.com/criart_tech/', '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2"
              data-testid="button-instagram-mobile"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </Button>
            <Button 
              onClick={() => {
                const whatsappNumber = '5561995157781';
                const message = 'Olá! Gostaria de começar um projeto com a Criart. Podemos conversar?';
                const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
                setIsMobileMenuOpen(false);
              }}
              className="w-full bg-gradient-to-r from-primary to-chart-2 font-semibold"
              data-testid="button-cta-nav-mobile"
            >
              Começar Agora
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
