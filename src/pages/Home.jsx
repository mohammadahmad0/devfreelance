import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FiCode, FiSmartphone, FiTrendingUp, FiArrowRight } from 'react-icons/fi';

// Components
import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import WhyChooseMe from '../components/WhyChooseMe';
import TestimonialCard from '../components/TestimonialCard';
import CTABanner from '../components/CTABanner';

const Home = () => {
  const services = [
    {
      icon: <FiCode size={24} className="group-hover:text-white transition-colors" />,
      title: "Web Development",
      description: "Custom React websites & web apps built for speed, scalability, and conversion. Firebase backend for real-time power and seamless performance.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      delay: 0.1
    },
    {
      icon: <FiSmartphone size={24} className="group-hover:text-white transition-colors" />,
      title: "App Development",
      description: "Cross-platform mobile apps with React Native. Clean UI, smooth UX, and Firebase-powered real-time data sync for your users.",
      tags: ["React Native", "Firebase", "REST API"],
      delay: 0.2
    },
    {
      icon: <FiTrendingUp size={24} className="group-hover:text-white transition-colors" />,
      title: "SEO Services",
      description: "On-page & off-page SEO that gets your site ranking on top of Google. Keyword research, technical audits, and monthly growth strategies.",
      tags: ["On-Page SEO", "Google Search Console", "Content Strategy"],
      delay: 0.3
    }
  ];

  const projects = [
    {
      title: "SolarOne Energy",
      description: "Comprehensive solar energy company website with interactive service pages and Lead Gen forms, built for visibility and conversion.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      delay: 0.1,
      image: null // Placeholder handled in component
    },
    {
      title: "CoreBuild Africa",
      description: "Construction giant website with a detailed project portfolio, dynamic galleries, and high-performance frontend optimization.",
      tags: ["React", "Firebase", "Framer Motion"],
      delay: 0.2,
      image: null
    },
    {
      title: "Explore Algo",
      description: "High-performance algorithmic trading platform with real-time analytics, user dashboards, and secure Firebase authentication.",
      tags: ["React", "Firebase Auth", "Firestore"],
      delay: 0.3,
      image: null
    }
  ];

  const testimonials = [
    {
      quote: "Mohammad delivered far beyond my expectations. Our technical SEO metrics skyrocketed and the new site is faster than ever. A true professional who understands both coding and business outcomes.",
      name: "Marcus Thorne",
      company: "EcoSphere Solutions",
      country: "United Kingdom",
      rating: 5,
      delay: 0.1
    },
    {
      quote: "Working with Mohammad was a game-changer for our startup. The mobile app he built is incredibly smooth and handles our real-time data perfectly. Communication was always top-notch.",
      name: "Sarah Jenkins",
      company: "Velocity Tech",
      country: "Canada",
      rating: 5,
      delay: 0.2
    },
    {
      quote: "The web application Mohammad developed for our platform is flawless. Pixel-perfect design and exceptional backend architecture. He is definitely our go-to for all future development needs.",
      name: "Ahmed Al-Farsi",
      company: "Desert Digital",
      country: "UAE",
      rating: 5,
      delay: 0.3
    }
  ];

  return (
    <AnimatePresence>
      <Helmet>
        <title>Mohammad Ahmad | Full-Stack Developer & SEO Specialist</title>
        <meta name="description" content="I build high-performance web & mobile applications using React & Firebase — then drive organic traffic to them through expert SEO strategies." />
      </Helmet>
      
      <main className="bg-dark overflow-x-hidden">
        {/* HERO SECTION */}
        <HeroSection />

        {/* STATS BAR */}
        <StatsBar />

        {/* FEATURED SERVICES SECTION */}
        <section className="py-24 relative overflow-hidden bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-title italic"
              >
                What I Do
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="section-subtitle italic"
              >
                End-to-end digital solutions — from pixel-perfect design to Google Page 1.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <ServiceCard key={idx} {...service} />
              ))}
            </div>
          </div>
          
          {/* Subtle decor */}
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/5 blur-[100px] pointer-events-none rounded-full" />
        </section>

        {/* RECENT WORK SECTION */}
        <section className="py-24 relative bg-dark/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-title italic"
              >
                Recent Work
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="section-subtitle italic"
              >
                Real projects. Real results. Check out my latest premium builds.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-20 text-center"
            >
              <Link to="/portfolio" className="btn-outline inline-flex items-center gap-2 px-10 border-white/10 group">
                See All Projects
                <FiArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* WHY CHOOSE ME SECTION */}
        <WhyChooseMe />

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 relative overflow-hidden bg-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="section-title italic"
              >
                What Clients Say
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="section-subtitle italic"
              >
                Building trust through high-performance engineering & exceptional growth strategies.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <TestimonialCard key={idx} {...test} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA BANNER SECTION */}
        <CTABanner />
      </main>
    </AnimatePresence>
  );
};

export default Home;
