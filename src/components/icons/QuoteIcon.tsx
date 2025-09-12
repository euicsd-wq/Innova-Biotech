import React from 'react';

const QuoteIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-2.908 1.696-5.222 4.137-5.222 1.29 0 2.336.435 2.852 1.235l-1.736 1.488c-.28-.435-.747-.71-1.116-.71-.78 0-1.428.63-1.428 1.428v7.172h-2.71zM4.017 21v-7.391c0-2.908 1.696-5.222 4.137-5.222 1.29 0 2.336.435 2.852 1.235l-1.736 1.488c-.28-.435-.747-.71-1.116-.71-.78 0-1.428.63-1.428 1.428v7.172h-2.71z" />
  </svg>
);

export default QuoteIcon;
