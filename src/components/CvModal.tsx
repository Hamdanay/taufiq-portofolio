import React from 'react';
import { X, ExternalLink } from 'lucide-react';
import { DownloadProgressButton } from './DownloadProgressButton';
import { CV_PDF_FILENAME, CV_PDF_PATH } from '../data/cvData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-ink/50 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="glass-card max-w-md w-full p-6 sm:p-8 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="cv-modal-title" className="type-block-title text-lg">
            Curriculum Vitae
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-muted hover:text-ink focus-ring cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="type-body-tight">{CV_PDF_FILENAME}</p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <DownloadProgressButton
            href={CV_PDF_PATH}
            filename={CV_PDF_FILENAME}
            onComplete={() => {
              onDownload();
            }}
          />
          <a
            href={CV_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline flex-1 focus-ring"
          >
            <ExternalLink className="w-4 h-4" aria-hidden />
            Buka tab baru
          </a>
        </div>
      </div>
    </div>
  );
};
