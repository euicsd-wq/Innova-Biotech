import React from 'react';

const InstitutionLogo4: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20 L 30 40 L 50 20" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
        <text x="60" y="40" fontFamily="serif" fontSize="24" fill="currentColor" fontStyle="italic">Innovate</text>
        <text x="145" y="40" fontFamily="serif" fontSize="24" fill="currentColor">Bio</text>
    </svg>
);

export default InstitutionLogo4;
