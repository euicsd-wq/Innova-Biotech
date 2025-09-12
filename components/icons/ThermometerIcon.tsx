import React from 'react';

const ThermometerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75v10.5M12 6.75a2.25 2.25 0 012.25 2.25v0a2.25 2.25 0 01-2.25 2.25H9.75M12 6.75a2.25 2.25 0 00-2.25 2.25v0a2.25 2.25 0 002.25 2.25h.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75h9" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
    </svg>
);

export default ThermometerIcon;
