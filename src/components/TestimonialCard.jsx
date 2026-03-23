import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ quote, name, company, country, rating, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="glass-card p-10 relative flex flex-col justify-between"
    >
      <div className="relative z-10">
        {/* Rating */}
        <div className="flex gap-1 mb-6 text-yellow-500">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
            </svg>
          ))}
        </div>
        
        <p className="text-gray-300 text-lg md:text-xl font-body italic leading-relaxed mb-10 opacity-80 group-hover:opacity-100 transition-opacity">
          "{quote}"
        </p>
      </div>
      
      <div className="relative z-10 flex items-center justify-between mt-auto">
        <div>
          <h4 className="text-white font-bold font-heading text-lg">{name}</h4>
          <p className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-bold font-heading italic">
            {company} — {country}
          </p>
        </div>
        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 p-8 text-white/5 pointer-events-none group-hover:text-primary/10 transition-colors">
        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
