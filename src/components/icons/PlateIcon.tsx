import React from 'react';

const PlateIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h12A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9v.008h.008V9H8.25zm3.75 0v.008h.008V9h-.008zm3.75 0v.008h.008V9h-.008zM8.25 12v.008h.008v-.008H8.25zm3.75 0v.008h.008v-.008h-.008zm3.75 0v.008h.008v-.008h-.008zM8.25 15v.008h.008v-.008H8.25zm3.75 0v.008h.008v-.008h-.008zm3.75 0v.008h.008v-.008h-.008z" />
    </svg>
);

export default PlateIcon;