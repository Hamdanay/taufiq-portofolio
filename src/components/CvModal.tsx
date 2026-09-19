import React from 'react';
import { X, Download, ExternalLink } from 'lucide-react';
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
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-ink/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      onClick={onClose}
    >
      <div
        className="bg-paper rounded-md max-w-md w-full p-6 sm:p-8 space-y-5 border border-line shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="cv-modal-title" className="type-panel-title">
            Curriculum vitae
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-md text-muted hover:text-ink hover:bg-surface transition-colors focus-ring cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="type-body-tight">
          File PDF yang sama dengan biodata, pengalaman, pendidikan, sertifikat, dan keahlian di halaman ini.
        </p>

        <p className="type-body-tight">
          <span className="type-label">Berkas</span>
          <span className="block type-body-ink font-normal mt-1">{CV_PDF_FILENAME}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={CV_PDF_PATH}
            download={CV_PDF_FILENAME}
            onClick={() => {
              onDownload();
              onClose();
            }}
            className="flex-1 py-2.5 px-4 rounded-md bg-ink hover:bg-accent text-paper type-ui transition-colors flex items-center justify-center gap-2 focus-ring"
          >
            <Download className="w-4 h-4" />
            Unduh PDF
          </a>

          <a
            href={CV_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-md border border-line type-ui hover:bg-surface transition-colors flex items-center justify-center gap-2 focus-ring text-ink"
          >
            <ExternalLink className="w-4 h-4" />
            Buka di tab baru
          </a>
        </div>
      </div>
    </div>
  );
};
