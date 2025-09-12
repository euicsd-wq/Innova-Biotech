import React from 'react';

const GlobalSupportIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 110-18 9 9 0 010 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 110-6 3 3 0 010 6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.929 4.929l2.121 2.121m10.001-2.121l-2.121 2.121m0 10.001l2.121 2.121m-10.001 0l2.121-2.121" />
    </svg>
);

export default GlobalSupportIcon;
