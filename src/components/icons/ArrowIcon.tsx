import React from 'react';

const ArrowIcon: React.FC<{ className?: string; direction: 'up' | 'down' | 'left' | 'right' }> = ({ className, direction }) => {
    const d = {
        up: "M4.5 15.75l7.5-7.5 7.5 7.5",
        down: "M19.5 8.25l-7.5 7.5-7.5-7.5",
        left: "M15.75 19.5L8.25 12l7.5-7.5",
        right: "M8.25 4.5l7.5 7.5-7.5 7.5"
    }[direction];

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d={d} />
        </svg>
    );
};

export default ArrowIcon;