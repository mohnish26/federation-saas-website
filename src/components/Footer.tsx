
import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-aries-dark py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-aries-purple to-aries-pink"></div>
              <span className="text-xl font-bold text-white">Aries</span>
            </div>
            <p className="text-aries-light/70 max-w-md">
              Pioneering the future of cosmic technology and interplanetary solutions. Expanding humanity's reach among the stars.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Instagram className="h-5 w-5 text-aries-light" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="h-5 w-5 text-aries-light" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="h-5 w-5 text-aries-light" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="h-5 w-5 text-aries-light" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-aries-light/70 hover:text-aries-purple transition-colors">Home</a></li>
              <li><a href="#about" className="text-aries-light/70 hover:text-aries-purple transition-colors">About</a></li>
              <li><a href="#services" className="text-aries-light/70 hover:text-aries-purple transition-colors">Services</a></li>
              <li><a href="#team" className="text-aries-light/70 hover:text-aries-purple transition-colors">Team</a></li>
              <li><a href="#contact" className="text-aries-light/70 hover:text-aries-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-aries-light/70 hover:text-aries-purple transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-aries-light/70 hover:text-aries-purple transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-aries-light/70 hover:text-aries-purple transition-colors">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-aries-light/60">&copy; {new Date().getFullYear()} Aries Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
