import React from 'react';

const BrandLogo2: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="4"/>
        <circle cx="45" cy="20" r="10" fill="currentColor" fillOpacity="0.3"/>
        <text x="65" y="28" fontFamily="sans-serif" fontSize="20" fill="currentColor" fontStyle="italic">VITA</text>
    </svg>
);

export default BrandLogo2;