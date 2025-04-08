
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 bg-white overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight animate-fade-in-up text-gray-900">
            We Buy, Build and Scale
            <span className="text-[#FF5000] block">Wonderful Software Companies</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Transforming software businesses into market leaders while creating long-term value for all stakeholders.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Button 
              className="bg-gradient-to-r from-[#FF5000] to-[#FF7A38] hover:opacity-90 transition-opacity text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Partner With Us
            </Button>
            <Button 
              variant="outline" 
              className="group border-gray-300 hover:border-gray-500 text-gray-800 text-lg px-8 py-6"
              onClick={scrollToContact}
            >
              Learn More
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" className="text-gray-500 hover:text-gray-800">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
