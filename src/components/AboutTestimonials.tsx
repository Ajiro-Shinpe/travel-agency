import React, { useState } from 'react';
import { AgencyConfig } from '../agencyConfig';
import { Star, MessageSquareCode, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface AboutTestimonialsProps {
  config: AgencyConfig;
}

export const AboutTestimonials: React.FC<AboutTestimonialsProps> = ({ config }) => {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0);

  return (
    <section className="py-20 bg-transparent border-b border-white/[0.06]" id="about-testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Corporate Bio Grid & DTS Assurance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24" id="corporate-profile-grid">
          
          {/* Narrative Bio details */}
          <div className="lg:col-span-7" id="about-narrative-panel">
            <span className="text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Our Corporate Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight mt-3 mb-6">
              {config.about.headline}
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {config.about.bioParagraph}
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              We understand that choosing travel operators can feel overwhelming. That is why we provide physically verifiable lodging descriptions, precise departure rosters, and dedicated Karachi escorts who manage luggage, food adjustments, and clearances on-site.
            </p>

            {/* DTS Certification highlight card */}
            <div className="p-5 rounded-2xl bg-zinc-950/40 border border-white/[0.06] flex items-start space-x-4 shadow-sm" id="dts-certificate-callout">
              <div className="p-3 rounded-xl shrink-0 border bg-amber-950/40 text-amber-400 border-amber-500/15">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm sm:text-base">
                  Ministry Licensed & DTS Compliant
                </h4>
                <p className="text-slate-400 text-xs mt-1 leading-normal">
                  All contracts with our Karachi agency are bound legally under standard tourism regulations in Pakistan. Verifiable Registration Number: <strong className="font-mono">{config.dtsLicense}</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Karachi Trust/Physical Office graphics display */}
          <div className="lg:col-span-5" id="corporate-visuals-panel">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative p-8 rounded-3xl bg-zinc-950/40 border border-white/[0.06] shadow-2xl text-center overflow-hidden"
              id="office-physical-presence-display"
            >
              {/* Outer visual glow circles */}
              <div className="absolute -right-16 -top-16 w-36 h-36 rounded-full blur-3xl opacity-20 bg-emerald-500" />
              <div className="absolute -left-16 -bottom-16 w-36 h-36 rounded-full blur-3xl opacity-20 bg-amber-500" />

              <span className="text-[10px] font-mono tracking-widest uppercase text-slate-400 block mb-2">
                VERIFIABLE PHYSICAL PRESENCE
              </span>
              <h3 className="text-white font-sans font-extrabold text-2xl tracking-tight mb-4">
                Karachi Central Office
              </h3>
              
              <div className="p-4 bg-zinc-900 rounded-xl mb-6 text-left border border-white/[0.06]" id="office-address-capsule">
                <p className="font-semibold text-[11px] text-slate-450 font-mono tracking-wider mb-1">OFFICE ADDRESS:</p>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed font-normal">{config.address}</p>
              </div>

              <p className="text-slate-450 text-xs leading-relaxed mb-6 font-light">
                {config.about.karachiSignificance} We invite our prospective travelers to visit our office, review flight rosters, audit partner hotels in person, and collect passenger kits directly.
              </p>

              {/* Verified checklist indicators */}
              <div className="flex flex-col space-y-2.5 items-stretch text-left" id="presence-checklist">
                {[
                  'Face-to-face biometric or documents review guidance',
                  'Authentic stamp-signed physical receipts issued',
                  'In-person flight reservation blockings audits'
                ].map((item, id) => (
                  <div key={id} className="flex items-center space-x-2.5 text-xs text-slate-300 font-medium font-sans">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>

        {/* Client Reviews / Testimonials Highlight */}
        <div className="pt-16 border-t border-white/[0.06]" id="testimonials-block">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              CLIENT SATISFACTION SCORES
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mt-3 mb-2 tracking-tight">
              Honest Feedback from Karachi Neighbors
            </h3>
            <p className="text-slate-400 text-xs">
              Every review represents a real booking handled completely of our Jinnah Terminal departures.
            </p>
          </div>

          {/* Testimonial slider layouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
            {config.testimonials.map((review, rId) => (
              <motion.div
                key={`review-${rId}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: rId * 0.1 }}
                className="bg-zinc-950/40 p-6 sm:p-8 rounded-2xl border border-white/[0.06] shadow-xl hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-200 flex flex-col justify-between"
                id={`review-card-item-${rId}`}
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex space-x-1 mb-5" id={`review-stars-${rId}`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text content */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic" id={`review-text-${rId}`}>
                    "{review.text}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06]" id={`review-author-meta-${rId}`}>
                  {/* Author Meta Details */}
                  <h4 className="font-sans font-bold text-white text-[14px]">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono tracking-wide mt-0.5">
                    {review.relation} • Booking: <span className="font-semibold text-slate-200">{review.packageUsed}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Review trust badge banner */}
          <div className="text-center mt-12 text-slate-400 text-xs flex justify-center items-center space-x-2" id="testimonial-scanned-guarantee">
            <MessageSquareCode className="w-4 h-4 text-emerald-500" />
            <span>Over 4.9 average index evaluation from 850+ traveler audits on public registries.</span>
          </div>
        </div>

      </div>
    </section>
  );
};