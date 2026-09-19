import React from 'react';
import { Terminal, X, Download, ExternalLink } from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose, onDownload }) => {
  if (!isOpen) return null;

  const pdfUrl = '/Taufiqurrahman_Hamdan_Al_Ayubi_CV.pdf';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#F8F9FA] rounded-2xl max-w-md w-full p-6 text-[#211C1A] space-y-4 shadow-2xl border border-[#211C1A]/10">
        <div className="flex items-center justify-between border-b border-[#211C1A]/10 pb-3">
          <h3 className="font-bold text-base flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#2563EB]" />
            Curriculum Vitae Preview
          </h3>
          <button 
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-[#F0EAE5] text-[#211C1A] hover:bg-[#211C1A] hover:text-white flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs text-[#211C1A]/80 leading-relaxed">
          CV ini mencakup riwayat akademis Computer Science (BINUS University B28 · Semester 5), pengalaman magang Data Center Office Thursina IIBS (2023), proyek AI LangFlow, serta keahlian Python, MySQL, dan Tailwind CSS milik Taufiqurrahman Hamdan Al Ayubi.
        </p>

        <div className="p-3 rounded-lg bg-[#F0EAE5] text-[11px] font-mono space-y-1 border border-[#211C1A]/5">
          <div>File: <span className="font-bold text-[#211C1A]">Taufiqurrahman Hamdan Al Ayubi - CV.pdf</span></div>
          <div>Ukuran: <span className="text-[#2563EB]">106 KB</span></div>
          <div>Format: <span className="text-emerald-600 font-bold">Dokumen PDF Resmi</span></div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href={pdfUrl}
            download="Taufiqurrahman Hamdan Al Ayubi - CV.pdf"
            onClick={() => {
              onDownload();
              onClose();
            }}
            className="flex-1 py-2.5 px-4 rounded-lg bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-bold transition-all shadow flex items-center justify-center gap-2 cursor-pointer text-center"
          >
            <Download className="w-4 h-4" />
            <span>Unduh PDF</span>
          </a>

          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-4 rounded-lg bg-[#F0EAE5] hover:bg-[#e4dad3] text-[#211C1A] text-xs font-bold transition-all border border-[#211C1A]/10 flex items-center justify-center gap-1.5 cursor-pointer text-center"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Lihat Tab Baru</span>
          </a>
        </div>
      </div>
    </div>
  );
};
