import React, { useCallback, useRef, useState } from 'react';
import { Download, Check, Loader2 } from 'lucide-react';

type DownloadState = 'idle' | 'downloading' | 'done' | 'error';

interface DownloadProgressButtonProps {
  href: string;
  filename: string;
  label?: string;
  className?: string;
  onComplete?: () => void;
  onError?: () => void;
}

async function fetchAndSave(
  href: string,
  filename: string,
  onProgress: (percent: number) => void
): Promise<void> {
  const response = await fetch(href);
  if (!response.ok) throw new Error('Download failed');

  const contentLength = response.headers.get('Content-Length');
  const total = contentLength ? parseInt(contentLength, 10) : 0;

  if (!response.body || total === 0) {
    onProgress(40);
    const blob = await response.blob();
    onProgress(100);
    triggerBlobDownload(blob, filename);
    return;
  }

  const reader = response.body.getReader();
  const chunks: Uint8Array[] = [];
  let received = 0;

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    if (value) {
      chunks.push(value);
      received += value.length;
      onProgress(Math.min(99, Math.round((received / total) * 100)));
    }
  }

  const blob = new Blob(chunks as BlobPart[], { type: 'application/pdf' });
  onProgress(100);
  triggerBlobDownload(blob, filename);
}

function triggerBlobDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export const DownloadProgressButton: React.FC<DownloadProgressButtonProps> = ({
  href,
  filename,
  label = 'Unduh PDF',
  className = '',
  onComplete,
  onError,
}) => {
  const [state, setState] = useState<DownloadState>('idle');
  const [progress, setProgress] = useState(0);
  const busyRef = useRef(false);

  const handleClick = useCallback(async () => {
    if (busyRef.current) return;
    busyRef.current = true;
    setState('downloading');
    setProgress(8);

    const tick = window.setInterval(() => {
      setProgress((p) => (p < 88 ? p + 3 : p));
    }, 100);

    try {
      await fetchAndSave(href, filename, (p) => setProgress(p));
      window.clearInterval(tick);
      setProgress(100);
      setState('done');
      onComplete?.();
      window.setTimeout(() => {
        setState('idle');
        setProgress(0);
        busyRef.current = false;
      }, 1800);
    } catch {
      window.clearInterval(tick);
      setState('error');
      setProgress(0);
      busyRef.current = false;
      onError?.();
      window.setTimeout(() => setState('idle'), 2000);
    }
  }, [filename, href, onComplete, onError]);

  const isDownloading = state === 'downloading';
  const isDone = state === 'done';

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isDownloading}
      className={`btn-download-progress focus-ring ${className}`.trim()}
      aria-busy={isDownloading}
      aria-live="polite"
    >
      <span
        className="btn-download-progress__fill"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden
      />
      <span className="btn-download-progress__content">
        {isDone ? (
          <>
            <Check className="w-4 h-4 shrink-0" aria-hidden />
            Selesai
          </>
        ) : isDownloading ? (
          <>
            <Loader2 className="w-4 h-4 shrink-0 animate-spin" aria-hidden />
            {progress}%
          </>
        ) : state === 'error' ? (
          <>
            <Download className="w-4 h-4 shrink-0" aria-hidden />
            Coba lagi
          </>
        ) : (
          <>
            <Download className="w-4 h-4 shrink-0" aria-hidden />
            {label}
          </>
        )}
      </span>
    </button>
  );
};
