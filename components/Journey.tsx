import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Database, Cpu, Globe, X, CheckCircle2, Code, ShieldCheck, BookOpen } from 'lucide-react';
import { Experience } from '../types';

// --- DATA: PROFESSIONAL EXPERIENCE ---
const workExperiences: Experience[] = [
  {
    id: 1,
    role: "Coordonnateur Données & Intelligence d'Affaires",
    company: "Ordre des ingénieurs du Québec (OIQ)",
    period: "Juin 2025 - Présent",
    description: "Gardien de la qualité des données et architecte des solutions BI. Je coordonne la collecte ETL transverse et soutiens les directions dans l'optimisation de leurs processus.",
    skills: ["Gouvernance de Données", "ETL", "Power BI", "Management Transverse"],
    details: [
        "Coordonner et assurer la collecte de données auprès de l'ensemble des directions.",
        "Soutenir les directions dans l'optimisation de leurs outils et processus de gestion de données (Power Platform).",
        "Agir à titre de gardien de la qualité des données (Data Quality).",
        "Produire et maintenir des rapports statistiques et opérationnels critiques."
    ]
  },
  {
    id: 2,
    role: "Architecte Web3 & AI (Freelance)",
    company: "Projets Personnels & Consulting",
    period: "2023 - Présent",
    description: "Création de solutions avant-gardistes : Bots de trading Crypto alimentés par IA, audit de Smart Contracts et développement d'apps React.",
    skills: ["React/TypeScript", "Solidity", "Python (AI)", "n8n"],
    details: [
        "Développement de bots de trading algorithmique (Python/AI).",
        "Création d'architectures Web3 sécurisées (Smart Contracts).",
        "Automatisation de workflows complexes avec n8n et Agents IA.",
        "Veille technologique active sur la DeFi et les LLMs."
    ]
  },
  {
    id: 3,
    role: "Technicien Indicateurs & Amélioration Continue",
    company: "Ordre des ingénieurs du Québec (OIQ)",
    period: "Oct 2019 - Juin 2024",
    description: "Le pivot technique. Déploiement de l'intelligence d'affaires et intégration de l'IA dans les processus opérationnels. Expert Power Platform.",
    skills: ["Power Automate", "Intégration IA", "DAX", "SharePoint", "VBA"],
    details: [
        "Déploiement de l'intelligence d'affaires (BI) au sein de l'Ordre.",
        "Responsable des rapports annuels, gouvernementaux et internes.",
        "Intégration de l'IA et automatisation via Power Automate & Power Apps.",
        "Expert de contenu sur les projets technologiques transverses."
    ]
  },
  {
    id: 4,
    role: "Gestion de Projets & RH (Début de carrière)",
    company: "Faurecia / Pôle Emploi",
    period: "2015 - 2019",
    description: "Une fondation solide en gestion des organisations. De la gestion de crise (PSE Faurecia) au recrutement stratégique et l'adaptabilité internationale.",
    skills: ["Gestion de Projet", "Stratégie", "Conduite du Changement", "Anglais"],
    details: [
        "Pôle Emploi (2018-19): Recrutement, GPEC et Plans de formation.",
        "PVT Australie (2017-18): Immersion totale, anglais courant, adaptabilité.",
        "Faurecia (2015-16): Gestion de crise (PSE), Dashboard RH, Sécurité/HSE."
    ]
  }
];

// --- DATA: EDUCATION ---
const educationData = [
    {
        degree: "Master Développement des RH",
        school: "CESI (France)",
        year: "2015 - 2016",
        desc: "Audit social, Négociation & Management de projet."
    },
    {
        degree: "Licence AES (Eco-Gestion)",
        school: "Université du Havre",
        year: "2011 - 2013",
        desc: "Administration Économique et Sociale. Droit, Économie & Compta."
    }
];

// --- DATA: CERTIFICATIONS ---
const certificationsData = [
    {
        title: "Certified React Developer",
        issuer: "Meta / Advanced Frontend",
        date: "Mai 2025",
        icon: <Code className="text-blue-400" size={20} />
    },
    {
        title: "Power BI Data Analyst Associate",
        issuer: "Microsoft (PL-300)",
        date: "Août 2024",
        icon: <Database className="text-yellow-500" size={20} />
    }
];

