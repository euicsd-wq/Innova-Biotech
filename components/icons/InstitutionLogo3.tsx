import React from 'react';

const InstitutionLogo3: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="35" r="10" stroke="currentColor" strokeWidth="3" />
        <circle cx="25" cy="35" r="4" fill="currentColor" />
        <text x="45" y="40" fontFamily="sans-serif" fontSize="18" fill="currentColor" fontWeight="bold" letterSpacing="1">APEX CLINICAL</text>
    </svg>
);

export default InstitutionLogo3;
