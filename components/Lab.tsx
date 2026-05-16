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
                <h3 className="text-2xl font-bold text-white">Setup de Dev quotidien</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Environnement multi-modèles avec routage automatique des tâches selon coût et complexité.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-cyber-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Claude Code (Anthropic CLI)</strong>
                    <p className="text-sm text-gray-500">Opus pour le planning et l'architecture, Sonnet pour le dev, Haiku pour les tâches simples — optimisation coût/qualité.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Database className="w-5 h-5 text-cyber-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">MCP Servers intégrés</strong>
                    <p className="text-sm text-gray-500">GitHub, Netlify, Supabase, Stripe — déploiement et opérations directement depuis le chat.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-cyber-primary mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Power BI + Python pour la data</strong>
                    <p className="text-sm text-gray-500">Modélisation DAX/SQL pour l'analytique, notebooks Python pour la finance et le ML.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Modèles Locaux */}
          <div className="p-8 rounded-2xl bg-[#050505] border border-white/5 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                  <Cpu size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">LLMs Locaux & Privacy</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Exécution de modèles open-source en local pour les workflows nécessitant confidentialité ou volume élevé.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Bot className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Gemma 4 & Qwen via LM Studio</strong>
                    <p className="text-sm text-gray-500">Tests réguliers — comparaison qualité/latence vs cloud pour traitement batch et tâches sensibles.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Routage hybride cloud/local</strong>
                    <p className="text-sm text-gray-500">Tâches volumineuses ou récurrentes → local. Tâches complexes ou ponctuelles → API cloud. Réduction des coûts significative.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Orchestration Multi-Agents */}
          <div className="p-8 rounded-2xl bg-[#050505] border border-white/5 hover:border-green-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-500/10 rounded-xl text-green-400">
                  <Bot size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Orchestration Multi-Agents</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Construction d'agents autonomes coordonnant plusieurs LLMs et outils externes pour des workflows bout-en-bout.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Code2 className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Claude Agent SDK + MCP custom</strong>
                    <p className="text-sm text-gray-500">Création de serveurs MCP sur mesure pour exposer outils internes (BI, Web3, finance) aux agents IA.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">n8n pour les flux d'automatisation</strong>
                    <p className="text-sm text-gray-500">Orchestration visuelle, webhooks, intégration LLMs dans les processus opérationnels.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Finance & Trading IA */}
          <div className="p-8 rounded-2xl bg-[#050505] border border-white/5 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-xl text-orange-400">
                  <LineChart size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Finance & Trading IA</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Monitoring temps réel des marchés et signaux de trading assistés par IA, côté traditionnel comme DeFi.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Rocket className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Crypto Signal (closed source)</strong>
                    <p className="text-sm text-gray-500">Bot Python/React analysant métriques on-chain et off-chain, propose signaux scalp/intraday/swing avec backtest.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-white">Tokenomics & on-chain analytics</strong>
                    <p className="text-sm text-gray-500">Lecture critique des contrats, liquidités, distribution holders avant exposition capital.</p>
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
