import { useState, useEffect, useRef } from 'react';
import { useAnimations } from '@/hooks/useAnimations';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

interface ContactForm {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const { observe } = useAnimations();
  const contactRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    projectType: 'WEB.APPLICATION',
    message: ''
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactForm) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "TRANSMISSION.SUCCESS",
        description: "Message transmitted successfully to the cosmic network!",
        className: "bg-slate-800 border-green-400 text-green-400"
      });
      setFormData({
        name: '',
        email: '',
        projectType: 'WEB.APPLICATION',
        message: ''
      });
    },
    onError: (error) => {
      toast({
        title: "TRANSMISSION.ERROR",
        description: "Failed to transmit message. Please try again.",
        variant: "destructive",
        className: "bg-slate-800 border-red-400 text-red-400"
      });
    }
  });

  useEffect(() => {
    if (contactRef.current) {
      observe(contactRef.current);
    }
  }, [observe]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const communicationChannels = [
    {
      icon: "fas fa-envelope",
      title: "EMAIL.PROTOCOL",
      value: "alex@spacecosmos.dev",
      color: "rose",
      href: "mailto:alex@spacecosmos.dev"
    },
    {
      icon: "fab fa-linkedin",
      title: "LINKEDIN.NET",
      value: "/in/alexcosmos",
      color: "green",
      href: "https://linkedin.com/in/alexcosmos"
    },
    {
      icon: "fab fa-github",
      title: "GITHUB.REPO",
      value: "github.com/alexcosmos",
      color: "cyan",
      href: "https://github.com/alexcosmos"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={contactRef}
      className="py-20 bg-slate-800/50 relative"
      data-animation="stagger"
      data-selector=".contact-element"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-cyan-400">CONTACT.PROTOCOL</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-green-400 mx-auto"></div>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Ready to launch your next project into orbit? Send a transmission through the cosmic network.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-slate-800/20 border border-cyan-400/30 p-6 backdrop-blur-sm contact-element opacity-0">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">COMMUNICATION.CHANNELS</h3>
              
              <div className="space-y-4">
                {communicationChannels.map((channel, index) => (
                  <a
                    key={index}
                    href={channel.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-3 border border-${channel.color}-400/30 hover:border-${channel.color}-400 hover:bg-${channel.color}-400/10 transition-all duration-300 cursor-pointer block`}
                  >
                    <div className={`w-12 h-12 bg-${channel.color}-400/20 border border-${channel.color}-400/50 flex items-center justify-center text-${channel.color}-400`}>
                      <i className={channel.icon}></i>
                    </div>
                    <div>
                      <div className={`font-bold text-${channel.color}-400`}>{channel.title}</div>
                      <div className="text-slate-400 text-sm">{channel.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-800/20 border border-rose-400/30 p-6 backdrop-blur-sm contact-element opacity-0">
              <h3 className="text-2xl font-bold text-rose-400 mb-4">MISSION.STATUS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">AVAILABILITY:</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-bold">ACTIVE</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">RESPONSE.TIME:</span>
                  <span className="text-cyan-400">< 24.HOURS</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">LOCATION:</span>
                  <span className="text-rose-400">MARS.GMT+2</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/20 border border-green-400/30 p-8 backdrop-blur-sm relative overflow-hidden contact-element opacity-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-cyan-400 to-rose-400"></div>
            
            <h3 className="text-2xl font-bold text-green-400 mb-6">TRANSMISSION.FORM</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">NAME.ID</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900/50 border border-cyan-400/30 focus:border-cyan-400 px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-300" 
                    placeholder="ENTER.NAME" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-400 mb-2">EMAIL.ADDRESS</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-slate-900/50 border border-cyan-400/30 focus:border-cyan-400 px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-300" 
                    placeholder="ENTER.EMAIL" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">PROJECT.TYPE</label>
                <select 
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full bg-slate-900/50 border border-rose-400/30 focus:border-rose-400 px-4 py-3 text-slate-300 focus:outline-none transition-all duration-300"
                >
                  <option value="WEB.APPLICATION">WEB.APPLICATION</option>
                  <option value="MOBILE.APP">MOBILE.APP</option>
                  <option value="E-COMMERCE">E-COMMERCE</option>
                  <option value="API.DEVELOPMENT">API.DEVELOPMENT</option>
                  <option value="CONSULTATION">CONSULTATION</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-400 mb-2">MESSAGE.CONTENT</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full bg-slate-900/50 border border-green-400/30 focus:border-green-400 px-4 py-3 text-slate-300 placeholder-slate-500 focus:outline-none transition-all duration-300 resize-none" 
                  placeholder="DESCRIBE.YOUR.PROJECT..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full py-4 bg-gradient-to-r from-cyan-400 to-green-400 text-slate-900 font-bold hover:from-green-400 hover:to-cyan-400 transition-all duration-300 relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {contactMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>TRANSMITTING...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>TRANSMIT.MESSAGE
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
