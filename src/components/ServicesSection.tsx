
import React from 'react';
import { Building, Globe, Shield, BarChart4, TrendingUp, Euro } from 'lucide-react';

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
      <div className="h-14 w-14 rounded-xl mb-6 bg-gradient-to-br from-[#FF5000] to-[#FF7A38] flex items-center justify-center">
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
      title: "EMEA Focused",
      description: "We partner with software companies based in Europe, Middle East, and Africa.",
      icon: <Globe className="h-6 w-6 text-white" />,
    },
    {
      title: "Founder-Owned",
      description: "We work with founder-owned or privately held software businesses looking for their next chapter.",
      icon: <Building className="h-6 w-6 text-white" />,
    },
    {
      title: "Mission-Critical Solutions",
      description: "We focus on vertical or horizontal mission-critical software solutions with loyal customers.",
      icon: <Shield className="h-6 w-6 text-white" />,
    },
    {
      title: "Revenue Scale",
      description: "Companies with revenue between €1M and €20M that are ready to scale to the next level.",
      icon: <BarChart4 className="h-6 w-6 text-white" />,
    },
    {
      title: "Growth Potential",
      description: "Businesses with stable or growing revenue and high gross margins.",
      icon: <TrendingUp className="h-6 w-6 text-white" />,
    },
    {
      title: "Profitable Operations",
      description: "Operations with an EBITDA between €500K and €5M demonstrating business viability.",
      icon: <Euro className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-aries-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-aries-blue to-transparent opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#FF5000]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-[#FF7A38]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-[#FF5000] mb-3">BUSINESSES WE LOVE</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our Ideal <span className="text-[#FF5000]">Partners</span>
          </h2>
          <p className="text-aries-light/70 max-w-2xl mx-auto text-lg">
            We focus on partnering with exceptional SMBs that align with our vision of delivering mission-critical software solutions.
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
