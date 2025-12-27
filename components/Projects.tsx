import React, { useState } from 'react';
import { ExternalLink, Github, Activity, ShoppingBag, PieChart, X, Layers, Sparkles } from 'lucide-react';
import { Project } from '../types';

const myProjects: Project[] = [
  {
    id: 1,
    title: "NeuroTrade Bot",
    category: "AI & Crypto",
    description: "Un bot de trading autonome qui analyse les signaux du marché crypto en temps réel grâce à l'IA.",
    tech: ["Python", "TensorFlow", "Binance API", "Docker"],
    image: "https://picsum.photos/600/400?random=1",
    link: "#",
    featured: true,
    features: [
        "Analyse de sentiment sur Twitter/X et News en temps réel.",
        "Backtesting avancé sur données historiques (2018-2024).",
        "Exécution automatique des ordres via API Binance sécurisée.",
        "Gestion du risque dynamique (Stop-loss & Take-profit adaptatifs)."
    ]
  },
  {
    id: 2,
    title: "CommunityPulse",
    category: "Web & Community",
    description: "Plateforme communautaire de partage de bons plans type Dealabs. Système de vote et réputation.",
    tech: ["Next.js", "Firebase", "Tailwind", "Node.js"],
    image: "https://picsum.photos/600/400?random=2",
    link: "#",
    featured: false,
    features: [
        "Système de vote chaud/froid avec algorithme de tendance.",
        "Niveaux d'utilisateurs et badges de réputation gamifiés.",
        "Notifications push temps réel pour les alertes mots-clés.",
        "Interface responsive optimisée Mobile-First."
    ]
  },
  {
    id: 3,
    title: "OmniFinance AI",
    category: "Finance & AI",
    description: "Application ultime de tracking financier personnel. Stocks, Cash, Flux, Dépenses alimenté par l'IA.",
    tech: ["React Native", "FastAPI", "OpenAI API", "Plaid"],
    image: "https://picsum.photos/600/400?random=3",
    link: "#",
    featured: true,
    features: [
        "Synchronisation bancaire automatique (Flux & Soldes).",
        "Tracking de portefeuille boursier et crypto multi-exchange.",
        "Coach IA : Analyse des habitudes de dépenses et conseils d'épargne.",
        "Prédiction de cash-flow sur 30 jours."
    ]
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-black to-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 mb-6">
            Projets <span className="text-cyber-primary">Innovants</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Une sélection de mes travaux les plus récents. De l'analyse financière algorithmique aux plateformes communautaires à fort trafic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project) => (
            <div 
                key={project.id} 
                onClick={() => setSelectedProject(project)}
                className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover:border-cyber-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] cursor-pointer"
            >
              
              {/* Image Overlay */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur rounded-full p-2 border border-white/10">
                    {project.id === 1 ? <Activity className="text-cyber-primary w-5 h-5" /> : 
                     project.id === 2 ? <ShoppingBag className="text-orange-500 w-5 h-5" /> :
                     <PieChart className="text-green-500 w-5 h-5" />}
                </div>
                <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-cyber-primary text-black px-3 py-1 rounded-full text-xs font-bold">
                    View Details
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-cyber-secondary uppercase tracking-wider">{project.category}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyber-primary transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(tech => (
                    <span key={tech} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 font-mono">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 rounded text-xs text-gray-500 font-mono">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div 
                className="absolute inset-0 bg-black/90 backdrop-blur-md" 
                onClick={() => setSelectedProject(null)}
            ></div>
            <div className="relative bg-[#0a0a0a] border border-cyber-primary/30 rounded-2xl max-w-4xl w-full shadow-[0_0_100px_rgba(112,0,223,0.2)] animate-in fade-in zoom-in duration-300 overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none">
                
                <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-white/50 hover:text-white bg-black/50 p-2 rounded-full z-30 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Image Section */}
                <div className="w-full md:w-1/2 relative h-48 md:h-auto">
                    <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent md:bg-gradient-to-r"></div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-8 overflow-y-auto">
                    <div className="flex items-center gap-2 mb-2">
                         <span className="px-3 py-1 bg-cyber-secondary/20 border border-cyber-secondary/50 rounded-full text-xs text-cyber-secondary font-bold uppercase tracking-wider">
                            {selectedProject.category}
                         </span>
                         {selectedProject.featured && (
                             <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-xs text-yellow-500 font-bold uppercase tracking-wider flex items-center gap-1">
                                <Sparkles size={10} /> Featured
                             </span>
                         )}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.title}</h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                        {selectedProject.description}
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                <Activity size={18} className="text-cyber-primary" /> Key Features
                            </h4>
                            <ul className="space-y-2">
                                {selectedProject.features?.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-secondary shrink-0"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                <Layers size={18} className="text-cyber-primary" /> Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map(t => (
                                    <span key={t} className="px-3 py-1 bg-[#1a1a1a] border border-white/10 rounded text-sm text-gray-300 font-mono">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 flex gap-4 border-t border-white/10">
                            <a href={selectedProject.link} className="flex-1 py-3 bg-cyber-primary text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2">
                                <ExternalLink size={18} /> View Project
                            </a>
                            <a href={selectedProject.link} className="px-4 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-colors text-white">
                                <Github size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Projects;