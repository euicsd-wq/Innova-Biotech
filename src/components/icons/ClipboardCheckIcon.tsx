import React from 'react';

const ClipboardCheckIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 00-7.5 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6v3.75m0 0v3.75m0-3.75H9.75m6 0h-3.375" />
    </svg>
);

export default ClipboardCheckIcon;
