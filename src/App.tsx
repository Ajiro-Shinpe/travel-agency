import { useState } from 'react';
import { agencyConfig } from './agencyConfig';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBadges } from './components/TrustBadges';
import { Services } from './components/Services';
import { Packages } from './components/Packages';
import { AboutTestimonials } from './components/AboutTestimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronRight, Check } from 'lucide-react';

export default function App() {
  // SPA Page Routing State ("home" | "packages" | "services" | "about" | "contact")
  const [activeTab, setActiveTab] = useState<string>('home');

  // Single dedicated configuration for Hajj, Umrah & Ziyarats
  const activeConfig = agencyConfig;

  // Use all FAQs from the single config (no more mode switching)
  const faqs = activeConfig.faqs;

  // Handle CTA directions inside sections
  const navigateToTab = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#080808] text-slate-100 antialiased font-sans" id="main-spa-container">
      
      {/* Centralized Navigation Bar */}
      <Navbar
        config={activeConfig}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Pane with Transitions */}
      <main className="flex-grow pt-24" id="main-content-layout">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
            id={`tab-wrapper-${activeTab}`}
          >
            {/* TAB ROUTING RENDERING DECISION GRID */}
            
            {activeTab === 'home' && (
              <div id="home-view-group">
                {/* Hero Section Banner */}
                <Hero 
                  config={activeConfig} 
                  onViewPackages={() => navigateToTab('packages')} 
                  onContactClick={() => navigateToTab('contact')}
                />
                
                {/* Trust Metrics Verification Banner */}
                <TrustBadges config={activeConfig} />
                
                {/* Featured Packages highlight */}
                <Packages config={activeConfig} />
                
                {/* Key corporate Services highlights */}
                <Services config={activeConfig} />
                
                {/* Corporate Narrative with local user testimonials */}
                <AboutTestimonials config={activeConfig} />
                
                {/* Contact capturing component */}
                <ContactForm config={activeConfig} />
              </div>
            )}

            {activeTab === 'packages' && (
              <div id="packages-view-group" className="pt-8">
                {/* Dedicated full size interactive packages view */}
                <Packages config={activeConfig} />
                
                {/* Reinforcement Trust bar under package explorer */}
                <TrustBadges config={activeConfig} />
              </div>
            )}

            {activeTab === 'services' && (
              <div id="services-view-group" className="pt-8">
                {/* Primary services modular details */}
                <Services config={activeConfig} />

                {/* Highly Conversive Frequently Asked Questions Grid */}
                <section className="py-20 bg-zinc-950/40 border-t border-b border-white/[0.04]" id="services-page-faqs">
                  <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-16" id="faq-header">
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        PRE-PILGRIMAGE GUIDES
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-sans font-bold text-white mt-3 mb-2 tracking-tight">
                        Common Clarifications & Guarantees
                      </h3>
                      <p className="text-slate-400 text-xs">
                        Answering the most prominent questions raised by our Jinnah Terminal departing pilgrims.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="faq-questions-grid">
                      {faqs.map((item, idx) => (
                        <div key={idx} className="bg-zinc-900/60 p-6 sm:p-8 rounded-2xl border border-white/[0.06] shadow-xl" id={`faq-item-${idx}`}>
                          <h4 className="font-sans font-bold text-white text-base mb-3 flex items-start space-x-2.5">
                            <HelpCircle className="w-5 h-5 shrink-0 text-emerald-400" />
                            <span>{item.q}</span>
                          </h4>
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-7 font-normal">
                            {item.a}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Quick callout back to lead */}
                    <div className="mt-16 text-center" id="faq-link-to-booking">
                      <p className="text-slate-400 text-sm mb-4">Have further inquiries about custom quotas, flight departures, or hotel certifications?</p>
                      <button
                        onClick={() => navigateToTab('contact')}
                        className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-md cursor-pointer"
                      >
                        <span>Start Custom Inquiry Now</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'about' && (
              <div id="about-view-group" className="pt-8">
                {/* Extended Brand Bio with trust indicators */}
                <AboutTestimonials config={activeConfig} />
                
                {/* Additional Karachi-specific office map block */}
                <section className="py-16 bg-transparent border-b border-white/[0.06]" id="office-biometrics-log">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-zinc-950/60 rounded-3xl p-8 sm:p-12 border border-white/[0.06]" id="karachi-verification-block">
                      <div className="lg:col-span-7">
                        <span className="text-[10px] font-mono tracking-widest text-slate-400 block mb-2 uppercase">BRANCH ACCESSIBILITY</span>
                        <h3 className="font-sans font-bold text-2xl text-white mb-4 tracking-tight">
                          We Host In-Person Biometric Assistance & Ticket Auditing
                        </h3>
                        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                          In Pakistan’s travel landscape, face-to-face verification guarantees absolute peace of mind. Unlike abstract online portals, we invite you to sit with our branch directors, inspect legal agreements in stamps, and coordinate passport visas securely.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="assist-guides-list">
                          {[
                            'Full physical folder setups for families',
                            'Biometric Saudi e-visa guides',
                            'Physical airline block layouts displayed',
                            'Direct cash or bank deposit clearances and receipts'
                          ].map((item, i) => (
                            <div key={i} className="flex items-center space-x-2 text-xs text-slate-300 font-medium">
                              <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-5 h-full flex flex-col justify-center" id="office-hours-banner">
                        <div className="bg-zinc-900 p-6 rounded-2xl border border-white/[0.06] shadow-sm">
                          <h4 className="font-sans font-bold text-white border-b border-white/[0.06] pb-3 mb-4 text-sm uppercase tracking-wide">
                            Central Branch Office Hours
                          </h4>
                          <div className="space-y-2 text-xs font-mono" id="office-timing-rows">
                            <div className="flex justify-between">
                              <span className="text-slate-400">Monday - Thursday:</span>
                              <span className="text-slate-200 font-semibold">09:30 AM - 07:30 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Friday (Prayer Break):</span>
                              <span className="text-slate-200 font-semibold">09:30 AM - 07:30 PM</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-slate-400">Saturday:</span>
                              <span className="text-slate-200 font-semibold">10:00 AM - 05:00 PM</span>
                            </div>
                            <div className="flex justify-between pt-2 border-t border-white/[0.06] border-dashed text-red-400">
                              <span>Sundays / National Holidays:</span>
                              <span className="font-semibold">Closed for Bookings</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab === 'contact' && (
              <div id="contact-view-group" className="pt-8 bg-transparent">
                {/* Advanced stateful booking capturing form */}
                <ContactForm config={activeConfig} />
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </main>

      {/* Persistent global responsive Footer */}
      <Footer
        config={activeConfig}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Sticky Floating Bouncing action bar for WhatsApp Conversions */}
      <FloatingWhatsApp config={activeConfig} />

    </div>
  );
}