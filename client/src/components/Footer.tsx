import { Mail, Phone, MapPin } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX, SiInstagram, SiFacebook } from 'react-icons/si';
import { CriartLogo } from '@/components/ui/criart-logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <div className="flex items-center" data-testid="logo-footer">
              <CriartLogo size="sm" animated={false} />
            </div>
            <p className="text-muted-foreground" data-testid="text-footer-description">
              Transformando ideias em soluções tecnológicas inovadoras com os melhores efeitos visuais e funcionalidades.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-automacoes">
                  Automações
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-video">
                  Video Making
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-apps">
                  Criação de Apps
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-sites">
                  Sites Profissionais
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-about">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-contact">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-footer-blog">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground" data-testid="text-footer-email">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">criartimp@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground" data-testid="text-footer-phone">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+55 (61) 99515-7781</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground" data-testid="text-footer-address">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">Brasília DF, Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Criart. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/profile.php?id=61571183361733" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
              data-testid="link-social-facebook"
            >
              <SiFacebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/criart_tech/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
              data-testid="link-social-instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
