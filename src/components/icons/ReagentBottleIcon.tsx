import React from 'react';

const ReagentBottleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5v6.75a.75.75 0 01-1.5 0v-5.25H9.75v5.25a.75.75 0 01-1.5 0V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 6h13.5v12a2.25 2.25 0 01-2.25 2.25H7.5A2.25 2.25 0 015.25 18V6zM9 3.75h6" />
    </svg>
);

export default ReagentBottleIcon;
