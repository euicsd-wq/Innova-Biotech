import React from 'react';

const BeakerIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c.252 0 .504 0 .759.011M9.75 3.104A2.25 2.25 0 0012 5.354M12 5.354v5.714a2.25 2.25 0 00.659 1.591L18.646 18.5M12 5.354c.252 0 .504 0 .759.011m-1.5 0A2.25 2.25 0 0114.25 3.104m-1.5 0c-.252 0-.504 0-.759.011M14.25 3.104v5.714a2.25 2.25 0 00.659 1.591L21 14.5M14.25 3.104c-.252 0-.504 0-.759.011m-.5 0a2.25 2.25 0 00-1.5-2.242" />
    </svg>
);

export default BeakerIcon;
