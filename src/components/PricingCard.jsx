import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiCheck, FiX } from 'react-icons/fi';

const PricingCard = ({ 
  title, 
  price, 
  subtext, 
  badge, 
  features, 
  delivery, 
  isPopular, 
  ctaText, 
  ctaLink 
}) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`glass-card relative flex flex-col p-8 h-full transition-all duration-300 ${
        isPopular ? 'border-primary/50 ring-2 ring-primary/20 scale-105 z-10' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg shadow-primary/30">
          Most Popular
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <span className="text-sm font-bold text-primary tracking-widest uppercase mb-2 block">
          {badge}
        </span>
        <h3 className="text-2xl font-heading font-bold mb-4">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl lg:text-5xl font-heading font-bold text-white">{price}</span>
          {subtext && <span className="text-gray-400 text-sm ml-1">/ {subtext}</span>}
        </div>
      </div>

      {/* Features */}
      <div className="flex-grow space-y-4 mb-8">
        {features.map((feature, index) => (
          <div key={index} className={`flex items-start gap-3 ${feature.included ? 'text-white' : 'text-gray-500'}`}>
            <span className={`mt-1 flex-shrink-0 ${feature.included ? 'text-green-400' : 'text-gray-500'}`}>
              {feature.included ? <FiCheck size={18} /> : <FiX size={18} />}
            </span>
            <span className="text-sm leading-6">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <div className="text-center text-xs text-gray-400 mb-6 font-medium">
          🚀 Delivery: {delivery}
        </div>
        <Link 
          to={ctaLink} 
          className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
            isPopular 
              ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/30' 
              : 'border border-primary/20 hover:border-primary/60 bg-white/5 text-white hover:bg-primary/10'
          }`}
        >
          {ctaText}
        </Link>
      </div>
    </motion.div>
  );
};

export default PricingCard;
