import React from 'react';
import { ArrowRight, Bot, Blocks, BarChart3, Linkedin, Github, Send, ChevronsDown } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, href: string) => {
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

  const profileImgUrl = "https://github.com/ketve76/KBfoliopro/blob/main/profile.jpg?raw=true";

  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center pt-20 pb-32 md:pb-0 overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        
        {/* 1. Blobs (Bottom Layer) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-primary/20 rounded-full blur-[120px] animate-pulse-slow z-0"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-secondary/20 rounded-full blur-[120px] animate-pulse-slow delay-1000 z-0"></div>

        {/* 2. Particles (Middle Layer - On top of blobs) */}
        <div className="absolute inset-0 z-10">
            <ParticlesBackground />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center relative z-20">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:border-cyber-primary/50 transition-colors duration-300">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-mono text-gray-300">BASÉ À MONTRÉAL • COORDONNATEUR DONNÉES & BI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="glitch-wrapper">
                <span className="glitch-text block" data-text="Kevin Brunez">Kevin Brunez</span>
            </span>
            <span className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary block mt-2">
              Data, IA & Stratégie Web3
            </span>
          </h1>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed border-l-2 border-cyber-primary/30 pl-6 backdrop-blur-sm bg-black/20 p-4 rounded-r-xl">
            <p>
              Coordonnateur Données (OIQ) le jour, Architecte de solutions autonomes la nuit. 
              Je transforme les processus complexes en systèmes performants grâce à <strong>l'IA</strong> (Agents, n8n), la <strong>Data Intelligence</strong> (Power BI Expert) et la <strong>Blockchain</strong>.
            </p>
            
            <p>
              Mais derrière le profil "Geek" se cache un <strong>stratège passionné et curieux</strong>. Fort d'une expérience en direction stratégique, je possède une expertise pointue en <strong>Finance Classique & Décentralisée (DeFi)</strong>. Je comprends les marchés boursiers, les liquidités et les mécanismes économiques profonds.
            </p>

            <p>
               En <strong>veille technologique et économique obsessionnelle</strong>, je ne me contente pas de coder : j'analyse, j'anticipe et je conçois des outils (Trading Bots, Dashboard Financiers) qui ont un temps d'avance sur le marché.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#projects" 
              onClick={(e) => handleScroll(e, '#projects')}
              className="group relative px-6 py-3 bg-white text-black font-bold rounded-lg overflow-hidden hover:bg-cyan-300 transition-colors cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir mes Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="group px-6 py-3 border border-cyber-primary text-cyber-primary font-bold rounded-lg hover:bg-cyber-primary/10 transition-colors cursor-pointer flex items-center gap-2 shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              Contactez-moi <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex gap-2 ml-2">
               <a href="https://www.linkedin.com/in/kevin-brunez-434121263/" target="_blank" rel="noreferrer" className="p-3 border border-white/20 rounded-lg hover:border-cyber-primary/50 hover:text-cyber-primary transition-colors hover:bg-white/5">
                 <Linkedin className="w-5 h-5" />
               </a>
               <a href="https://github.com" target="_blank" rel="noreferrer" className="p-3 border border-white/20 rounded-lg hover:border-cyber-primary/50 hover:text-cyber-primary transition-colors hover:bg-white/5">
                 <Github className="w-5 h-5" />
               </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/10">
            <div className="text-center md:text-left hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1 text-cyber-primary">
                <Bot className="w-5 h-5" />
                <span className="font-bold">IA & Auto</span>
              </div>
              <p className="text-xs text-gray-500">n8n, Agents, Python</p>
            </div>
            <div className="text-center md:text-left hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1 text-purple-500">
                <Blocks className="w-5 h-5" />
                <span className="font-bold">Finance 3.0</span>
              </div>
              <p className="text-xs text-gray-500">DeFi, Trading, Solidity</p>
            </div>
            <div className="text-center md:text-left hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1 text-blue-500">
                <BarChart3 className="w-5 h-5" />
                <span className="font-bold">Stratégie</span>
              </div>
              <p className="text-xs text-gray-500">BI, Veille Éco, KPI</p>
            </div>
          </div>
        </div>

        {/* Profile / 3D Element */}
        {/* Added mt-24 for mobile to create space from text above */}
        <div className="relative flex justify-center items-center mt-24 md:mt-0">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Decorative Rings */}
                <div className="absolute inset-0 border-2 border-cyber-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border-2 border-dashed border-cyber-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Image Container with Glitch Effect */}
                <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white/10 bg-black shadow-[0_0_50px_rgba(0,240,255,0.3)] group cursor-pointer glitch-img-container">
                    <img 
                        src={profileImgUrl}
                        onError={(e) => {
                            // Fallback to stylized Initials if local image is missing
                            console.warn("Profile image not found. Using fallback.");
                            e.currentTarget.src = "https://ui-avatars.com/api/?name=Kevin+Brunez&background=000&color=00f0ff&size=400&font-size=0.33&bold=true&length=2";
                        }}
                        alt="Kevin Brunez" 
                        className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700 relative z-20"
                    />
                    {/* Overlay Effect on Hover */}
                    <div className="absolute inset-0 bg-cyber-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay z-30"></div>
                </div>

                {/* Floating Badges */}
                {/* Scaled down on mobile (scale-90) and adjusted positioning */}
                
                {/* Top Left: React (Cyan) */}
                <div className="absolute -top-6 left-0 md:top-12 md:-left-24 bg-black/80 backdrop-blur border border-cyber-primary/50 p-3 rounded-xl shadow-lg animate-float delay-0 z-40 transition-all duration-300 hover:scale-105 text-right hover:bg-cyber-primary/10 scale-90 md:scale-100 transform origin-bottom-right">
                    <span className="text-cyber-primary font-mono text-xs font-bold block">REACT META DEVELOPER</span>
                    <span className="text-[10px] text-gray-400 block">CERTIFIED</span>
                </div>

                {/* Top Right: Power BI (Cyan) */}
                <div className="absolute -top-6 right-0 md:top-12 md:-right-24 bg-black/80 backdrop-blur border border-cyber-primary/50 p-3 rounded-xl shadow-lg animate-float delay-1000 z-40 text-left transition-all duration-300 hover:scale-105 hover:bg-cyber-primary/10 scale-90 md:scale-100 transform origin-bottom-left">
                    <span className="text-cyber-primary font-mono text-xs font-bold block">MICROSOFT POWER BI</span>
                    <span className="text-[10px] text-gray-400 block">CERTIFIED</span>
                </div>

                {/* Bottom Left: Strategy (Purple) */}
                <div className="absolute bottom-6 -left-4 md:bottom-12 md:-left-20 bg-black/80 backdrop-blur border border-cyber-secondary/50 p-3 rounded-xl shadow-lg animate-float delay-500 z-40 transition-all duration-300 hover:scale-105 text-right hover:bg-cyber-secondary/10 scale-90 md:scale-100">
                    <span className="text-cyber-secondary font-mono text-xs font-bold block">STRATEGIC VISION</span>
                    <span className="text-[10px] text-gray-400 block">BUSINESS & DATA</span>
                </div>

                {/* Bottom Right: AI (Purple) */}
                <div className="absolute bottom-6 -right-4 md:bottom-12 md:-right-20 bg-black/80 backdrop-blur border border-cyber-secondary/50 p-3 rounded-xl shadow-lg animate-float delay-1500 z-40 text-left transition-all duration-300 hover:scale-105 hover:bg-cyber-secondary/10 scale-90 md:scale-100">
                    <span className="text-cyber-secondary font-mono text-xs font-bold block">AI INTEGRATION</span>
                    <span className="text-[10px] text-gray-400 block">AGENTS & AUTO</span>
                </div>
            </div>
        </div>
      </div>

      {/* SCROLL INDICATOR - ANIMATED */}
      <div 
        onClick={(e) => handleScroll(e, '#services')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-3 cursor-pointer group animate-[fadeIn_1s_ease-out_1s_forwards] opacity-0"
      >
         <span className="text-sm font-bold font-mono text-cyber-primary tracking-[0.3em] uppercase transition-colors duration-300 drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
            Scroll
         </span>
         <div className="w-[32px] h-[54px] rounded-full border-2 border-white/50 flex justify-center pt-2 group-hover:border-cyber-primary transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.8)] bg-black/50 backdrop-blur">
            <div className="w-1.5 h-2.5 rounded-full bg-cyber-primary animate-scrolldown shadow-[0_0_8px_#00f0ff]"></div>
         </div>
         <ChevronsDown className="w-6 h-6 text-white group-hover:text-cyber-primary transition-colors duration-300 animate-bounce" />
      </div>

    </section>
  );
};

export default Hero;