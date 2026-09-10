import React, { useState, useMemo } from 'react';
import { AgencyConfig, TravelPackage } from '../agencyConfig';
import { MessageCircle, MapPin, Search, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface PackagesProps {
  config: AgencyConfig;
}

export const Packages: React.FC<PackagesProps> = ({ config }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxBudget, setMaxBudget] = useState<number>(1000000); // Initialize with new max budget to show all packages
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 3;

  // Filter packages dynamically
  const filteredPackages = useMemo(() => {
    return config.packages.filter(pkg => {
      // Clean search string
      const matchedSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            pkg.stay.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Extract numeric budget estimation
      const numericPrice = parseInt(pkg.price.replace(/[^0-9]/g, ''), 10);
      const matchedBudget = isNaN(numericPrice) || numericPrice <= maxBudget;

      return matchedSearch && matchedBudget;
    });
  }, [config.packages, searchTerm, maxBudget]);

  // Calculate pagination values
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);
  const paginatedPackages = useMemo(() => {
    const startIndex = (currentPage - 1) * packagesPerPage;
    return filteredPackages.slice(startIndex, startIndex + packagesPerPage);
  }, [filteredPackages, currentPage]);

  // Reset to first page when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, maxBudget]);

  const pricingStep = 25000;
  const maxRangeLimit = 1000000; // Increased to 1M to show all packages including Hajj

  return (
    <section className="py-20 bg-transparent border-b border-white/[0.06]" id="packages-grid-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-12" id="packages-intro-header">
          <span className="text-xs font-mono font-bold tracking-widest uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            Guaranteed Quality Journeys
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold text-white tracking-tight mt-3 mb-4">
            Featured International & Domestic Tours
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-light">
            All departures fly exclusively via certified flag carrier direct flights from Jinnah International Airport (KHI) with full hotel lockings, catering, and experienced trip coordinators.
          </p>
        </div>

        {/* Dynamic Filter / Search Toolbar for premium trust feeling */}
        <div className="bg-zinc-950/40 rounded-2xl p-6 mb-12 border border-white/[0.06] shadow-sm" id="packages-filter-toolbar">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            {/* Search Input */}
            <div className="relative" id="pkg-search-wrapper">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
              <input
                type="text"
                placeholder="Search e.g. Umrah, 15 Days, VIP..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-900 border border-white/[0.08] text-white rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all"
                id="package-search-input"
              />
            </div>

            {/* Budget Slide Filter */}
            <div id="pkg-budget-range-wrapper">
              <div className="flex justify-between items-center mb-2.5 text-xs text-slate-400 font-mono">
                <span>MAX ESTIMATED BUDGET:</span>
                <span className="font-bold text-[13px] text-emerald-400">
                  PKR {maxBudget.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max={maxRangeLimit}
                step={pricingStep}
                value={maxBudget}
                onChange={(e) => setMaxBudget(Number(e.target.value))}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-emerald-950 accent-emerald-500"
                id="package-budget-slider"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>PKR 100K</span>
                <span>PKR 550K</span>
                <span>PKR 1000K</span>
              </div>
            </div>

          </div>
        </div>

        {/* Dynamic Package Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="packages-cards-grid">
          {paginatedPackages.map((pkg, idx) => (
            <motion.div
              key={`pkg-${pkg.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              className={`bg-zinc-950/40 rounded-2xl overflow-hidden border border-white/[0.06] flex flex-col justify-between h-full transition-all duration-300 shadow-sm ${config.colors.cardBorderHover}`}
              id={`package-card-item-${pkg.id}`}
            >
              
              {/* Cover Photo */}
              <div className="relative aspect-video overflow-hidden group" id={`pkg-img-pane-${pkg.id}`}>
                <img
                  src={pkg.imageUrl}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  id={`pkg-image-${pkg.id}`}
                />
                
                {/* Dynamic Package Category Badge */}
                {pkg.badge && (
                  <div className="absolute left-4 top-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md backdrop-blur-sm bg-emerald-950/80 text-amber-300 border border-emerald-500/20" id={`pkg-label-badge-${pkg.id}`}>
                    {pkg.badge}
                  </div>
                )}

                {/* Price tag positioned cleanly */}
                <div className="absolute right-4 bottom-4 bg-[#080808]/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg text-white font-mono text-xs font-semibold border border-white/5" id={`pkg-price-val-${pkg.id}`}>
                  Starting from {pkg.price}
                </div>
              </div>

              {/* Package Details Body */}
              <div className="p-6 flex-1 flex flex-col justify-between" id={`pkg-details-body-${pkg.id}`}>
                <div>
                  <h3 className="font-sans font-bold text-white text-lg leading-snug hover:text-white/80 tracking-tight transition mb-3">
                    {pkg.title}
                  </h3>
                  
                  {/* Stay indicator */}
                  <div className="flex items-start space-x-2 text-xs text-slate-400 mb-5 leading-normal" id={`pkg-stay-desc-${pkg.id}`}>
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                    <span>{pkg.stay}</span>
                  </div>

                  {/* Inclusion badges checklist */}
                  <div className="mb-6" id={`pkg-inclusions-block-${pkg.id}`}>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-2.5">
                      What is Included:
                    </span>
                    <div className="flex flex-wrap gap-1.5" id={`pkg-badges-wrap-${pkg.id}`}>
                      {pkg.inclusions.map((inc, i) => (
                        <span
                          key={`inc-${i}`}
                          className={`inline-flex items-center text-[11px] px-2.5 py-1 rounded-md border font-normal ${config.colors.badgeBg}`}
                          id={`pkg-inclusion-tag-${pkg.id}-${i}`}
                        >
                          {inc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Button to WhatsApp Pre-filled */}
                <div className="pt-4 border-t border-white/[0.06]" id={`pkg-footer-actions-${pkg.id}`}>
                  <a
                    href={`https://wa.me/${config.phone}?text=${encodeURIComponent(pkg.whatsappQuery)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 rounded-xl font-bold text-xs uppercase cursor-pointer tracking-wider flex items-center justify-center space-x-2 shadow-sm transition-all duration-150 active:scale-95 text-white bg-emerald-600 hover:bg-emerald-700"
                    id={`pkg-wa-inquire-btn-${pkg.id}`}>
                    <MessageCircle className="w-4 h-4" />
                    <span>Send WhatsApp Inquiry</span>
                  </a>
                </div>

              </div>

            </motion.div>
          ))}

          {/* Empty state when filters result in zero bookings */}
          {filteredPackages.length === 0 && (
            <div className="col-span-full py-16 text-center border border-dashed border-white/[0.1] rounded-3xl bg-zinc-950/40" id="pkg-empty-state">
              <Tag className="w-10 h-10 mx-auto text-slate-500 mb-4" />
              <h3 className="font-sans font-bold text-white text-base mb-1">
                No Packages Found Matching Filters
              </h3>
              <p className="text-slate-400 text-xs mb-6">
                Try widening your budget filter slide or clearing the search bar.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setMaxBudget(1000000); }}
                className="px-6 py-2.5 bg-white text-black font-semibold uppercase tracking-wider rounded-xl text-xs hover:bg-slate-100 transition duration-150"
                id="reset-filters-btn"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination Controls - only show if more than 3 packages */}
        {filteredPackages.length > 3 && (
          <div className="flex items-center justify-center mt-12 space-x-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-3 rounded-xl border border-white/[0.08] bg-zinc-900 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-10 h-10 rounded-xl text-sm font-semibold transition-colors ${
                    currentPage === page
                      ? 'bg-emerald-600 text-white'
                      : 'bg-zinc-900 text-white border border-white/[0.08] hover:bg-white/5'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl border border-white/[0.08] bg-zinc-900 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/5 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};