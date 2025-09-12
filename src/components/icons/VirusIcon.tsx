import React from 'react';

const VirusIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 12l-1.5-1.5m3 3l1.5 1.5m-3-4.5l1.5-1.5m-3 0l-1.5 1.5m6 3l-1.5 1.5m-4.5-3l-1.5-1.5m7.5 0l1.5-1.5m-6 4.5l-1.5 1.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3V1.5m0 21V21m9-9h1.5m-21 0H3m16.071-7.071l1.061-1.061m-14.142 0l-1.061 1.061m14.142 14.142l-1.061-1.061m-12.02 0l1.061-1.061" />
  </svg>
);

export default VirusIcon;
