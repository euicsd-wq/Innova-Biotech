import React from 'react';

const TestTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.128 1.93a1.5 1.5 0 012.744 0L12 2.25h.008l.128-.32a1.5 1.5 0 012.744 0l.128.32H15.75a1.5 1.5 0 011.5 1.5v13.5a1.5 1.5 0 01-1.5 1.5H8.25a1.5 1.5 0 01-1.5-1.5V3.75a1.5 1.5 0 011.5-1.5h.75l.128-.32zM9.75 12h4.5M9.75 15h4.5M12 6.75v.008" />
    </svg>
);

export default TestTubeIcon;
