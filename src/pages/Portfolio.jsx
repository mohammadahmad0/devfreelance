import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';

// Project Images
import solareonImg from '../assets/projects/solareon.png';
import corebuildImg from '../assets/projects/corebuild.png';
import explorealgoImg from '../assets/projects/explorealgo.png';

const Portfolio = () => {
  const projects = [
    {
      title: "Solareon Energy",
      description: "Comprehensive solar energy company website with interactive service pages and Lead Gen forms, built for visibility and conversion.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      delay: 0.1,
      image: solareonImg,
      link: "www.solareonenergy.com"
    },
    {
      title: "CoreBuild Africa",
      description: "Construction giant website with a detailed project portfolio, dynamic galleries, and high-performance frontend optimization.",
      tags: ["React", "Firebase", "Framer Motion"],
      delay: 0.2,
      image: corebuildImg,
      link: "www.corebuildafrica.com"
    },
    {
      title: "Explore Algo",
      description: "High-performance algorithmic trading platform with real-time analytics, user dashboards, and secure Firebase authentication.",
      tags: ["React", "Firebase Auth", "Firestore"],
      delay: 0.3,
      image: explorealgoImg,
      link: "www.explorealgo.com"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio | Web & App Development Projects | Mohammad Ahmad</title>
        <meta name="description" content="View our latest portfolio of high-performance web and app development projects built with React." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-24 pb-12 bg-grid min-h-screen"
      >
        <div className="max-w-7xl mx-auto px-4 mt-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-heading italic">Our Featured Work</h1>
            <p className="text-gray-400 max-w-2xl mx-auto italic mb-12">
              Every project is a blend of precision engineering and strategic conversion-focused design.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Portfolio;
