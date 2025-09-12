import React from 'react';

const SalivaIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 21a2.25 2.25 0 01-2.25-2.25v-3.375c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v3.375c0 1.242-1.008 2.25-2.25 2.25zM17.25 21a2.25 2.25 0 002.25-2.25v-3.375c0-.621-.504-1.125-1.125-1.125h-1.5c-.621 0-1.125.504-1.125 1.125v3.375c0 1.242 1.008 2.25 2.25 2.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a6 6 0 00-6-6h12a6 6 0 00-6 6z" />
    </svg>
);

export default SalivaIcon;
