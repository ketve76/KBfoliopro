import React, { useState } from 'react';
import { ExternalLink, Github, Activity, ShoppingBag, PieChart, X, Layers, Sparkles, Image as ImageIcon, Lock, Construction } from 'lucide-react';
import { Project } from '../types';

const myProjects: Project[] = [
  {
    id: 1,
    title: "Crypto Signal",
    category: "AI & Trading Tool",
    description: "Outil complet d'analyse de marché global et crypto développé en React TypeScript. L'IA analyse les métriques pour proposer des trades sur contrats perpétuels et spot.",
    tech: ["React", "TypeScript", "Python (AI)", "Machine Learning"],
    // Main thumbnail - Using raw GitHub URL
    image: "https://github.com/ketve76/KBfoliopro/blob/main/globalanalysis.PNG?raw=true", 
    // Gallery images - Using raw GitHub URLs
    images: [
        "https://github.com/ketve76/KBfoliopro/blob/main/globalanalysis.PNG?raw=true",
        "https://github.com/ketve76/KBfoliopro/blob/main/TokkenAnalysis1.PNG?raw=true",
        "https://github.com/ketve76/KBfoliopro/blob/main/TokkenAnalysis2.PNG?raw=true",
        "https://github.com/ketve76/KBfoliopro/blob/main/TokkenAnalysis3.PNG?raw=true"
    ],
    link: "#",
    featured: true,
    features: [
        "Signaux de Trading IA : Propositions automatiques en Scalp, Intraday, Swing, Long Hold et Spot.",
        "Analyse Globale & Métriques : Agrégation de données de marché en temps réel.",
        "Machine Learning (Roadmap) : Entraînement sur historique de trades pour affiner les prédictions.",
        "Paper Trading & Backtesting : Module de test avec historique complet pour valider les stratégies sans risque."
    ]
  },
  {
    id: 2,
    title: "CommunityPulse",
    category: "Web & Community",
    description: "Plateforme communautaire de partage de bons plans type Dealabs. Système de vote et réputation.",
    tech: ["Next.js", "Firebase", "Tailwind", "Node.js"],
    image: "COMING_SOON", // Placeholder flag
    images: [], 
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
    image: "COMING_SOON", // Placeholder flag
    images: [],
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
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openProject = (project: Project) => {
      setSelectedProject(project);
      setActiveImage(project.image);
  };

  const closeProject = () => {
      setSelectedProject(null);
      setActiveImage(null);
  };

  // Helper component for the "Coming Soon" visual to ensure consistency
  const ProjectVisual = ({ image, title, isHovered = false }: { image: string, title: string, isHovered?: boolean }) => {
      if (image === "COMING_SOON") {
          return (
            <div className={`w-full h-full bg-[#080808] flex flex-col items-center justify-center relative overflow-hidden transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}>
                {/* Tech Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* Central Icon */}
                <div className="relative z-10 flex flex-col items-center gap-4 opacity-60">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] flex items-center justify-center">
                        <Lock className="w-8 h-8 text-gray-500" />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <span className="font-mono text-sm font-bold text-gray-500 tracking-[0.2em] uppercase">Confidential</span>
                        <span className="text-[10px] text-gray-700 font-mono">Screenshots Coming Soon</span>
                    </div>
                </div>
            </div>
          );
      }
      return (
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transform transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      );
  };

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
                onClick={() => openProject(project)}
                className="group relative rounded-2xl overflow-hidden bg-[#111] border border-white/5 hover:border-cyber-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] cursor-pointer"
            >
              
              {/* Image Overlay */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                
                <ProjectVisual image={project.image} title={project.title} isHovered={true} />

                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur rounded-full p-2 border border-white/10">
                    {project.id === 1 ? <Activity className="text-cyber-primary w-5 h-5" /> : 
                     project.id === 2 ? <ShoppingBag className="text-orange-500 w-5 h-5" /> :
                     <PieChart className="text-green-500 w-5 h-5" />}
                </div>
                
                {/* Multi-image indicator */}
                {project.images && project.images.length > 1 && (
                    <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur px-2 py-1 rounded-md text-xs text-white flex items-center gap-1 border border-white/10">
                        <ImageIcon size={12} /> {project.images.length}
                    </div>
                )}

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
                onClick={closeProject}
            ></div>
            <div className="relative bg-[#0a0a0a] border border-cyber-primary/30 rounded-2xl max-w-6xl w-full shadow-[0_0_100px_rgba(112,0,223,0.2)] animate-in fade-in zoom-in duration-300 overflow-hidden flex flex-col md:flex-row max-h-[95vh] md:max-h-[90vh]">
                
                <button 
                    onClick={closeProject}
                    className="absolute top-4 right-4 text-white/70 hover:text-white bg-black/60 p-2 rounded-full z-50 transition-colors border border-white/10"
                >
                    <X size={24} />
                </button>

                {/* Left Side: Image Gallery */}
                <div className="w-full md:w-3/5 bg-black/50 flex flex-col relative h-[45vh] md:h-auto border-r border-white/5">
                    {/* Main Active Image */}
                    <div className="flex-1 relative overflow-hidden flex items-center justify-center bg-black/80">
                         {/* We reuse the visual logic but without hover scale effects for the static modal view */}
                         <div className="w-full h-full p-0 md:p-4">
                            {/* If it's a real image, we want the object-contain behavior for modal, 
                                but if it's the "Coming Soon" block, we want it to fill properly */}
                            {activeImage === "COMING_SOON" || selectedProject.image === "COMING_SOON" ? (
                                <ProjectVisual image="COMING_SOON" title={selectedProject.title} />
                            ) : (
                                <img 
                                    src={activeImage || selectedProject.image} 
                                    alt={selectedProject.title} 
                                    className="w-full h-full object-contain"
                                />
                            )}
                         </div>
                    </div>

                    {/* Thumbnail Strip (Only if multiple images exist) */}
                    {selectedProject.images && selectedProject.images.length > 0 && (
                        <div className="h-20 md:h-24 bg-[#050505] border-t border-white/10 flex items-center gap-3 px-4 overflow-x-auto scrollbar-hide py-2">
                            {selectedProject.images.map((img, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveImage(img)}
                                    className={`relative w-20 h-14 md:w-28 md:h-16 shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${activeImage === img ? 'border-cyber-primary opacity-100 ring-2 ring-cyber-primary/20' : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'}`}
                                >
                                    <img src={img} alt={`Screenshot ${idx}`} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    )}
                </div>

                {/* Right Side: Content Section */}
                <div className="w-full md:w-2/5 p-8 overflow-y-auto bg-[#0a0a0a]">
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
                    
                    <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{selectedProject.title}</h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 text-sm">
                        {selectedProject.description}
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                <Activity size={18} className="text-cyber-primary" /> Fonctionnalités Clés
                            </h4>
                            <ul className="space-y-3">
                                {selectedProject.features?.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-secondary shrink-0"></span>
                                        <span className="leading-snug">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold text-lg mb-3 flex items-center gap-2">
                                <Layers size={18} className="text-cyber-primary" /> Stack Technique
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
                            <a href={selectedProject.link} className="flex-1 py-3 bg-cyber-primary text-black font-bold rounded-lg hover:bg-cyan-400 transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                                <ExternalLink size={18} /> Voir le projet
                            </a>
                            <a href={selectedProject.link} className="px-4 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-colors text-white">
                                <Github size={20} />
                            </a>
                        </div>
                        
                        <div className="text-xs text-gray-500 text-center font-mono mt-2">
                            * Projet en développement (Beta)
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