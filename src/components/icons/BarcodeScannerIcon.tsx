import React from 'react';

const BarcodeScannerIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h14.25c.621 0 1.125.504 1.125 1.125v14.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125V4.875z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25v7.5m3-7.5v7.5m3-7.5v7.5m3-7.5v3.75" />
  </svg>
);

export default BarcodeScannerIcon;
