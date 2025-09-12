import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description, align = 'center' }) => {
  const alignmentClass = align === 'center' ? 'text-center' : 'text-left';
  const marginClass = align === 'center' ? 'mx-auto' : '';
  
  return (
    <div className={alignmentClass}>
      {subtitle && <h2 className="text-base font-semibold text-brand-secondary uppercase tracking-wider">{subtitle}</h2>}
      <p className={`mt-2 text-3xl font-extrabold text-text-primary sm:text-4xl tracking-tight ${marginClass} max-w-3xl`}>
        {title}
      </p>
      {description && <p className={`mt-4 max-w-2xl text-lg text-text-secondary leading-8 ${marginClass}`}>
        {description}
      </p>}
    </div>
  );
};

export default SectionHeader;
