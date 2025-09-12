import React from 'react';

const InstitutionLogo1: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 200 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30 Q 20 10, 30 30 T 50 30" stroke="currentColor" strokeWidth="3" fill="none" />
        <text x="60" y="38" fontFamily="serif" fontSize="22" fontWeight="bold">Global Health</text>
        <text x="60" y="55" fontFamily="serif" fontSize="14">INSTITUTE</text>
    </svg>
);

export default InstitutionLogo1;
