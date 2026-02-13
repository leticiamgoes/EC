import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useTheme } from '@/components/ThemeProvider';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 dark:bg-chess-black/95 backdrop-blur-sm shadow-md py-2' 
          : 'bg-transparent py-4'
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="bg-chess-black dark:bg-white rounded-full p-1.5">
            <img 
              src="/logo/a742ad90-49ef-42fd-b4b6-64777f9e8af6.png" 
              alt="Logo Estratégia Criminal" 
              className="w-7 h-7"
            />
          </div>
          <span className={cn(
            "font-serif font-bold text-xl",
            isScrolled 
              ? "text-chess-black dark:text-white" 
              : "text-white"
          )}>
            Estratégia Criminal
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a 
            href="#beneficios" 
            className={cn(
              "font-medium transition-colors hover:text-gold-DEFAULT",
              isScrolled ? "text-chess-black dark:text-white" : "text-white"
            )}
          >
            Benefícios
          </a>
          <a 
            href="#depoimentos" 
            className={cn(
              "font-medium transition-colors hover:text-gold-DEFAULT",
              isScrolled ? "text-chess-black dark:text-white" : "text-white"
            )}
          >
            Depoimentos
          </a>
          {/* <a 
            href="#perguntas" 
            className={cn(
              "font-medium transition-colors hover:text-gold-DEFAULT",
              isScrolled ? "text-chess-black dark:text-white" : "text-white"
            )}
          >
            FAQ
          </a>
          <Button 
            className="bg-gold-DEFAULT hover:bg-gold-dark text-chess-black dark:text-white font-medium shadow-md"
            onClick={() => window.location.href = '#comprar'}
          >
            Adquirir Agora
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={cn(
              "rounded-full",
              isScrolled ? "text-chess-black dark:text-white" : "text-white"
            )}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button> */}
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={cn(
              "rounded-full",
              isScrolled ? "text-chess-black dark:text-white" : "text-white"
            )}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className={cn(
              isScrolled ? "text-chess-black dark:text-white" : "text-white"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-chess-black/95 dark:bg-chess-black/98 z-40 pt-20">
          {/* Botão X no canto superior direito */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </Button>
          
          <nav className="container flex flex-col items-center gap-8 py-8">
            <a 
              href="#beneficios" 
              className="text-white text-xl font-medium hover:text-gold-DEFAULT"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefícios
            </a>
            <a 
              href="#depoimentos" 
              className="text-white text-xl font-medium hover:text-gold-DEFAULT"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            {/* <a 
              href="#perguntas" 
              className="text-white text-xl font-medium hover:text-gold-DEFAULT"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button 
              className="bg-gold-DEFAULT hover:bg-gold-dark text-chess-black dark:text-white font-medium w-full max-w-xs mt-4 shadow-md"
              onClick={() => {
                window.location.href = '#comprar';
                setIsMobileMenuOpen(false);
              }}
            >
              Adquirir Agora
            </Button> */}
          </nav>
        </div>
      )}
    </header>
  );
}