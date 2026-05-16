import React from 'react';

interface Props {
  onShowPrivacy: () => void;
  onShowLegal: () => void;
}

const Footer: React.FC<Props> = ({ onShowPrivacy, onShowLegal }) => (
  <footer className="py-8 border-t border-white/5 bg-black text-center">
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-gray-600 text-sm font-mono mb-3">
        © {new Date().getFullYear()} Kevin Brunez. Built with React, AI &amp; Web3.
      </p>
      <nav aria-label="Liens légaux" className="flex justify-center gap-6 text-xs text-gray-500">
        <button onClick={onShowLegal} className="hover:text-cyber-primary transition-colors">
          Mentions légales
        </button>
        <button onClick={onShowPrivacy} className="hover:text-cyber-primary transition-colors">
          Politique de confidentialité
        </button>
        <a
          href="https://github.com/ketve76/KBfoliopro"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-cyber-primary transition-colors"
        >
          Code source
        </a>
      </nav>
    </div>
  </footer>
);

export default Footer;
