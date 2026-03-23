import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import PricingCard from '../components/PricingCard';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';

const Pricing = () => {
  const [seoTab, setSeoTab] = useState('monthly');

  const webPackages = [
    {
      title: 'Starter',
      badge: 'Best for Startups',
      price: '$300',
      subtext: 'One-time payment',
      delivery: '10–15 business days',
      ctaText: 'Get Started →',
      ctaLink: '/contact',
      isPopular: false,
      features: [
        { text: '5-Page Website', included: true },
        { text: 'React + Firebase', included: true },
        { text: 'Mobile Responsive Design', included: true },
        { text: 'Contact Form Integration', included: true },
        { text: 'Basic SEO Setup (Meta tags)', included: true },
        { text: '30 Days Support', included: true },
        { text: 'Authentication System', included: false },
        { text: 'Admin Panel', included: false },
        { text: 'Custom Animations', included: false },
      ]
    },
    {
      title: 'Standard',
      badge: 'Most Popular',
      price: '$700',
      subtext: 'One-time payment',
      delivery: '20–25 business days',
      ctaText: 'Get Started →',
      ctaLink: '/contact',
      isPopular: true,
      features: [
        { text: '10-Page Website', included: true },
        { text: 'React + Firebase', included: true },
        { text: 'Mobile Responsive Design', included: true },
        { text: 'Contact Form Integration', included: true },
        { text: 'Basic SEO Setup (Meta tags)', included: true },
        { text: 'User Authentication System', included: true },
        { text: 'Custom Animations (Framer Motion)', included: true },
        { text: '30 Days Support', included: true },
        { text: 'Admin Panel', included: false },
        { text: 'E-commerce Features', included: false },
      ]
    },
    {
      title: 'Premium',
      badge: 'For Enterprises',
      price: '$1,500+',
      subtext: 'Starting at — Custom quote',
      delivery: '30+ business days',
      ctaText: 'Request a Quote →',
      ctaLink: '/contact',
      isPopular: false,
      features: [
        { text: '10+ Pages (Unlimited)', included: true },
        { text: 'React + Firebase', included: true },
        { text: 'Mobile Responsive Design', included: true },
        { text: 'Contact Form Integration', included: true },
        { text: 'Full SEO Optimization', included: true },
        { text: 'User Authentication System', included: true },
        { text: 'Custom Admin Panel', included: true },
        { text: 'E-commerce / Advanced Features', included: true },
        { text: 'Custom Animations', included: true },
        { text: '60 Days Support', included: true },
      ]
    }
  ];

  const seoPackages = [
    {
      title: 'SEO Basic',
      badge: 'Get Found Online',
      price: '$150/mo',
      subtext: 'Cancel anytime',
      delivery: 'Visible results in 2–3 months',
      ctaText: 'Get Started →',
      ctaLink: '/contact',
      isPopular: false,
      features: [
        { text: '5–10 Keywords Targeted', included: true },
        { text: 'Keyword Research & Strategy', included: true },
        { text: 'On-Page SEO Optimization', included: true },
        { text: 'Meta Tags & Descriptions', included: true },
        { text: 'Page Speed Optimization', included: true },
        { text: 'Monthly Performance Report', included: true },
        { text: 'Competitor Analysis', included: false },
        { text: 'Backlink Building', included: false },
        { text: 'Content Creation', included: false },
      ]
    },
    {
      title: 'SEO Standard',
      badge: 'Most Popular',
      price: '$300/mo',
      subtext: 'Cancel anytime',
      delivery: 'Visible results in 1–2 months',
      ctaText: 'Get Started →',
      ctaLink: '/contact',
      isPopular: true,
      features: [
        { text: '15–20 Keywords Targeted', included: true },
        { text: 'Everything in Basic', included: true },
        { text: 'Deep Keyword Research', included: true },
        { text: 'Competitor Analysis', included: true },
        { text: 'Content Optimization', included: true },
        { text: 'Internal Link Strategy', included: true },
        { text: 'Google Search Console Setup', included: true },
        { text: 'Bi-weekly Reports', included: true },
        { text: 'Backlink Building', included: false },
        { text: 'Social Media Signals', included: false },
      ]
    },
    {
      title: 'SEO Advanced',
      badge: 'Maximum Growth',
      price: 'Quote',
      subtext: 'Custom monthly pricing',
      delivery: 'Accelerated results in 4–6 weeks',
      ctaText: 'Request a Quote →',
      ctaLink: '/contact',
      isPopular: false,
      features: [
        { text: '25–40 Keywords Targeted', included: true },
        { text: 'Everything in Standard', included: true },
        { text: 'Backlink Building Campaign', included: true },
        { text: 'Social Media Signals', included: true },
        { text: 'Technical SEO Audit', included: true },
        { text: 'Competitor Backlink Analysis', included: true },
        { text: 'Weekly Detailed Reports', included: true },
        { text: 'Dedicated Account Manager', included: true },
      ]
    }
  ];

  const customPackages = [
    {
      title: 'AI & Machine Learning',
      badge: 'Future-Proof Your Business',
      price: 'Quote',
      subtext: 'Starting from — Custom solution',
      delivery: 'Project-based timeline',
      ctaText: 'Get a Quote →',
      ctaLink: '/contact',
      isPopular: false,
      features: [
        { text: 'Custom AI Chatbots (OpenAI/Gemini)', included: true },
        { text: 'AI Business Automation Workflow', included: true },
        { text: 'Natural Language Processing (NLP)', included: true },
        { text: 'Data Analysis & Predictive Models', included: true },
        { text: 'Integration with Existing Apps', included: true },
        { text: 'Custom LLM Implementation', included: true },
        { text: 'Maintenance & Optimization', included: true },
      ]
    },
    {
      title: 'Startup Development',
      badge: 'From Idea to Reality',
      price: 'Quote',
      subtext: 'Complete MVP/Product build',
      delivery: 'Custom timeline',
      ctaText: 'Start Building →',
      ctaLink: '/contact',
      isPopular: true,
      features: [
        { text: 'Market Research & Tech Planning', included: true },
        { text: 'MVP Development (Web & App)', included: true },
        { text: 'End-to-End Product Architecture', included: true },
        { text: 'User Testing & Launch Support', included: true },
        { text: 'Scalable cloud infrastructure', included: true },
        { text: 'Investor-Ready Documentation', included: true },
        { text: 'Ongoing Technical Advisory', included: true },
      ]
    }
  ];

  const faqData = {
    web: [
      {
        q: "What's included in all web development packages?",
        a: "All packages include mobile-responsive design, React + Firebase tech stack, contact form integration, basic SEO meta tags, and 30 days of post-launch support. Higher tiers add authentication, admin panels, and advanced features."
      },
      {
        q: "Can I customize a package to fit my needs?",
        a: "Absolutely. Every project is unique. Contact me and we'll build a custom package tailored specifically to your requirements and budget."
      },
      {
        q: "Do you offer maintenance after project delivery?",
        a: "Yes. All packages include 30–60 days of free support. After that, monthly maintenance plans are available starting at $50/month."
      },
      {
        q: "What payment methods do you accept?",
        a: "I accept bank transfer, Wise, PayPal, and cryptocurrency. A 50% deposit is required to start, with the remaining 50% on delivery."
      }
    ],
    seo: [
      {
        q: "How long does SEO take to show results?",
        a: "SEO is a long-term strategy. Typically, you'll see initial improvements in 4–8 weeks and significant results in 3–6 months depending on competition and keyword difficulty."
      },
      {
        q: "Do I need to already have a website for SEO services?",
        a: "Yes, SEO services are applied to existing websites. If you need a website built first, check out the Web Development packages above."
      },
      {
        q: "Will you provide monthly reports?",
        a: "Yes. Every SEO package includes detailed monthly (or bi-weekly for Standard+) reports showing keyword rankings, traffic growth, and completed tasks."
      }
    ],
    custom: [
      {
        q: "How do you price AI & Custom Startup projects?",
        a: "Due to the complexity of AI and custom product development, these are priced based on the scope, required compute resources, and project timeline. Contact me for a detailed quote after a discovery call."
      },
      {
        q: "Can you help with app design (UI/UX) as well?",
        a: "Yes, for startup and custom projects, UI/UX design is part of the package. We handle everything from wireframes to high-fidelity prototypes."
      }
    ]
  };

  return (
    <div className="pt-24 min-h-screen bg-grid">
      <Helmet>
        <title>Pricing | Mohammad Ahmad</title>
        <meta name="description" content="Simple, transparent pricing for premium web development & SEO services. Choose a package that fits your goals and budget." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-20 right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-20 left-[10%] w-72 h-72 bg-secondary/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-6 inline-block animate-bounce-slow">
              Transparent Pricing ✦
            </span>
            <h1 className="section-title mb-6">Simple, Transparent Pricing</h1>
            <p className="section-subtitle">
              No hidden fees. No surprises. Just honest pricing for quality work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Web & App Development Section */}
      <section className="py-20 bg-dark/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Web & App Development</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Custom-built with React & Firebase. Every package includes mobile-responsive design, 
              clean code, and 30 days post-launch support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-stretch pt-8">
            {webPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* AI & Custom Startup Development Section */}
      <section className="py-20 bg-dark/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">AI & Advanced Custom Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              From building complex AI-driven startups to automating your business with custom LLM integrations. 
              We turn visionary ideas into high-performance products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto pt-8">
            {customPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">SEO Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light mb-8">
              Drive real organic traffic to your website. Monthly retainer packages with full 
              transparency and detailed reporting.
            </p>

            {/* Toggle Tab */}
            <div className="inline-flex p-1 bg-white/5 backdrop-blur-md rounded-xl border border-white/10">
              <button
                onClick={() => setSeoTab('monthly')}
                className={`px-8 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  seoTab === 'monthly' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'
                }`}
              >
                Monthly Retainer
              </button>
              <button
                onClick={() => setSeoTab('custom')}
                className={`px-8 py-2 rounded-lg text-sm font-bold transition-all duration-300 ${
                  seoTab === 'custom' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'
                }`}
              >
                Custom Plans
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-stretch pt-8">
            {seoPackages.map((pkg, index) => (
              <PricingCard key={index} {...pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-dark/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400 max-w-lg mx-auto font-light">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-6 ml-4 tracking-wider uppercase">Web Development FAQs</h3>
              <div className="glass-card divide-y divide-white/5">
                {faqData.web.map((faq, idx) => (
                  <FAQAccordion key={idx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-6 ml-4 tracking-wider uppercase">SEO FAQs</h3>
              <div className="glass-card divide-y divide-white/5">
                {faqData.seo.map((faq, idx) => (
                  <FAQAccordion key={idx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading font-bold text-primary mb-6 ml-4 tracking-wider uppercase">AI & Custom Startup FAQs</h3>
              <div className="glass-card divide-y divide-white/5">
                {faqData.custom.map((faq, idx) => (
                  <FAQAccordion key={idx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-dark">
        <CTABanner 
          title="Not Sure Which Package is Right for You?"
          subtext="Let's have a free 30-minute consultation call. No commitment, just clarity."
          cta1Text="Book Free Consultation →"
          cta1Link="/contact"
          cta2Text="Back to Portfolio"
          cta2Link="/portfolio"
        />
      </section>
    </div>
  );
};

export default Pricing;
