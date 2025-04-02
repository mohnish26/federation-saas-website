
import React from 'react';
import { Check, Star, Globe, Shield } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Global Projects', value: '250+' },
    { label: 'Team Members', value: '100+' },
    { label: 'Client Satisfaction', value: '99%' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-aries-blue relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-aries-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-aries-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-aries-purple mb-3">ABOUT US</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pioneering the <span className="gradient-text">Future</span>
          </h2>
          <p className="text-aries-light/70 max-w-2xl mx-auto text-lg">
            We're building revolutionary solutions that transcend boundaries, connecting the cosmos with innovative technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <p className="text-aries-light/80 leading-relaxed">
              Founded in 2013, Aries has been at the forefront of cosmic innovation, delivering cutting-edge solutions that bridge the gap between humanity and the infinite possibilities of space.
            </p>
            
            <div className="space-y-4">
              {[
                'Pioneering technological advancement in space exploration',
                'Building sustainable cosmic infrastructure for future generations',
                'Connecting galaxies through revolutionary communication systems',
                'Developing AI-powered celestial navigation tools'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 h-6 w-6 rounded-full bg-gradient-to-r from-aries-purple to-aries-pink flex items-center justify-center">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-aries-light/80">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-sm text-aries-gray">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative order-1 md:order-2 animate-float">
            <div className="absolute top-1/3 left-1/3 -z-10 w-32 h-32 bg-aries-purple/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/3 -z-10 w-32 h-32 bg-aries-pink/30 rounded-full blur-3xl"></div>
            
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-aries-purple/20 to-aries-pink/20 p-1 glass">
              <div className="h-full w-full rounded-full bg-card-gradient glass flex items-center justify-center overflow-hidden">
                <div className="relative w-3/4 h-3/4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute w-full h-full rounded-full animate-spin-slow" style={{ animationDuration: '30s' }}>
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className="absolute h-2 w-2"
                          style={{
                            left: '50%',
                            top: '10%',
                            transform: `rotate(${i * 72}deg) translateY(-120px) rotate(${i * 72}deg)`,
                          }}
                        >
                          <Star className="h-5 w-5 text-aries-light/60 animate-pulse-slow" style={{ animationDelay: `${i * 0.5}s` }} />
                        </div>
                      ))}
                    </div>
                    
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-aries-purple to-aries-pink opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Globe className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
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
