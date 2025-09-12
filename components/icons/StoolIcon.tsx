import React from 'react';

const StoolIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M12 6.75a2.25 2.25 0 012.25 2.25v0a2.25 2.25 0 01-2.25 2.25H9.75M12 6.75a2.25 2.25 0 00-2.25 2.25v0a2.25 2.25 0 002.25 2.25h2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5h15a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5h-15a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5z" />
    </svg>
);

export default StoolIcon;
