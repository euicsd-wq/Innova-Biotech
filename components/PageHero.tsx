import React from 'react';
import AnimatedSection from './AnimatedSection';
import Breadcrumbs from './Breadcrumbs';

interface Breadcrumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string; // Small text above title
  description?: string; // Large text below title
  image: string;
  breadcrumbs?: Breadcrumb[];
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle, description, image, breadcrumbs }) => {
  return (
    <>
      {breadcrumbs && <Breadcrumbs crumbs={breadcrumbs} />}
      <div className="relative bg-brand-primary text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-10 animate-background-pan"
            src={image}
            alt="Abstract background"
            style={{ backgroundSize: '150%'}}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            {subtitle && <p className="text-base font-semibold text-brand-secondary uppercase tracking-wider">{subtitle}</p>}
            <h1 className={`mt-3 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight ${!subtitle && 'pt-4'}`}>
              {title}
            </h1>
            {description && 
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
                {description}
              </p>
            }
          </AnimatedSection>
        </div>
      </div>
    </>
  );
};

export default PageHero;
