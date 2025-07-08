import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Build Your Vision with{' '}
              <span className="bg-gradient-to-r from-primary-glow to-primary-light bg-clip-text text-transparent">
                Stunning Web Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Freelance Web Development for Professional Document Platforms
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-primary hover:shadow-primary text-lg px-8 py-6 rounded-2xl group transition-all duration-300 hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('templates')}
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm text-lg px-8 py-6 rounded-2xl group transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Explore Templates
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">50+</div>
                <div className="text-white/70 text-sm md:text-base">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">100%</div>
                <div className="text-white/70 text-sm md:text-base">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
                <div className="text-white/70 text-sm md:text-base">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};