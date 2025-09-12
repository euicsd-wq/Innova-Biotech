import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StickyCta: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
            }`}
        >
            <div className="bg-brand-primary/95 backdrop-blur-sm p-4 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
                <div className="max-w-7xl mx-auto flex items-center justify-center sm:justify-between px-4 sm:px-6 lg:px-8">
                    <p className="hidden sm:block text-white font-semibold">
                        Interested in our diagnostic solutions?
                    </p>
                    <Link
                        to="/contact"
                        className="px-6 py-2.5 rounded-full text-sm font-semibold text-brand-primary bg-white hover:bg-light-gray transition-colors duration-300 transform hover:scale-105 shadow-md"
                    >
                        Request a Quote
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default StickyCta;
