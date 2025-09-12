import React from 'react';

const TeamIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.964A3 3 0 0115 12a3 3 0 01-1.837 2.825M9 14.25a3 3 0 01-2.121-5.121A3 3 0 019 6a3 3 0 012.121 5.121M12 13.5v-3m0 3h3m-3 0h-3" />
  </svg>
);

export default TeamIcon;
