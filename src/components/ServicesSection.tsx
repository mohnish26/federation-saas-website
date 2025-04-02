
import React from 'react';
import { Rocket, Globe, Shield, Cpu, Zap, Database } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => {
  return (
    <div 
      className="glass rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg animate-fade-in-up" 
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="h-14 w-14 rounded-xl mb-6 bg-gradient-to-br from-aries-purple to-aries-pink flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-aries-light/70">{description}</p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "Space Exploration",
      description: "Pioneering missions that expand our cosmic knowledge and push the boundaries of human reach in the universe.",
      icon: <Rocket className="h-6 w-6 text-white" />,
    },
    {
      title: "Interplanetary Communication",
      description: "Building networks that connect distant worlds, enabling seamless data transfer across the vastness of space.",
      icon: <Globe className="h-6 w-6 text-white" />,
    },
    {
      title: "Cosmic Security",
      description: "Protecting celestial assets with advanced defense systems designed for the unique challenges of space.",
      icon: <Shield className="h-6 w-6 text-white" />,
    },
    {
      title: "Quantum Computing",
      description: "Harnessing the power of quantum mechanics to solve complex problems beyond classical computing capabilities.",
      icon: <Cpu className="h-6 w-6 text-white" />,
    },
    {
      title: "Energy Systems",
      description: "Developing sustainable energy solutions that power spacecraft, stations, and colonies throughout the galaxy.",
      icon: <Zap className="h-6 w-6 text-white" />,
    },
    {
      title: "Data Analytics",
      description: "Processing vast amounts of cosmic data to unlock insights and drive innovation in space technology.",
      icon: <Database className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-aries-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-aries-blue to-transparent opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-aries-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-aries-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-aries-purple mb-3">OUR SERVICES</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Cosmic <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-aries-light/70 max-w-2xl mx-auto text-lg">
            Cutting-edge services designed to advance humanity's reach among the stars.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
