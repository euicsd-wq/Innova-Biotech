import React from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  staggerChildren?: number;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  as: Component = 'div',
  staggerChildren = 0,
  delay = 0,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  const baseStyle: React.CSSProperties = {
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    opacity: 0,
    transform: 'translateY(24px)',
  };

  const activeStyle: React.CSSProperties = {
    opacity: 1,
    transform: 'translateY(0px)',
  };

  const getChildStyle = (index: number): React.CSSProperties => {
    const childDelay = delay + (staggerChildren * index);
    return {
      ...baseStyle,
      transitionDelay: `${childDelay}s`,
      ...(inView ? activeStyle : {}),
    };
  };

  if (staggerChildren > 0 && React.Children.count(children) > 1) {
    return (
      <Component ref={ref} className={className}>
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child)) {
            const element = child as React.ReactElement<{ style?: React.CSSProperties }>;
            return React.cloneElement(element, {
              style: {
                ...element.props.style,
                ...getChildStyle(index),
              },
            });
          }
          return child;
        })}
      </Component>
    );
  }

  return (
    <Component
      ref={ref}
      className={className}
      style={{
        ...baseStyle,
        transitionDelay: `${delay}s`,
        ...(inView ? activeStyle : {}),
      }}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
