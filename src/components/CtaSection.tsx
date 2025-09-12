import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

interface CtaSectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  bgColorClass?: string;
  textColorClass?: string;
  buttonBgColorClass?: string;
  buttonTextColorClass?: string;
  buttonHoverBgClass?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  bgColorClass = 'bg-brand-secondary',
  textColorClass = 'text-white',
  buttonBgColorClass = 'bg-white',
  buttonTextColorClass = 'text-brand-secondary',
  buttonHoverBgClass = 'hover:bg-light-gray',
}) => {
  return (
    <section className={bgColorClass}>
      <AnimatedSection className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className={`text-3xl font-extrabold ${textColorClass} sm:text-4xl`}>
          {title}
        </h2>
        <p className={`mt-4 text-lg leading-6 ${textColorClass}/90`}>
          {subtitle}
        </p>
        <Link
          to={buttonLink}
          className={`mt-8 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full ${buttonTextColorClass} ${buttonBgColorClass} ${buttonHoverBgClass} transition-colors transform hover:scale-105`}
        >
          {buttonText}
        </Link>
      </AnimatedSection>
    </section>
  );
};

export default CtaSection;