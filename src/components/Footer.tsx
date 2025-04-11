
import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/cd15303b-904e-4870-b7a4-57fd26f45d20.png" 
                alt="Federation Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-600 max-w-md">
              We buy, build, and scale software companies, transforming them into market leaders while creating long-term value for all stakeholders.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/federation-saas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-[#FF5000]" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-gray-600 hover:text-[#FF5000] transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-[#FF5000] transition-colors">About</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-[#FF5000] transition-colors">Partners</a></li>
              <li><a href="#team" className="text-gray-600 hover:text-[#FF5000] transition-colors">Process</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-[#FF5000] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#FF5000] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF5000] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF5000] transition-colors">Cookies Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Federation SaaS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
