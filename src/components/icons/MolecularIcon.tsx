import React from 'react';

const MolecularIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l-1.5 1.5-1.5-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5v1.5l1.5 1.5 1.5-1.5V7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 10.5l1.5 1.5 1.5-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 13.5v1.5l-1.5 1.5-1.5-1.5v-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15l1.5 1.5 1.5-1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 18v1.5l-1.5 1.5-1.5-1.5v-1.5" />
    </svg>
);

export default MolecularIcon;
