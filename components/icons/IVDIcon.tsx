import React from 'react';

const IVDIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6zM12 8.25v7.5M8.25 12h7.5" />
    <rect x="9" y="8" width="6" height="4" strokeWidth="0" fillOpacity="0.2" rx="1" />
  </svg>
);

export default IVDIcon;