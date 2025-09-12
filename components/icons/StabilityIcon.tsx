import React from 'react';

const StabilityIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6.75l-1.5 1.5-1.5-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 17.25l-1.5-1.5-1.5 1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18" />
    </svg>
);

export default StabilityIcon;