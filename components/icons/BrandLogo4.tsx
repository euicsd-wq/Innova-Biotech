import React from 'react';

const BrandLogo4: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="20" height="20" fill="currentColor"/>
        <rect x="35" y="10" width="20" height="20" fill="currentColor" fillOpacity="0.5"/>
        <text x="65" y="28" fontFamily="sans-serif" fontSize="20" fill="currentColor">APEX</text>
    </svg>
);

export default BrandLogo4;