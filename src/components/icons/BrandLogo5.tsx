// FIX: Populated empty component file to resolve module import error.
import React from 'react';

const BrandLogo5: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 20H30M40 10V30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <text x="55" y="28" fontFamily="serif" fontSize="20" fill="currentColor">EON</text>
    </svg>
);

export default BrandLogo5;
