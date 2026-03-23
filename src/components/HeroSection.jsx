import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import { CONTACT_INFO } from '../data/constants';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-dark pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" />
      <div className="absolute top-1/4 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-wider uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Available for Freelance Work ✦
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">Mohammad Ahmad</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-2xl md:text-3xl font-heading text-primary font-medium mb-6">
              Full-Stack Developer & SEO Specialist
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10">
              I craft high-performance web & mobile applications using React & Firebase — then drive real organic traffic to them through proven SEO strategies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link to="/portfolio" className="btn-primary flex items-center justify-center gap-2 group">
                View My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/contact" className="btn-outline">
                Get a Quote
              </Link>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-6">
              {[
                { icon: <FaWhatsapp size={22} />, link: CONTACT_INFO.whatsapp, label: "WhatsApp" },
                { icon: <FiMail size={22} />, link: `mailto:${CONTACT_INFO.email}`, label: "Email" },
                { icon: <FiLinkedin size={22} />, link: CONTACT_INFO.linkedin, label: "LinkedIn" },
                { icon: <FiGithub size={22} />, link: CONTACT_INFO.github, label: "GitHub" },
                { icon: <FaXTwitter size={20} />, link: CONTACT_INFO.twitterLink, label: "Twitter" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative hidden lg:block"
          >
            {/* Animated Code Block / Shape */}
            <div className="relative z-10 w-full aspect-square flex items-center justify-center">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                  y: [0, -20, 20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-80 h-80 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-3xl border border-white/10 backdrop-blur-3xl flex items-center justify-center shadow-2xl relative"
              >
                <pre className="text-primary/70 font-mono text-sm leading-relaxed p-6">
                  <code>{`const developer = {
  name: "Mohammad Ahmad",
  role: "Full-Stack & SEO",
  skills: ["React", "Firebase", "SEO"],
  mission: "Build & Rank",
  status: "Available"
};`}</code>
                </pre>
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 -right-10 glass-card px-4 py-2 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-500">
                  ⚛️
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Tech Stack</p>
                  <p className="text-sm font-bold">React & Firebase</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
                className="absolute bottom-20 -left-16 glass-card px-4 py-2 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-500">
                  🚀
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">SEO</p>
                  <p className="text-sm font-bold">SEO Certified</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 right-20 glass-card px-4 py-2 flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                  ⭐
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Rating</p>
                  <p className="text-sm font-bold">5★ Client Rating</p>
                </div>
              </motion.div>
            </div>

            {/* Glow behind the shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/20 blur-[150px] -z-10 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
