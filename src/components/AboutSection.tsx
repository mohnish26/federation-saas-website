
import React from 'react';
import { Check, Monitor, Brain, LineChart, Building2, CreditCard } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Target Revenue by 2030', value: '€150M' },
    { label: 'Regions Covered', value: 'EMEA' },
  ];

  const valuePropositions = [
    { text: 'Digital B2B Software Sales Engine', icon: <Monitor className="h-5 w-5 text-[#FF5000]" /> },
    { text: 'AI-Augmentation Operational Playbook', icon: <Brain className="h-5 w-5 text-[#FF5000]" /> },
    { text: 'Revenue Synergies', icon: <LineChart className="h-5 w-5 text-[#FF5000]" /> },
    { text: 'Centralized Operations', icon: <Building2 className="h-5 w-5 text-[#FF5000]" /> },
    { text: 'Growth Capital', icon: <CreditCard className="h-5 w-5 text-[#FF5000]" /> }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-[#FF5000] mb-3">OUR VISION</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Building and Growing <span className="text-[#FF5000]">Together</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <p className="text-gray-600 leading-relaxed text-lg">
              At Federation SaaS, we are not just an aggregator; we are building a unified ecosystem of SaaS solutions. Our goal is to become the premier permanent home for software businesses who want to preserve their culture, safeguard their identity, and continue building their legacy.
            </p>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">What We Offer</h3>
              {valuePropositions.map((item, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="mr-3 h-8 w-8 rounded-full bg-orange-50 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-gray-800 font-medium text-xl flex-1 text-center">{item.text}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <p className="text-2xl md:text-3xl font-bold text-[#FF5000]">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 md:order-2 animate-float">
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-full bg-white p-1 shadow-lg border border-gray-100">
              <div className="h-full w-full rounded-full bg-white flex items-center justify-center overflow-hidden shadow-inner">
                <div className="text-center p-8">
                  <h3 className="text-3xl font-bold mb-5 text-gray-900">Our Goal</h3>
                  <p className="text-gray-700 text-xl">To become the premier permanent home for software businesses who want to preserve their culture, safeguard their identity, and continue building their legacy.</p>
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
