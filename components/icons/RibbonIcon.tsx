import React from 'react';

const RibbonIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 4.5C7.5 3.119 8.619 2 10 2h4c1.381 0 2.5 1.119 2.5 2.5v15c0 1.381-1.119 2.5-2.5 2.5h-4c-1.381 0-2.5-1.119-2.5-2.5v-15z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l-1.5 6-1.5-6m1.5 6v6m0-6h-1.5m1.5 0h1.5m3.75 0l1.5-6-1.5 6m1.5 0v6m0-6h1.5m-1.5 0h-1.5" />
    </svg>
);

export default RibbonIcon;