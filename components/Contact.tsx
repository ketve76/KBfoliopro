import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, CheckCircle, Loader2, Send, AlertCircle } from 'lucide-react';

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&');

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', subject: 'Collaboration Project', message: '', consent: false, bot: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) {
      setFormStatus('error');
      return;
    }
    setFormStatus('sending');

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          'bot-field': form.bot,
        }),
      });

      if (!res.ok) throw new Error('Submission failed');

      setFormStatus('success');
      setForm({ name: '', email: '', subject: 'Collaboration Project', message: '', consent: false, bot: '' });
      setTimeout(() => setFormStatus('idle'), 4000);
    } catch (err) {
      console.error(err);
      setFormStatus('error');
    }
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
              <a href="mailto:contact@kevinbrunez.dev" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-primary group-hover:text-black transition-colors duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Email</h4>
                  <p className="text-gray-400 text-sm">contact@kevinbrunez.dev</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyber-primary group-hover:text-black transition-colors duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-white">Localisation</h4>
                  <p className="text-gray-400 text-sm">Montréal, Québec · Remote disponible</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              <a href="https://www.linkedin.com/in/kevin-brunez-434121263/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="p-3 border border-white/10 rounded-lg hover:border-cyber-primary hover:text-cyber-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/ketve76" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="p-3 border border-white/10 rounded-lg hover:border-cyber-primary hover:text-cyber-primary transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#111] p-8 rounded-2xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">

            {formStatus === 'success' && (
              <div className="absolute inset-0 z-20 bg-[#111] flex flex-col items-center justify-center animate-in fade-in duration-300">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4 animate-bounce" />
                <h3 className="text-2xl font-bold text-white">Message Envoyé !</h3>
                <p className="text-gray-400 mt-2">Je vous répondrai sous 48h ouvrables.</p>
              </div>
            )}

            <h3 className="text-2xl font-bold mb-6">Envoyer un message</h3>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Ne pas remplir : <input name="bot-field" value={form.bot} onChange={(e) => setForm({ ...form, bot: e.target.value })} /></label>
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-gray-500 uppercase">Nom</label>
                  <input id="name" name="name" required type="text" value={form.name} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-gray-500 uppercase">Email</label>
                  <input id="email" name="email" required type="email" value={form.email} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-gray-500 uppercase">Sujet</label>
                <select id="subject" name="subject" value={form.subject} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors appearance-none cursor-pointer">
                  <option>Collaboration Project</option>
                  <option>Freelance Mission</option>
                  <option>Consulting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-gray-500 uppercase">Message</label>
                <textarea id="message" name="message" required rows={4} value={form.message} onChange={handleChange} className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-cyber-primary focus:outline-none transition-colors" placeholder="Tell me about your project..."></textarea>
              </div>

              <div className="flex items-start gap-2">
                <input id="consent" name="consent" type="checkbox" checked={form.consent} onChange={handleChange} className="mt-1" />
                <label htmlFor="consent" className="text-xs text-gray-400 leading-relaxed">
                  J'accepte que mes données (nom, email, message) soient transmises à Kevin Brunez pour répondre à ma demande, et conservées 12 mois maximum. Voir la <a href="#privacy" className="text-cyber-primary underline">politique de confidentialité</a>.
                </label>
              </div>

              {formStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-xs">
                  <AlertCircle size={14} />
                  <span>{form.consent ? "Erreur d'envoi. Réessayez plus tard ou écrivez à contact@kevinbrunez.dev." : "Veuillez accepter la politique de confidentialité."}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full py-4 bg-gradient-to-r from-cyber-primary to-cyan-600 text-black font-bold text-lg rounded-lg hover:opacity-90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formStatus === 'sending' ? (
                  <><Loader2 className="animate-spin" /> Envoi en cours...</>
                ) : (
                  <>Envoyer <Send size={18} className="ml-1" /></>
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
