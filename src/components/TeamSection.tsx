
import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  delay: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, delay }) => {
  return (
    <div 
      className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:translate-y-[-5px] group animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative mb-6 mx-auto w-40 h-40 rounded-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-aries-purple/40 to-aries-pink/40 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <img 
          src={imageUrl} 
          alt={name}
          className="w-full h-full object-cover" 
        />
      </div>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-aries-gray mb-4">{role}</p>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-aries-light/60 hover:text-aries-purple transition-colors">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href="#" className="text-aries-light/60 hover:text-aries-purple transition-colors">
          <Github className="h-5 w-5" />
        </a>
        <a href="#" className="text-aries-light/60 hover:text-aries-purple transition-colors">
          <Twitter className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Alex Stern",
      role: "Founder & CEO",
      imageUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    },
    {
      name: "Sophia Chen",
      role: "Chief Technology Officer",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Innovation",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      name: "Elise Wong",
      role: "Director of Operations",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-space-gradient relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-aries-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-aries-pink/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-aries-purple mb-3">OUR TEAM</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Cosmic Crew</span>
          </h2>
          <p className="text-aries-light/70 max-w-2xl mx-auto text-lg">
            Brilliant minds working together to push the boundaries of space technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
              delay={0.1 * index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
