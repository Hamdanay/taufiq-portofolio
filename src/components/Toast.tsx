import React from 'react';

interface ToastProps {
  message: string;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div
      role="status"
      className="fixed bottom-6 right-6 z-50 max-w-sm px-4 py-3 rounded-md bg-ink text-paper type-ui shadow-lg border border-line/20"
    >
      {message}
    </div>
  );
};
