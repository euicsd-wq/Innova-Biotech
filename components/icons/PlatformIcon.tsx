import React from 'react';

const PlatformIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v.467c0 .28.106.55.298.758l.19.19c.294.293.77.293 1.064 0l.19-.19a1.01 1.01 0 00.298-.758v-.467M15 17.25v.467c0 .28-.106.55-.298.758l-.19.19a.75.75 0 01-1.064 0l-.19-.19a1.01 1.01 0 01-.298-.758v-.467M10.5 6h3M12 3v3M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
  </svg>
);

export default PlatformIcon;
