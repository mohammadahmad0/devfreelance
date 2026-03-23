import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Freelance Web & App Developer & SEO Specialist | DEVFREELANCE</title>
        <meta name="description" content="A passionate software engineer specializing in scalable applications and data-driven SEO techniques." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-12"
      >
        <div className="max-w-7xl mx-auto px-4 text-center mt-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
          <p className="text-gray-400 max-w-2xl mx-auto italic mb-12">
            A software professional with years of expertise in full-stack development and market-leading SEO.
          </p>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-24">
            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl flex flex-col justify-center">
              <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6">Developer Bio</h3>
              <p className="text-gray-400 font-light mb-8">
                I'm a passionate developer focusing on scalable web and app solutions that drive results.
              </p>
              <Link to="/portfolio" className="btn-primary inline-block text-center w-full sm:w-auto">Explore Portfolio</Link>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-12 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">My Specialties</h3>
              <ul className="space-y-4">
                {['React.js & Next.js', 'Firebase & Firestore', 'UI/UX with Tailwind CSS', 'Algorithm Trading Platforms', 'On-Page & Technical SEO'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 font-light text-sm italic">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <h4 className="text-gray-400 uppercase tracking-widest text-[10px] font-bold mb-4 italic">Experience</h4>
                <p className="text-2xl font-bold">5+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
