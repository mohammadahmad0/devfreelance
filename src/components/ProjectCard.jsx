import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ title, description, tags, delay, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="glass-card group relative flex flex-col items-center p-8 border-white/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
    >
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Project Image Placeholder */}
        <div className="w-full h-56 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center mb-8 relative group-hover:bg-primary/10 transition-colors duration-500 overflow-hidden">
          {image ? (
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" />
          ) : (
            <span className="text-gray-600 font-bold uppercase tracking-widest text-xs italic">
              Project Preview / Screenshot
            </span>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <h3 className="text-3xl font-bold mb-4 font-heading group-hover:text-primary transition-colors duration-300 italic">
          {title}
        </h3>
        
        <p className="text-gray-400 font-light leading-relaxed mb-8 flex-grow text-center text-sm md:text-base italic">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-gray-400 uppercase tracking-widest group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 w-full">
          <a 
            href={link ? (link.startsWith('http') ? link : `https://${link}`) : '#'} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary flex-grow text-sm uppercase tracking-widest font-bold py-3 text-center transition-all bg-gradient-to-r group-hover:from-primary group-hover:to-secondary"
          >
            Live Site →
          </a>
          <Link to="/portfolio" className="btn-outline flex-grow text-sm uppercase tracking-widest font-bold py-3 border border-white/10 group-hover:border-primary/30">
            Details →
          </Link>
        </div>
      </div>
      
      {/* Background radial glow */}
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/10 blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-all duration-700" />
    </motion.div>
  );
};

export default ProjectCard;
