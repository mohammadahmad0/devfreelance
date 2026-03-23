import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTABanner = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark to-primary/20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="glass-card p-12 md:p-20 border-white/10 overflow-visible relative"
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[120px] -z-10 rounded-full" />
          
          <h2 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight leading-tight">
            Ready to Build <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent italic">
              Something Great?
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto italic leading-relaxed">
            Let's discuss your project and bring your vision to life with 
            premium code and performance-first SEO.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 group">
              Start a Project
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/pricing" className="btn-outline flex items-center justify-center">
              View Pricing
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default CTABanner;
