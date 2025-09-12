import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-brand-dark-bg text-white overflow-hidden">
            <div className="absolute inset-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    src="https://cdn.innovadx.com/videos/hero-background-abstract-plexus.mp4"
                    className="w-full h-full object-cover opacity-20"
                ></video>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-bg via-brand-dark-bg/80 to-transparent"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-48 text-center">
                <AnimatedSection as="h1" className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
                    <span className="block">Building the Future of</span>
                    <span className="block text-brand-secondary">Diagnostic Solutions</span>
                </AnimatedSection>
                <AnimatedSection as="p" delay={0.2} className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-gray-300 leading-8">
                    We are democratizing global health by developing innovative diagnostic solutions that deliver critical health insights to everyone, everywhere.
                </AnimatedSection>
                <AnimatedSection as="div" delay={0.4} className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/about" className="px-8 py-3 rounded-full text-base font-semibold text-white bg-brand-secondary hover:opacity-90 transition-all duration-300 transform hover:scale-105 animate-subtle-glow shadow-lg">
                        Discover Our Mission
                    </Link>
                     <Link to="/products" className="px-8 py-3 rounded-full text-base font-semibold text-white bg-white/10 ring-1 ring-inset ring-white/30 hover:bg-white/20 transition-colors duration-300">
                        Explore Our Portfolio
                    </Link>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default Hero;