
import React from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-aries-blue relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-aries-dark to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-aries-dark to-transparent opacity-50"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#FF5000]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#FF7A38]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-[#FF5000] mb-3">LET'S CONNECT</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get in <span className="text-[#FF5000]">Touch</span>
          </h2>
          <p className="text-aries-light/70 max-w-2xl mx-auto text-lg">
            Ready to explore the possibility of partnership? Reach out to our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="glass rounded-2xl p-8 animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Your Name" className="bg-aries-dark/30 border-aries-light/10 h-12" />
                </div>
                <div>
                  <Input placeholder="Company Name" className="bg-aries-dark/30 border-aries-light/10 h-12" />
                </div>
              </div>
              <div>
                <Input placeholder="Company Website" className="bg-aries-dark/30 border-aries-light/10 h-12" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="Phone Number" className="bg-aries-dark/30 border-aries-light/10 h-12" />
                </div>
                <div>
                  <Input placeholder="Email Address" className="bg-aries-dark/30 border-aries-light/10 h-12" />
                </div>
              </div>
              <div>
                <Textarea placeholder="Project Description" className="bg-aries-dark/30 border-aries-light/10 min-h-[120px]" />
              </div>
              <Button className="w-full bg-gradient-to-r from-[#FF5000] to-[#FF7A38] hover:opacity-90 transition-opacity h-12">
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="space-y-8 animate-slide-in-right">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#FF5000]/20 to-[#FF7A38]/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-aries-light" />
                  </div>
                  <div>
                    <p className="text-aries-gray mb-1">Email</p>
                    <p className="text-aries-light">contact@federationsaas.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#FF5000]/20 to-[#FF7A38]/20 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-aries-light" />
                  </div>
                  <div>
                    <p className="text-aries-gray mb-1">Location</p>
                    <p className="text-aries-light">Federation Headquarters, EMEA</p>
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

export default ContactSection;
