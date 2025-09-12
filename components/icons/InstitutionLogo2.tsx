import React from 'react';

const InstitutionLogo2: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="20" width="20" height="20" />
        <text x="40" y="38" fontFamily="sans-serif" fontSize="20" fontWeight="bold">TECH</text>
        <text x="105" y="38" fontFamily="sans-serif" fontSize="20" fontWeight="300">UNIVERSITY</text>
    </svg>
);

export default InstitutionLogo2;
