'use client';

import { useState } from 'react';
import { APP_VERSION } from '@/lib/changelog';
import ChangelogModal from './ChangelogModal';

export default function Footer() {
  const [showChangelog, setShowChangelog] = useState(false);

  return (
    <>
      <footer className="py-4 px-4 text-center border-t border-[#e5e5e5]">
        <p className="text-xs text-[#a3a3a3] font-light">
          © 2026 1000쌤 ·{' '}
          <button
            onClick={() => setShowChangelog(true)}
            className="text-[#a3a3a3] hover:text-[#D2886F] transition-colors underline"
          >
            {APP_VERSION}
          </button>
        </p>
      </footer>
      {showChangelog && <ChangelogModal onClose={() => setShowChangelog(false)} />}
    </>
  );
}
