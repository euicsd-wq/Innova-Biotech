import React from 'react';

const CassetteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5h7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v7.5" />
        <circle cx="12" cy="14.25" r="1.5" strokeWidth="1.5" />
    </svg>
);

export default CassetteIcon;