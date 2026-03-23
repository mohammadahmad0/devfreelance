import React from 'react';
import { motion } from 'framer-motion';
import { FiZap, FiCheckCircle, FiSearch, FiCode, FiTrendingUp, FiMessageSquare } from 'react-icons/fi';

const WhyChooseMe = () => {
  const points = [
    {
      icon: <FiZap size={24} className="text-yellow-500" />,
      title: "Fast Delivery",
      description: "Projects delivered on time, every time. I optimize my workflow for speed without sacrificing quality."
    },
    {
      icon: <FiCheckCircle size={24} className="text-green-500" />,
      title: "Premium Quality",
      description: "Clean code, pixel-perfect design. I follow industry-standard best practices to ensure maintainable code."
    },
    {
      icon: <FiSearch size={24} className="text-blue-500" />,
      title: "SEO-First Approach",
      description: "Every site is built with SEO fundamentals in mind, ensuring your site is search-engine friendly from day one."
    },
    {
      icon: <FiCode size={24} className="text-purple-500" />,
      title: "Full-Stack Expertise",
      description: "From Frontend to Backend and Databases, I handle the entire development lifecycle seamlessly."
    },
    {
      icon: <FiTrendingUp size={24} className="text-orange-500" />,
      title: "Data-Driven Results",
      description: "I use data and analytics to drive decisions, ensuring your website or app achieves its business goals."
    },
    {
      icon: <FiMessageSquare size={24} className="text-cyan-500" />,
      title: "Transparent Communication",
      description: "Regular updates and no surprises. I keep you informed at every stage of the development process."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Why Work With Me?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle"
          >
            I combine engineering excellence with business growth strategies to deliver 
            products that don't just look good, but perform exceptionally.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-3 group-hover:text-primary transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed italic">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[150px] pointer-events-none -z-10 rounded-full" />
    </section>
  );
};

export default WhyChooseMe;