const Journey: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

  return (
    <section id="journey" className="py-24 bg-black relative overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* --- HEADER --- */}
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Parcours <span className="text-cyber-primary">Expert</span></h2>
                <div className="h-1 w-24 bg-gradient-to-r from-cyber-primary to-cyber-secondary mx-auto rounded-full"></div>
                <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
                    De la gestion stratégique à l'expertise technique. Une évolution constante vers la Data et l'IA.
                </p>
            </div>

            {/* --- SECTION 1: WORK EXPERIENCE TIMELINE --- */}
            <div className="relative mb-32">
                <h3 className="text-2xl font-bold text-white mb-12 flex items-center gap-3">
                    <Briefcase className="text-cyber-primary" /> Expérience Professionnelle
                </h3>

                {/* Vertical Line */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyber-primary via-cyber-secondary to-transparent ml-6 md:ml-0"></div>

                <div className="space-y-12">
                    {workExperiences.map((exp, index) => (
                        <div key={exp.id} className={`flex flex-col md:flex-row items-start md:items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-5/12 pl-16 md:pl-0"></div>
                            
                            {/* Timeline Icon */}
                            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-black border-2 border-cyber-primary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,240,255,0.5)] ml-0">
                                {index === 0 ? <Database size={20} className="text-white" /> : 
                                 index === 1 ? <Globe size={20} className="text-white" /> : 
                                 index === 2 ? <Cpu size={20} className="text-white" /> :
                                 <Briefcase size={20} className="text-white" />}
                            </div>

                            {/* Card */}
                            <div className="w-full md:w-5/12 pl-16 md:pl-0 group">
                                <div 
                                    onClick={() => setSelectedExp(exp)}
                                    className="p-6 bg-[#0a0a0a] border border-white/10 rounded-xl hover:border-cyber-primary/50 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,240,255,0.2)] relative overflow-hidden cursor-pointer"
                                >
                                    <div className="flex justify-between items-start mb-2 relative z-10">
                                        <h3 className="text-xl font-bold text-white group-hover:text-cyber-primary transition-colors">{exp.role}</h3>
                                    </div>
                                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-3">
                                        <span className="text-cyber-secondary font-bold font-mono text-sm">{exp.company}</span>
                                        <span className="text-xs text-gray-500 hidden md:block">•</span>
                                        <span className="text-xs font-mono text-gray-400 border border-gray-700 px-2 py-0.5 rounded w-fit">{exp.period}</span>
                                    </div>
                                    
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed relative z-10">
                                        {exp.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2 relative z-10">
                                        {exp.skills.map(skill => (
                                            <span key={skill} className="text-xs font-mono text-cyan-300 bg-cyan-900/20 border border-cyan-900/50 px-2 py-1 rounded">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* --- SECTION 2: EDUCATION & CERTIFICATIONS --- */}
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                
                {/* EDUCATION COLUMN */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <GraduationCap className="text-cyber-primary" /> Diplômes Académiques
                    </h3>
                    <div className="space-y-6">
                        {educationData.map((edu, idx) => (
                            <div key={idx} className="group relative p-6 bg-[#111] rounded-xl border border-white/5 hover:border-white/20 transition-colors">
                                <div className="absolute left-0 top-6 w-1 h-12 bg-cyber-secondary rounded-r-full group-hover:h-full group-hover:top-0 transition-all duration-300"></div>
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                    <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">{edu.year}</span>
                                </div>
                                <p className="text-cyber-primary font-mono text-sm mb-2">{edu.school}</p>
                                <p className="text-gray-400 text-sm">{edu.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CERTIFICATIONS COLUMN */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                        <Award className="text-cyber-primary" /> Certifications & Tech
                    </h3>
                    <div className="grid gap-6">
                        {certificationsData.map((cert, idx) => (
                            <div key={idx} className="flex items-center gap-4 p-5 bg-[#111] rounded-xl border border-white/5 hover:border-cyber-primary/40 hover:bg-white/5 transition-all duration-300 group">
                                <div className="w-12 h-12 rounded-lg bg-black border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    {cert.icon}
                                </div>
                                <div>
                                    <h4 className="text-white font-bold group-hover:text-cyber-primary transition-colors">{cert.title}</h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                                        <ShieldCheck size={14} className="text-green-500" />
                                        <span>{cert.issuer}</span>
                                        <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                        <span className="font-mono text-xs">{cert.date}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* Auto-learning Box */}
                        <div className="p-5 rounded-xl border border-dashed border-white/20 bg-transparent flex items-center justify-center text-center">
                            <div>
                                <BookOpen className="w-6 h-6 text-gray-500 mx-auto mb-2" />
                                <p className="text-gray-500 text-sm">Apprentissage continu : AI Agents, Solidity Security...</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        {/* Experience Detail Modal */}
        {selectedExp && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <div 
                    className="absolute inset-0 bg-black/80 backdrop-blur-md" 
                    onClick={() => setSelectedExp(null)}
                ></div>
                <div className="relative bg-[#111] border border-cyber-primary/30 p-8 rounded-2xl max-w-2xl w-full shadow-[0_0_50px_rgba(0,240,255,0.2)] animate-in fade-in zoom-in duration-300 overflow-hidden">
                    <button 
                        onClick={() => setSelectedExp(null)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-20"
                    >
                        <X size={24} />
                    </button>
                    
                    {/* Background Glow */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-cyber-primary/10 to-transparent pointer-events-none"></div>

                    <div className="relative z-10">
                        <span className="text-cyber-primary font-mono text-sm tracking-widest uppercase mb-2 block">Détails de l'expérience</span>
                        <h3 className="text-3xl font-bold text-white mb-1">{selectedExp.role}</h3>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6 text-gray-400">
                             <span className="text-cyber-secondary font-bold text-lg">{selectedExp.company}</span>
                             <span className="hidden md:inline">•</span>
                             <span className="font-mono bg-white/5 px-2 py-0.5 rounded text-sm">{selectedExp.period}</span>
                        </div>
                        
                        <div className="w-full h-px bg-white/10 mb-6"></div>
                        
                        <div className="space-y-4 mb-8">
                            <h4 className="text-white font-bold text-lg flex items-center gap-2">
                                <Briefcase size={18} className="text-cyber-primary" /> Missions Clés
                            </h4>
                            <ul className="grid gap-3">
                                {selectedExp.details?.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle2 size={18} className="text-cyber-secondary mt-1 shrink-0" />
                                        <span className="leading-relaxed">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-3">
                             <h4 className="text-white font-bold text-lg flex items-center gap-2">
                                <Cpu size={18} className="text-cyber-primary" /> Stack Technique & Compétences
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedExp.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-cyan-200 hover:border-cyber-primary/50 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </section>
  );
};

export default Journey;