import React, { useState, useEffect } from 'react';
import ArrowIcon from './icons/ArrowIcon';

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={scrollToTop}
                className={`bg-brand-primary text-white rounded-full p-3 shadow-lg hover:bg-brand-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-secondary transition-all duration-300 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
                aria-label="Go to top"
            >
                <ArrowIcon direction="up" className="h-6 w-6" />
            </button>
        </div>
    );
};

export default BackToTopButton;