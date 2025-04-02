
import React from 'react';
import { Check } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Target Revenue by 2030', value: '€150M' },
    { label: 'Software Companies', value: '10+' },
    { label: 'Regions Covered', value: 'EMEA' },
    { label: 'Success Rate', value: '95%' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-aries-blue relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#FF5000]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#FF7A38]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-[#FF5000] mb-3">OUR VISION</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Building and Growing <span className="text-[#FF5000]">Together</span>
          </h2>
          <p className="text-aries-light/70 max-w-2xl mx-auto text-lg">
            We acquire, build, and scale software companies, transforming them into market leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <p className="text-aries-light/80 leading-relaxed">
              At Federation SaaS, we are not just an aggregator; we are building a unified ecosystem of SaaS solutions. Our goal is to become the premier permanent home for software businesses who want to preserve their culture, safeguard their identity, and continue building their legacy.
            </p>
            
            <div className="space-y-4">
              {[
                'Digital B2B Software Sales Engine',
                'AI-Augmentation Operational Playbook',
                'Revenue Synergies',
                'Centralized Operations',
                'Growth Capital'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 h-6 w-6 rounded-full bg-gradient-to-r from-[#FF5000] to-[#FF7A38] flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-aries-light/80">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-[#FF5000]">{stat.value}</p>
                  <p className="text-sm text-aries-gray">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 md:order-2 animate-float">
            <div className="absolute top-1/3 left-1/3 -z-10 w-32 h-32 bg-[#FF5000]/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 -z-10 w-32 h-32 bg-[#FF7A38]/30 rounded-full blur-3xl"></div>
            
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-[#FF5000]/20 to-[#FF7A38]/20 p-1 glass">
              <div className="h-full w-full rounded-full bg-card-gradient glass flex items-center justify-center overflow-hidden">
                <div className="text-center p-10">
                  <h3 className="text-2xl font-bold mb-4">Our Goal</h3>
                  <p className="text-aries-light/90">To become the premier permanent home for software businesses who want to preserve their culture, safeguard their identity, and continue building their legacy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
