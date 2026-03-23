import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark/80 backdrop-blur-lg border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Bio */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              DEVFREELANCE
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed font-light">
              High-end web development and SEO services. Build your presence with premium tech and results-driven strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'Pricing', 'Portfolio'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Social</h3>
            <ul className="space-y-4">
              {['GitHub', 'LinkedIn', 'Twitter', 'Instagram'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-6">Location</h3>
            <p className="text-gray-400 text-sm">Pakistan (Remote)</p>
            <p className="text-gray-400 text-sm mt-4">mohammad@example.com</p>
            <Link to="/contact" className="mt-8 inline-block text-primary hover:underline text-sm font-medium">
              Let's build something →
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center font-light">
            © {new Date().getFullYear()} DEVFREELANCE. Designed for high performance and premium experiences.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-gray-500 hover:text-white transition-colors text-xs font-light">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-500 hover:text-white transition-colors text-xs font-light">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
