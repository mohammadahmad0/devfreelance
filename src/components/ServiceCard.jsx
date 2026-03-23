import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, tags, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="glass-card p-10 group relative h-full flex flex-col justify-between"
    >
      <div className="relative z-10 flex flex-col h-full">
        {/* Animated Icon Container */}
        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-8 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold mb-4 font-heading">{title}</h3>
        <p className="text-gray-400 font-light leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-gray-400 uppercase tracking-widest group-hover:border-primary/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all"
        >
          Explore Service
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
      
      {/* Subtle Gradient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    </motion.div>
  );
};

export default ServiceCard;
