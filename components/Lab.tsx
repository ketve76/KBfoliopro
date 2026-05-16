import React from 'react';
import { Terminal, Bot, LineChart, Rocket, Code2, Database, Globe, Activity, Cpu } from 'lucide-react';

const Lab: React.FC = () => {
  return (
    <section id="lab" className="py-20 bg-[#0a0a0a] relative border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            <span className="text-cyber-primary">AI</span> Lab & Setup
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Mon environnement de développement actuel et mes expérimentations en cours avec l'intelligence artificielle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Setup Actuel */}
          <div className="p-8 rounded-2xl bg-[#050505] border border-white/5 hover:border-cyber-primary/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
                  <Terminal size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Setup de Dev</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Environnement de développement optimisé avec des agents IA pour le code, le planning et le déploiement.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-cyber-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Claude Code dans Cline (VSCode)</strong>
                    <p className="text-sm text-gray-500">Opus 4.6 pour le planning, Sonnet 4.6 (1M) pour le développement.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-cyber-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">MCP Intégrés</strong>
                    <p className="text-sm text-gray-500">Github, Supabase, Netlify pour un déploiement fluide.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-cyber-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Monitoring</strong>
                    <p className="text-sm text-gray-500">Claude Haiku pour la supervision continue.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Agentisation */}
          <div className="p-8 rounded-2xl bg-[#050505] border border-white/5 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                  <Bot size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Agentisation & Local</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Création d'agents autonomes et gestion de modèles d'IA en local pour des performances optimales et privées.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Openclaw & ChatGPT</strong>
                    <p className="text-sm text-gray-500">Framework d'agentisation pour l'automatisation de tâches complexes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Modèles Locaux (LM Studio)</strong>
                    <p className="text-sm text-gray-500">Tests actuels avec Gemma 4 en local pour le management de modèles.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Finance & Monitoring */}
          <div className="p-8 rounded-2xl bg-[#050505] border border-white/5 hover:border-green-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-400">
                  <LineChart size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Finance & Monitoring</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Surveillance des marchés financiers assistée par l'intelligence artificielle.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Claude Cowork</strong>
                    <p className="text-sm text-gray-500">Utilisation combinée avec plusieurs MCP pour le monitoring des marchés financiers en temps réel.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Prochains Tests */}
          <div className="p-8 rounded-2xl bg-[#050505] border border-white/5 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
                  <Rocket size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Prochains Tests</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Exploration continue des nouveaux modèles et agents IA émergents.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Bot className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Minimax m 2.7 & Hermes Agent</strong>
                    <p className="text-sm text-gray-500">Prochains modèles sur la liste de tests pour évaluer leurs capacités de raisonnement et d'agentisation.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Lab;
