import React from 'react';

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.075c0 1.313-.964 2.5-2.25 2.5h-10.5a2.25 2.25 0 01-2.25-2.5v-4.075M12 1.5V14.25m0 0l3.75-3.75M12 14.25L8.25 10.5" />
    </svg>
);

export default BriefcaseIcon;
