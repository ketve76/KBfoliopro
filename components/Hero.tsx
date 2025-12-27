import React from 'react';
import { ArrowRight, Bot, Blocks, BarChart3, Linkedin, Github, Send } from 'lucide-react';

const Hero: React.FC = () => {
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
    <section id="overview" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-secondary/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-xs font-mono text-gray-300">BASÉ À MONTRÉAL • COORDONNATEUR DONNÉES & BI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Kevin Brunez <br />
            <span className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-cyber-secondary block mt-2">
              Data, IA & Stratégie Web3
            </span>
          </h1>
          
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed border-l-2 border-cyber-primary/30 pl-6">
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
              className="group relative px-6 py-3 bg-white text-black font-bold rounded-lg overflow-hidden hover:bg-gray-200 transition-colors cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-2">
                Voir mes Solutions <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="group px-6 py-3 border border-cyber-primary text-cyber-primary font-bold rounded-lg hover:bg-cyber-primary/10 transition-colors cursor-pointer flex items-center gap-2"
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
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1 text-cyber-primary">
                <Bot className="w-5 h-5" />
                <span className="font-bold">IA & Auto</span>
              </div>
              <p className="text-xs text-gray-500">n8n, Agents, Python</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1 text-purple-500">
                <Blocks className="w-5 h-5" />
                <span className="font-bold">Finance 3.0</span>
              </div>
              <p className="text-xs text-gray-500">DeFi, Trading, Solidity</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1 text-blue-500">
                <BarChart3 className="w-5 h-5" />
                <span className="font-bold">Stratégie</span>
              </div>
              <p className="text-xs text-gray-500">BI, Veille Éco, KPI</p>
            </div>
          </div>
        </div>

        {/* Profile / 3D Element */}
        <div className="relative flex justify-center items-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Decorative Rings */}
                <div className="absolute inset-0 border-2 border-cyber-primary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute inset-4 border-2 border-dashed border-cyber-secondary/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                {/* Image Container */}
                <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white/10 bg-black shadow-[0_0_50px_rgba(0,240,255,0.3)] group cursor-pointer">
                    <img 
                        src="https://github.com/ketve76/KBfoliopro/blob/main/profile.jpg?raw=true"
                        onError={(e) => {
                            // Fallback to stylized Initials if local image is missing
                            console.warn("Profile image not found. Using fallback.");
                            e.currentTarget.src = "https://ui-avatars.com/api/?name=Kevin+Brunez&background=000&color=00f0ff&size=400&font-size=0.33&bold=true&length=2";
                        }}
                        alt="Kevin Brunez" 
                        className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Overlay Effect on Hover */}
                    <div className="absolute inset-0 bg-cyber-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-4 right-0 bg-black/80 backdrop-blur border border-cyber-primary/50 p-3 rounded-xl shadow-lg animate-float z-20">
                    <span className="text-cyber-primary font-mono text-xs font-bold">FINANCE & BI EXPERT</span>
                    <span className="block text-[10px] text-gray-400">TRADFI & DEFI</span>
                </div>
                <div className="absolute bottom-10 -left-8 bg-black/80 backdrop-blur border border-cyber-secondary/50 p-3 rounded-xl shadow-lg animate-float delay-700 z-20">
                    <span className="text-cyber-secondary font-mono text-xs font-bold">STRATEGIC VISION</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;