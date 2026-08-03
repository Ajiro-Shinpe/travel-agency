import React from 'react';
import { AgencyConfig } from '../agencyConfig';
import { LucideIcon } from './LucideIcon';
import { motion } from 'motion/react';

interface TrustBadgesProps {
  config: AgencyConfig;
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ config }) => {

  return (
    <section className="bg-transparent py-14 border-b border-white/[0.06]" id="trust-banners-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Verification badge intro banner */}
        <div className="flex flex-col items-center justify-center text-center mb-10" id="trust-top-banner">
          <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Pakistan Government Verified Pilgrimage Operations
          </span>
          <p className="text-slate-400 text-xs mt-2" id="travel-services-licensing-tag">
            DTS Approved • Registered with Ministry of Tour & Pilgrimage Excellence Services
          </p>
        </div>

        {/* 3-4 Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="trust-indicator-grid">
          {config.trustBadges.map((badge, idx) => (
            <motion.div
              key={`badge-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl border border-white/[0.06] bg-zinc-950/40 flex flex-col items-start transition-all duration-200 hover:border-white/10 hover:bg-zinc-900/40"
              id={`trust-badge-card-${idx}`}
            >
              {/* Dynamic Icon */}
              <div className="p-3 rounded-xl mb-4 border bg-emerald-950/50 text-emerald-400 border-emerald-500/10" id={`badge-icon-bg-${idx}`}>
                <LucideIcon name={badge.iconName} className="w-5 h-5" />
              </div>

              {/* Title & Description */}
              <h3 className="font-sans font-semibold text-white text-[15px] mb-2 leading-snug">
                {badge.title}
              </h3>
              <p className="text-slate-400 font-normal text-xs leading-relaxed">
                {badge.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Local Karachi office callout line */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4" id="trust-karachi-callout">
          <div className="flex items-center space-x-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Karachi office open Saturday-Thursday (9 AM - 7 PM) for physical document submissions & cash receipts.</span>
          </div>
          <div className="font-mono text-[11px] text-slate-500">
            LOCATED AT: {config.address.split(',').slice(0, 3).join(',')}
          </div>
        </div>

      </div>
    </section>
  );
};