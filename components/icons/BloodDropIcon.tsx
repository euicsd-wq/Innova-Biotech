import React from 'react';

const BloodDropIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c3.75 0 6.75-3.75 6.75-7.5S15.75 3 12 3 5.25 6.75 5.25 14.25 8.25 21.75 12 21.75z" />
    </svg>
);

export default BloodDropIcon;
