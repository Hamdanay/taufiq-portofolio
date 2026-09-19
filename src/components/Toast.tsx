import React from 'react';
import { Check } from 'lucide-react';

interface ToastProps {
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl bg-[#211C1A] text-white text-xs font-mono shadow-2xl border border-white/10 flex items-center gap-2 animate-bounce">
      <Check className="w-4 h-4 text-emerald-400" />
      <span>{message}</span>
    </div>
  );
};
