import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Web & App Development & SEO | MOHAMMAD AHMAD</title>
        <meta name="description" content="Custom web development, mobile apps, and expert SEO strategy to help your business thrive online." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-12"
      >
        <div className="max-w-7xl mx-auto px-4 text-center mt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic mb-12">
            Build, Optimize, and Scale. From concept to launch, I specialize in 
            delivering high-performance digital products and SEO results.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Cards Skeletons */}
            {['Web Development', 'Mobile App Development', 'SEO Optimization'].map((service) => (
              <div key={service} className="glass-card p-12 text-left group hover:bg-white/10 transition-all duration-300">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service}</h3>
                <p className="text-gray-400 font-light mb-8">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
                <Link to="/contact" className="text-primary hover:underline text-sm font-medium">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

// Simple link helper since I'm not importing it here
const Link = ({ children, to, className }) => <a href={to} className={className}>{children}</a>;

export default Services;
