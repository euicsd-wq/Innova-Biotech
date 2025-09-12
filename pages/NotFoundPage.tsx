
import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const NotFoundPage: React.FC = () => {
    return (
        <div className="bg-white flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
            <div className="max-w-md w-full text-center">
                <AnimatedSection>
                    <h1 className="text-8xl font-extrabold text-brand-primary tracking-tighter">404</h1>
                    <p className="mt-2 text-2xl font-semibold text-text-primary">Page Not Found</p>
                    <p className="mt-4 text-text-secondary">
                        Sorry, we couldn’t find the page you’re looking for. It might have been moved or deleted.
                    </p>
                </AnimatedSection>
                <AnimatedSection delay={0.2}>
                    <Link
                        to="/"
                        className="mt-8 inline-flex items-center justify-center px-7 py-3 text-base font-medium rounded-full text-white brand-gradient transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        Go Back Home
                    </Link>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default NotFoundPage;
