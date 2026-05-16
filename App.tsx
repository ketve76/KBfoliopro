import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Lab from './components/Lab';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AIChat from './components/AIChat';
import Services from './components/Services';

function App() {
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
      
      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-black text-center">
        <p className="text-gray-600 text-sm font-mono">
          © {new Date().getFullYear()} Kevin Brunez. Built with React, AI & Web3.
        </p>
      </footer>

      {/* Floating Elements */}
      <AIChat />
    </div>
  );
}

export default App;