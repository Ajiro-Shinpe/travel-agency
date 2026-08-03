import React from 'react';
import { AgencyConfig } from '../agencyConfig';
import { Send, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  config: AgencyConfig;
  onViewPackages: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onViewPackages, onContactClick }) => {

  return (
    <section className="relative overflow-hidden pt-28 lg:pt-32" id="hero-banner-section">
      {/* Visual background image with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={config.hero.heroImage}
          alt={`${config.agencyName} Banner`}
          className="w-full h-full object-cover object-center scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
          id="hero-background-img"
        />
        {/* Soft, rich, responsive dark gradient overlay */}
        <div className={`absolute inset-0 ${config.colors.heroBgGradient} z-10`} id="hero-gradient-overlay" />
      </div>

      {/* Decorative content grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 sm:pb-32 lg:pt-28 lg:pb-40">
        <div className="max-w-3xl">
          {/* Dynamic mode badge with bounce and layout-transition */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring' }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide border uppercase mb-6 bg-emerald-900/60 text-amber-300 border-emerald-800"
            id="hero-mode-badge"
          >
            <span className="relative flex h-2 w-2 mr-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-amber-400"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
            </span>
            <span>Hajj & Umrah Direct Operator</span>
          </motion.div>

          {/* Majestic Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md"
            id="hero-headline"
          >
            {config.hero.title}
          </motion.h1>

          {/* Supportive Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-10 font-light max-w-2xl drop-shadow-sm"
            id="hero-subheadline"
          >
            {config.hero.subtitle}
          </motion.p>

          {/* Action CTAs Button Group */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4"
            id="hero-cta-group"
          >
            <button
              onClick={onViewPackages}
              className={`px-8 py-4 rounded-xl font-bold tracking-wide flex items-center justify-center space-x-2 shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 text-[15px] transition-all duration-150 ${config.colors.primaryBtn}`}
              id="hero-primary-cta"
            >
              <span>{config.hero.ctaPrimary}</span>
              <Send className="w-4 h-4 ml-0.5" />
            </button>
            
            <a
              href={`https://wa.me/${config.phone}?text=Assalam-o-Alaikum%20${encodeURIComponent(config.agencyName)},%20I%20visited%20your%20website%20and%20interested%20in%20travel%20packages.`}
              target="_blank"
              rel="noreferrer"
              className={`px-8 py-4 rounded-xl font-bold tracking-wide flex items-center justify-center space-x-2 border cursor-pointer hover:bg-white/[0.08] active:scale-95 text-[15px] transition-all duration-150 ${config.colors.secondaryBtn}`}
              id="hero-secondary-cta"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{config.hero.ctaSecondary}</span>
            </a>
          </motion.div>

          {/* High Trust Micro indicators below CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-6 text-gray-300 text-xs font-mono"
            id="hero-micro-trust-badges"
          >
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>{config.dtsLicense}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>Karachi Office (DHA)</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span>100% Verified Group Departures</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modern Wave Divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden leading-[0] transform rotate-180" id="hero-curve-bottom">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] sm:h-[40px] text-[#080808] fill-current">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C26.9,3.13,57.29,15.14,88.34,20H321.39Z"></path>
        </svg>
      </div>
    </section>
  );
};