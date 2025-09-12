import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter: React.FC<{ target: number; duration?: number; text: string; suffix?: string; }> = ({ target, duration = 2000, text, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * (end - start) + start));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl sm:text-5xl font-extrabold text-brand-secondary">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-base text-text-secondary">{text}</p>
    </div>
  );
};

export default Counter;
