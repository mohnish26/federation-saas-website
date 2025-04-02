
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 bg-space-gradient overflow-hidden"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight animate-fade-in-up">
            The Next Generation
            <span className="gradient-text block">Cosmic Enterprise</span>
          </h1>
          
          <p className="text-lg md:text-xl text-aries-light/80 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Pioneering innovation across the galaxies, delivering cutting-edge solutions for the modern universe.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button className="bg-gradient-to-r from-aries-purple to-aries-pink hover:opacity-90 transition-opacity text-lg px-8 py-6">
              Explore Our Universe
            </Button>
            <Button variant="outline" className="group border-aries-light/30 hover:border-aries-light/60 text-lg px-8 py-6">
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 flex justify-center">
          <div className="relative animate-float">
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-aries-purple/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-aries-pink/20 rounded-full blur-3xl"></div>
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-aries-blue to-aries-dark p-1">
              <div className="w-full h-full rounded-full bg-card-gradient glass flex items-center justify-center">
                <div className="w-2/3 h-2/3 opacity-80">
                  {/* Add an SVG or image here */}
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-aries-purple/30 to-aries-pink/30 animate-pulse-slow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-aries-light/60 hover:text-aries-light">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
