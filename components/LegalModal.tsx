import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const LegalModal: React.FC<Props> = ({ open, onClose, title, children }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    if (open) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        className="bg-[#0a0a0a] border border-white/10 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-[#0a0a0a] border-b border-white/10 p-6 flex justify-between items-center z-10">
          <h2 id="legal-modal-title" className="text-2xl font-bold text-white">{title}</h2>
          <button onClick={onClose} aria-label="Fermer" className="text-gray-400 hover:text-white p-2">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 text-gray-300 text-sm leading-relaxed space-y-4 prose prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
