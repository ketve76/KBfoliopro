import React, { useState } from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Github, CheckCircle, Loader2, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's build the <br /><span className="text-cyber-secondary">Future Together</span></h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Que vous ayez besoin d'un audit de smart contract, d'une solution Big Data sur mesure ou d'un conseil stratégique en IA, je suis prêt à relever le défi.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-primary group-hover:text-black transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-gray-400 text-sm">contact@kevinbrunez.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-primary group-hover:text-black transition-colors duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Phone</h4>
                  <p className="text-gray-400 text-sm">+1 (514) 000-0000</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-primary group-hover:text-black transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Location</h4>
                  <p className="text-gray-400 text-sm">Montréal, Québec (Remote Available)</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://www.linkedin.com/in/kevin-brunez-434121263/" target="_blank" rel="noreferrer" className="p-3 border border-white/10 rounded-lg hover:border-cyber-primary hover:text-cyber-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-3 border border-white/10 rounded-lg hover:border-cyber-primary hover:text-cyber-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 border border-white/10 rounded-lg hover:border-cyber-primary hover:text-cyber-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#111] p-8 rounded-2xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            
            {/* Success Overlay */}
            {formStatus === 'success' && (
              <div className="absolute inset-0 z-20 bg-[#111] flex flex-col items-center justify-center animate-in fade-in duration-300">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Message Envoyé !</h3>
                <p className="text-gray-400 mt-2">Je vous répondrai sous 24h.</p>
              </div>
            )}

            <h3 className="text-2xl font-bold mb-6">Envoyer un message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase">Nom</label>
                  <input required type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-500 uppercase">Email</label>
                  <input required type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">Sujet</label>
                <select className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option>Collaboration Project</option>
                  <option>Freelance Mission</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-500 uppercase">Message</label>
                <textarea required rows={4} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-cyber-primary to-cyan-600 text-black font-bold text-lg rounded-lg hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  <>
                    <Loader2 className="animate-spin" /> Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer <Send size={18} className="ml-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;