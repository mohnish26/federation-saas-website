
import React from 'react';
import { PhoneCall, FileText, ClipboardCheck, Banknote } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, step }) => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute top-0 left-1/2 h-full w-1 bg-gradient-to-b from-[#FF5000] to-[#FF7A38] -translate-x-1/2 z-0"></div>
      <div className="relative z-10 h-16 w-16 rounded-full bg-gradient-to-br from-[#FF5000] to-[#FF7A38] flex items-center justify-center mb-4">
        <div className="h-14 w-14 rounded-full bg-aries-dark flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="absolute top-6 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FF5000] text-white h-8 w-8 rounded-full flex items-center justify-center font-bold">
        {step}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-aries-light/70 text-center max-w-xs">{description}</p>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const steps = [
    {
      icon: <PhoneCall className="h-7 w-7 text-[#FF7A38]" />,
      title: "Introductory Call",
      description: "We discuss your company's potential, avenues for growth, and how we could support you.",
    },
    {
      icon: <FileText className="h-7 w-7 text-[#FF7A38]" />,
      title: "Indication of Interest",
      description: "With limited data, we provide an initial valuation range and walk you through the envisioned deal structure.",
    },
    {
      icon: <ClipboardCheck className="h-7 w-7 text-[#FF7A38]" />,
      title: "Binding Offer",
      description: "After due diligence (commercial, financial, legal, and technical), we provide our final binding offer.",
    },
    {
      icon: <Banknote className="h-7 w-7 text-[#FF7A38]" />,
      title: "Transaction Closing",
      description: "Once the transaction is finalized and documents are signed, you can expect funds in your bank account the next day.",
    },
  ];

  return (
    <section id="team" className="py-20 md:py-32 bg-aries-blue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-aries-dark to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-aries-dark to-transparent opacity-50"></div>
      <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-[#FF5000]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-[#FF7A38]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-[#FF5000] mb-3">ACQUISITION PROCESS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Swift and <span className="text-[#FF5000]">Friendly</span>
          </h2>
          <p className="text-aries-light/70 max-w-2xl mx-auto text-lg">
            Our acquisition process is transparent and efficient, typically completed within a few weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
