
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
    <div className="relative flex flex-col items-center bg-white rounded-xl p-8 shadow-md border border-gray-100">
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-gradient-to-br from-[#FF5000] to-[#FF7A38] flex items-center justify-center text-white font-bold">
        {step}
      </div>
      <div className="h-16 w-16 rounded-full bg-orange-50 flex items-center justify-center mb-6 mt-2">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-center text-gray-900">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
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
    <section id="team" className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-[#FF5000] mb-3">ACQUISITION PROCESS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Swift and <span className="text-[#FF5000]">Friendly</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our acquisition process is transparent and efficient, typically completed within a few weeks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
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
