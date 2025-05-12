
import React, { useState } from 'react';
import { Send, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // This is a basic implementation to simulate form submission
      // In a real implementation, you would use a backend API or service
      console.log('Sending form data to isaac@federationsaas.com:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "We've received your message and will get back to you soon.",
      });
      
      // Clear form
      setFormData({
        name: '',
        company: '',
        website: '',
        phone: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <p className="text-[#FF5000] mb-3">LET'S CONNECT</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Get in <span className="text-[#FF5000]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Ready to explore the possibility of partnership? Reach out to our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">Send us a message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="bg-gray-50 border-gray-200 h-12" 
                  />
                </div>
                <div>
                  <Input 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name" 
                    className="bg-gray-50 border-gray-200 h-12" 
                  />
                </div>
              </div>
              <div>
                <Input 
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Company Website" 
                  className="bg-gray-50 border-gray-200 h-12" 
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number" 
                    className="bg-gray-50 border-gray-200 h-12" 
                  />
                </div>
                <div>
                  <Input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address" 
                    className="bg-gray-50 border-gray-200 h-12" 
                  />
                </div>
              </div>
              <div>
                <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Project Description" 
                  className="bg-gray-50 border-gray-200 min-h-[120px]" 
                />
              </div>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#FF5000] to-[#FF7A38] hover:opacity-90 transition-opacity h-12"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          <div className="space-y-8 animate-slide-in-right">
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-[#FF5000]" />
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Email</p>
                    <p className="text-gray-800">isaac@federationsaas.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-lg bg-orange-50 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-[#FF5000]" />
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1">Location</p>
                    <p className="text-gray-800">EMEA</p>
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
