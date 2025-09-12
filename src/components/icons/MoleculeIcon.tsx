import React from 'react';

const MoleculeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a10 10 0 1 0 10 10" />
    <path d="M12 8a4 4 0 1 0 4 4" />
    <path d="M12 12a6 6 0 0 0-6 6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

export default MoleculeIcon;