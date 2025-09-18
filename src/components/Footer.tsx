import { Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-muted-foreground">
              © 2025 Jewel Jose. All rights reserved.
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-muted-foreground">Built with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-muted-foreground">using</span>
            <span className="text-primary font-semibold">React</span>
            <span className="text-muted-foreground">&</span>
            <span className="text-accent font-semibold">TailwindCSS</span>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <button
            onClick={scrollToTop}
            className="text-muted-foreground hover:text-primary transition-smooth text-sm"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;