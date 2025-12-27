import React from 'react';
import { BarChart3, Bot, Blocks, LineChart, Cpu, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: <BarChart3 className="w-8 h-8 text-cyber-primary" />,
    title: "Business Intelligence",
    description: "Transformation de données brutes en leviers décisionnels. Conception de tableaux de bord Power BI interactifs, modélisation de données (DAX/SQL) et storytelling.",
    tags: ["Power BI", "ETL", "SQL", "Data Viz"]
  },
  {
    icon: <Bot className="w-8 h-8 text-purple-500" />,
    title: "Automatisation & IA",
    description: "Optimisation des processus métiers par l'automatisation (n8n, Power Automate) et déploiement d'agents IA pour réduire les tâches répétitives.",
    tags: ["n8n", "Python", "LLMs", "RPA"]
  },
  {
    icon: <Blocks className="w-8 h-8 text-blue-500" />,
    title: "Stratégie Web3 & DeFi",
    description: "Accompagnement sur les marchés décentralisés. Analyse de tokenomics, audit de sécurité (Smart Contracts) et développement d'outils de trading algorithmique.",
    tags: ["Solidity", "DeFi", "Trading Bots", "Audit"]
  }
];

const Services: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="py-20 bg-[#050505] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Domaines d'<span className="text-cyber-primary">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Une approche hybride combinant analyse de données rigoureuse et innovation technologique.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-cyber-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner / Metric */}
        <div className="mt-16 p-1 rounded-2xl bg-gradient-to-r from-cyber-primary/20 via-purple-500/20 to-blue-500/20">
            <div className="bg-black/90 backdrop-blur rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500/10 rounded-full text-green-400">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-lg">Disponible pour missions freelance</h4>
                        <p className="text-gray-400 text-sm">Audit Data, Création de Dashboard ou Automatisation.</p>
                    </div>
                </div>
                <a 
                  href="#contact" 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap cursor-pointer"
                >
                    Discuter d'un projet
                </a>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services;