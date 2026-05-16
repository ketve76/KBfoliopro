import React, { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';

const STORAGE_KEY = 'kb_cookie_consent_v1';

const CookieBanner: React.FC<{ onShowPrivacy: () => void }> = ({ onShowPrivacy }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
  }, []);

  const handleChoice = (choice: 'accepted' | 'declined') => {
    localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Bandeau de consentement"
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[60] bg-[#0a0a0a] border border-cyber-primary/30 rounded-2xl shadow-[0_0_30px_rgba(0,240,255,0.15)] p-5"
    >
      <div className="flex items-start gap-3">
        <div className="bg-cyber-primary/10 p-2 rounded-lg shrink-0">
          <Cookie className="w-5 h-5 text-cyber-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-sm mb-1">Vie privée</h3>
          <p className="text-gray-400 text-xs leading-relaxed">
            Ce site n'utilise <strong>aucun cookie de tracking</strong> ni d'analytics. Seul du stockage local
            technique est utilisé pour mémoriser vos préférences. Le chatbot IA envoie vos messages à Google
            Gemini ; vous serez informé avant la première utilisation.
            <button onClick={onShowPrivacy} className="text-cyber-primary underline ml-1">En savoir plus</button>.
          </p>
          <div className="flex gap-2 mt-3">
            <button
              onClick={() => handleChoice('accepted')}
              className="bg-cyber-primary text-black text-xs font-bold px-3 py-1.5 rounded-lg hover:bg-cyan-400"
            >
              D'accord
            </button>
            <button
              onClick={() => handleChoice('declined')}
              className="border border-white/10 text-gray-400 text-xs px-3 py-1.5 rounded-lg hover:text-white"
            >
              Refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
