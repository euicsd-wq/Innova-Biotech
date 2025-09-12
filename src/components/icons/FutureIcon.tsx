import React from 'react';

const FutureIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.02 12.02 0 00-5.84-2.56v4.82m5.84 7.38a11.96 11.96 0 01-5.84 2.56v-4.82m5.84-2.56a11.96 11.96 0 00-5.84-2.56v4.82m-3.5-7.38a11.96 11.96 0 00-5.84-2.56v4.82m5.84 2.56a6 6 0 01-5.84-7.38v-4.82" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 2.25 8.25 8.25 0 018.638 5.214L7.5 11.25h9l-1.138-6.036z" />
    </svg>
);

export default FutureIcon;
