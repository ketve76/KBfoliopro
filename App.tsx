import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lab from './components/Lab';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import Services from './components/Services';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import PrivacyPolicy from './components/PrivacyPolicy';
import LegalNotice from './components/LegalNotice';

function App() {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showLegal, setShowLegal] = useState(false);

  const openPrivacy = useCallback(() => setShowPrivacy(true), []);
  const openLegal = useCallback(() => setShowLegal(true), []);

  // Open privacy modal when the in-form "politique de confidentialité" link is clicked.
  useEffect(() => {
    const handler = (e: Event) => {
      const anchor = (e.target as HTMLElement).closest('a[href="#privacy"]') as HTMLAnchorElement | null;
      if (anchor) {
        e.preventDefault();
        setShowPrivacy(true);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-cyber-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Lab />
        <Services />
        <Journey />
        <Projects />
        <Contact />
      </main>

      <Footer onShowPrivacy={openPrivacy} onShowLegal={openLegal} />

      <AIChat />
      <CookieBanner onShowPrivacy={openPrivacy} />
      <PrivacyPolicy open={showPrivacy} onClose={() => setShowPrivacy(false)} />
      <LegalNotice open={showLegal} onClose={() => setShowLegal(false)} />
    </div>
  );
}

export default App;
