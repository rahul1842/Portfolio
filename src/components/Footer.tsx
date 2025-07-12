import { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/50 py-8 px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground mb-2">
          © {new Date().getFullYear()} Rahul. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
          Built with React & Tailwind CSS
        </p>
      </div>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 bg-gradient-primary text-primary-foreground rounded-full shadow-md hover:opacity-90 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </footer>
  );
};

export default Footer;
