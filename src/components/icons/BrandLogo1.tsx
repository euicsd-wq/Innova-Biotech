// FIX: Populated empty component file to resolve module import error.
import React from 'react';

const BrandLogo1: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 30C10 18.9543 18.9543 10 30 10C41.0457 10 50 18.9543 50 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M40 20L50 30" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <text x="60" y="28" fontFamily="sans-serif" fontSize="20" fill="currentColor" fontWeight="bold">NEXUS</text>
    </svg>
);

export default BrandLogo1;
