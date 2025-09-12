import React from 'react';

const SwabIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 21v-8.25l4.125-4.125a3.375 3.375 0 00-4.773-4.773L3 12.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 21a8.25 8.25 0 01-8.25-8.25" />
    </svg>
);

export default SwabIcon;
