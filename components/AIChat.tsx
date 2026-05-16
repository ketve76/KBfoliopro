import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Sparkles, Loader2, Lock, AlertTriangle, ShieldAlert } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AI_CONSENT_KEY = 'kb_ai_chat_consent_v1';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasConsent, setHasConsent] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Bonjour! Je suis l'assistant virtuel de Kevin. Interrogez-moi sur son parcours, ses compétences Data/IA ou ses projets Web3.", timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [isLimitReached, setIsLimitReached] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHasConsent(localStorage.getItem(AI_CONSENT_KEY) === 'granted');
  }, []);

  const acceptConsent = () => {
    localStorage.setItem(AI_CONSENT_KEY, 'granted');
    setHasConsent(true);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading || isLimitReached) return;

    const userMsg: ChatMessage = { role: 'user', text: inputText, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    const sent = inputText;
    setInputText('');
    setIsLoading(true);

    try {
      const { reply, remaining: rem, error, resetIn } = await sendMessageToGemini(sent);
      const botMsg: ChatMessage = { role: 'model', text: reply, timestamp: new Date() };
      setMessages(prev => [...prev, botMsg]);
      if (typeof rem === 'number') setRemaining(rem);
      if (error && resetIn) setIsLimitReached(true);
    } catch {
      setMessages(prev => [...prev, { role: 'model', text: "Erreur de connexion au cerveau numérique.", timestamp: new Date() }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 bg-cyber-primary text-black px-5 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:scale-105 transition-all duration-300 relative"
        >
          <Bot className="w-6 h-6" />
          <span>Ask my AI</span>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {isOpen && (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-[#050505] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#111] to-[#0a0a0a] p-4 flex justify-between items-center border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isLimitReached ? 'bg-red-500/20 text-red-500' : 'bg-cyber-secondary/20 text-cyber-secondary'}`}>
                {isLimitReached ? <AlertTriangle size={16} /> : <Sparkles size={16} />}
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Assistant IA de Kevin</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xs flex items-center gap-1 ${isLimitReached ? 'text-red-500' : 'text-green-500'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isLimitReached ? 'bg-red-500' : 'bg-green-500 animate-pulse'}`}></span>
                    {isLimitReached ? 'Limit Reached' : 'Online'}
                  </span>
                  {remaining !== null && (
                    <span className="text-[10px] text-gray-600 font-mono border border-white/10 px-1 rounded">
                      {remaining} left
                    </span>
                  )}
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Consent gate */}
          {!hasConsent ? (
            <div className="flex-1 overflow-y-auto p-6 bg-black/50 flex flex-col items-center justify-center text-center gap-4">
              <ShieldAlert className="w-12 h-12 text-cyber-primary" />
              <h4 className="text-white font-bold">Avant de discuter</h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Vos messages sont transmis à <strong>Google Gemini (États-Unis)</strong> pour générer une réponse.
                Ils ne sont ni stockés sur ce site, ni utilisés à des fins commerciales par Kevin Brunez.
                <br /><br />
                <span className="text-yellow-400">Ne saisissez aucune information sensible</span> (mot de passe, données bancaires, identifiants).
                <br /><br />
                En continuant, vous acceptez ce transfert vers Google.
              </p>
              <button
                onClick={acceptConsent}
                className="bg-cyber-primary text-black font-bold px-4 py-2 rounded-lg text-sm hover:bg-cyan-400"
              >
                J'accepte et je discute
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-black/50">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                      msg.role === 'user'
                        ? 'bg-cyber-primary text-black rounded-br-none'
                        : 'bg-[#1a1a1a] text-gray-200 rounded-bl-none border border-white/5'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-[#1a1a1a] p-3 rounded-2xl rounded-bl-none border border-white/5 flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin text-cyber-primary" />
                      <span className="text-xs text-gray-400">Computing response...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 bg-[#0a0a0a] border-t border-white/5">
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyDown={handleKeyPress}
                    disabled={isLimitReached}
                    maxLength={1000}
                    placeholder={isLimitReached ? "Quota journalier atteint" : "Posez une question..."}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-cyber-primary/50 placeholder-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading || !inputText.trim() || isLimitReached}
                    className={`p-2 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${isLimitReached ? 'bg-red-500/20 text-red-500' : 'bg-cyber-primary text-black hover:bg-cyan-400'}`}
                  >
                    {isLimitReached ? <Lock size={18} /> : <Send size={18} />}
                  </button>
                </div>
                <div className="mt-2 text-center flex justify-between px-1">
                  <span className="text-[10px] text-gray-600">Powered by Gemini · Rate-limited server-side</span>
                  {isLimitReached && <span className="text-[10px] text-red-500 font-bold">Reset: 24h</span>}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default AIChat;
