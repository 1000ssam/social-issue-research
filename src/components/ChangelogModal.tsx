'use client';

import { useEffect } from 'react';
import { CHANGELOG } from '@/lib/changelog';

interface ChangelogModalProps {
  onClose: () => void;
}

export default function ChangelogModal({ onClose }: ChangelogModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/30" />
      <div
        className="relative bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto animate-slide-up"
        onClick={e => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-[#e5e5e5] px-6 py-4 flex justify-between items-center">
          <h2 className="text-lg font-medium text-[#171717]">업데이트 내역</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#f5f5f5] text-[#a3a3a3] transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-6 space-y-6">
          {CHANGELOG.map(entry => (
            <div key={entry.version}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-[#D2886F]">{entry.version}</span>
                <span className="text-xs text-[#a3a3a3]">{entry.date}</span>
              </div>
              <ul className="space-y-1">
                {entry.changes.map((change, i) => (
                  <li key={i} className="text-sm text-[#525252] font-light flex gap-2">
                    <span className="text-[#D2886F] shrink-0">•</span>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
