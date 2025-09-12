import React from 'react';

const ImpactIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m-4.5-3.5h9M3.75 12a8.25 8.25 0 018.25-8.25 8.25 8.25 0 018.25 8.25 8.25 8.25 0 01-8.25 8.25A8.25 8.25 0 013.75 12z" />
  </svg>
);

export default ImpactIcon;