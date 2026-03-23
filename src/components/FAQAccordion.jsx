import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const FAQAccordion = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 transition-all duration-300 hover:bg-white/[0.02] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 px-4 text-left transition-all duration-300 focus:outline-none group"
      >
        <span className={`text-lg transition-all duration-300 pr-4 ${isOpen ? 'text-primary font-bold' : 'text-gray-200 group-hover:text-white'}`}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`flex-shrink-0 transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-gray-500'}`}
        >
          <FiChevronDown size={20} />
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-6 prose prose-invert prose-sm max-w-none text-gray-400 leading-relaxed font-light">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FAQAccordion;
