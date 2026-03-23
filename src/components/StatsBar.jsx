import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

const Counter = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const displayValue = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

const StatsBar = () => {
  const stats = [
    { label: "Projects Delivered", value: 10, suffix: "+" },
    { label: "Countries Served", value: 3, suffix: "" },
    { label: "Average Rating", value: 5, suffix: "★" },
    { label: "Years Experience", value: 2, suffix: "+" },
  ];

  return (
    <section className="py-12 bg-dark/50 border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              <span className="text-4xl md:text-5xl font-extrabold font-heading text-primary group-hover:text-secondary mb-2 transition-colors">
                <Counter value={stat.value} suffix={stat.suffix} />
              </span>
              <span className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-bold font-heading italic opacity-60 group-hover:opacity-100 transition-opacity">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
