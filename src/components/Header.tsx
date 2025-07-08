import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';

export const Header = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md shadow-card border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              GLitch Studio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('templates')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Templates
            </button>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Pricing
            </button>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10"
            >
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" size="sm">
                Contact
              </Button>
              <Button size="sm" className="bg-gradient-primary hover:shadow-primary">
                Start Project
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border animate-slide-down">
            <div className="container mx-auto px-6 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('templates')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Templates
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
              >
                Pricing
              </button>
              <div className="flex space-x-3 pt-4 border-t border-border">
                <Button variant="outline" size="sm" className="flex-1">
                  Contact
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-primary hover:shadow-primary">
                  Start Project
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};