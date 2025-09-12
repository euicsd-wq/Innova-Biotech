import React from 'react';

const ConsumablesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.944a1.5 1.5 0 01-2.992.062l-.008-.062V9.75m3 0v6.944a1.5 1.5 0 002.992.062l.008-.062V9.75m-3-1.5h.008v.008H12v-.008zM9.75 8.25h.008v.008H9.75V8.25zm4.5 0h.008v.008h-.008V8.25z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18.75a2.25 2.25 0 012.25-2.25h7.5a2.25 2.25 0 012.25 2.25v.75A2.25 2.25 0 0115.75 21.75h-7.5A2.25 2.25 0 016 19.5v-.75z" />
    </svg>
);

export default ConsumablesIcon;