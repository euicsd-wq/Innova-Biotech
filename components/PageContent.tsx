
import React from 'react';
import AnimatedSection from './AnimatedSection';

interface PageContentProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const PageContent: React.FC<PageContentProps> = ({ title, subtitle, children }) => {
  return (
    <div className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="max-w-3xl">
                 <div className="relative">
                    <h1 className="text-4xl font-extrabold text-text-primary sm:text-5xl lg:text-6xl tracking-tight">
                        {title}
                    </h1>
                    <div className="absolute -bottom-4 left-0 w-24 h-1.5 bg-brand-secondary rounded-full" />
                </div>
                {subtitle && (
                  <p className="mt-8 text-lg text-text-secondary leading-8">
                    {subtitle}
                  </p>
                )}
            </AnimatedSection>
            <div className="mt-20">
                {children}
            </div>
        </div>
    </div>
  );
};

export default PageContent;