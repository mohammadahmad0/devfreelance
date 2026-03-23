import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Portfolio | Web & App Development Projects | DEVFREELANCE</title>
        <meta name="description" content="View our latest portfolio of high-performance web and app development projects built with React." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-12"
      >
        <div className="max-w-7xl mx-auto px-4 text-center mt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic mb-12">
            Showcasing high-end digital experiences built with precision and modern technology.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder project cards */}
            {['SolarOne Energy', 'CoreBuild Africa', 'Explore Algo'].map((project) => (
              <div key={project} className="glass-card group cursor-pointer hover:border-primary/40 transition-all duration-300">
                <div className="w-full h-64 bg-white/5 flex items-center justify-center mb-6 text-gray-400 group-hover:bg-white/10 transition-colors duration-300">
                  <span className="text-sm uppercase tracking-widest font-light">Project Thumbnail</span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project}</h3>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {['React', 'Firebase', 'Tailwind'].map((tech) => (
                      <span key={tech} className="text-[10px] font-bold bg-white/5 border border-white/10 px-2 py-0.5 rounded text-gray-400 uppercase tracking-widest">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link to="#" className="text-primary hover:underline text-sm font-medium">View Project →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
