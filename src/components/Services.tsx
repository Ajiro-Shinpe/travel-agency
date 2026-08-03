import React from 'react';
import { AgencyConfig } from '../agencyConfig';
import { LucideIcon } from './LucideIcon';
import { motion } from 'motion/react';

interface ServicesProps {
  config: AgencyConfig;
}

export const Services: React.FC<ServicesProps> = ({ config }) => {

  return (
    <section className="py-20 bg-transparent border-b border-white/[0.06]" id="services-showcase-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="services-header-content">
          <span className="text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Professional Travel Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight mt-3 mb-4">
            Custom-Built Solutions for Our Valued Clients
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            We render absolute travel planning integrity, ensuring any pilgrimage departure or family mountain getaway is backed by certified flight blockings, verified ground security, and clear-cut pricing indexes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-grid-layout">
          {config.services.map((service, index) => (
            <motion.div
              key={`service-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-zinc-950/40 p-8 rounded-2xl border border-white/[0.06] transition-all duration-300 hover:border-white/10 hover:bg-zinc-900/40 hover:-translate-y-1 group"
              id={`service-card-${index}`}
            >
              <div className="flex items-center space-x-4 mb-6" id={`service-card-header-${index}`}>
                {/* Dynamically Styled Icon Backdrop Container */}
                <div className="p-3.5 rounded-xl transition-colors duration-300 border bg-emerald-950/40 text-emerald-400 border-emerald-500/10 group-hover:bg-emerald-600 group-hover:text-white" id={`service-icon-bg-${index}`}>
                  <LucideIcon name={service.iconName} className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <h3 className="font-sans font-bold text-white text-lg tracking-tight">
                  {service.title}
                </h3>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed" id={`service-description-${index}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Customized Corporate / Family trip callout panel */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl text-white bg-gradient-to-br from-zinc-950 via-emerald-950 to-zinc-950 border border-emerald-500/15 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-6" id="services-custom-callout">
          <div className="max-w-2xl text-center lg:text-left">
            <h4 className="text-xl sm:text-2xl font-sans font-bold mb-2">
              Interested in a Custom Corporate Group or Large Family Plan?
            </h4>
            <p className="text-slate-300 text-sm font-light leading-relaxed">
              Our travel engineers in Karachi craft exclusive charters, block entire boutique luxury hotels, and secure personal coordinators to suit larger groups. Get a detailed itinerary breakdown in less than 48 hours.
            </p>
          </div>
          <a
            href={`https://wa.me/${config.phone}?text=Assalam-o-Alaikum,%20I%20am%20interested%20in%20arranging%20a%20custom%20group%20package%20departure%20for%20my%20Karachi%20family/company.`}
            target="_blank"
            rel="noreferrer"
            className="px-7 py-3.5 rounded-xl font-bold tracking-wide text-xs uppercase flex items-center justify-center space-x-2 transition cursor-pointer active:scale-95 text-gray-900 bg-amber-400 hover:bg-amber-300"
            id="custom-plan-btn"
          >
            <span>Request Custom Plan</span>
          </a>
        </div>

      </div>
    </section>
  );
};