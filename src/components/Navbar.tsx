
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-aries-dark/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-aries-purple to-aries-pink"></div>
          <span className="text-xl font-bold text-white">Aries</span>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-aries-light/80 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <Button className="hidden md:flex bg-gradient-to-r from-aries-purple to-aries-pink hover:opacity-90 transition-opacity">
          Get Started
        </Button>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-aries-dark/95 backdrop-blur-md absolute w-full`}>
        <div className="container mx-auto py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-aries-light/80 hover:text-white transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-gradient-to-r from-aries-purple to-aries-pink hover:opacity-90 transition-opacity w-full">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
