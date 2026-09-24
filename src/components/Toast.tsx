import React from 'react';

interface ToastProps {
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      className="toast-fixed z-50 max-w-[min(100vw-2rem,24rem)] px-4 py-3 rounded-full bg-ink text-surface text-sm shadow-lg font-semibold"
    >
      {message}
    </div>
  );
};
