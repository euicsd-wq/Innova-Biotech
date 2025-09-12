import React from 'react';

const TRFIAIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.84 6.988 6 7.632 6 8.5v3c0 .868.84 1.512 1.976 1.434C9.303 12.944 10.645 13 12 13m0 0c1.355 0 2.697-.056 4.024-.166C17.16 12.738 18 12.094 18 11.25v-3c0-.868-.84-1.512-1.976-1.434C14.697 6.756 13.355 6.75 12 6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 21v-1.5M4.929 4.929l1.061 1.061M18.01 18.01l1.061 1.061M4.929 19.071l1.061-1.061M18.01 5.99l1.061-1.061" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12h-1.5M4.5 12H3" />
    </svg>
);

export default TRFIAIcon;