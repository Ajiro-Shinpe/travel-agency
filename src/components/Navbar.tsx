import React, { useState } from 'react';
import { AgencyConfig } from '../agencyConfig';
import { LucideIcon } from './LucideIcon';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  config: AgencyConfig;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  config,
  activeTab,
  setActiveTab,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'packages', label: 'Travel Packages' },
    { id: 'services', label: 'Our Services' },
    { id: 'about', label: 'About Agency' },
    { id: 'contact', label: 'Booking Inquiry' },
  ];

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Fixed Islamic theme colors (only mode available now)
  const logoIcon = 'Moon';
  const activeLinkClass = 'text-amber-400 border-b-2 border-amber-400 font-semibold';
  const hoverLinkClass = 'hover:text-amber-300 transition duration-150';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-md" id="app-header">
      {/* Main navigation */}
      <nav className={`${config.colors.navBg} text-white transition-all duration-300`} id="main-navigation-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            
            {/* Logo */}
            <div 
              className="flex items-center space-x-2.5 cursor-pointer group" 
              onClick={() => handleTabClick('home')}
              id="brand-logo-container"
            >
              <div className="p-2 rounded-lg bg-amber-500/10 group-hover:scale-110 duration-200 transition-transform">
                <LucideIcon 
                  name={logoIcon} 
                  className="w-7 h-7 text-amber-400" 
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans font-bold text-lg sm:text-xl tracking-wide select-none">
                  {config.logoText}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-emerald-300">
                  Karachi Operations
                </span>
              </div>
            </div>

            {/* Desktop Navigation Link Items */}
            <div className="hidden lg:flex items-center space-x-8" id="desktop-menu-links">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleTabClick(item.id)}
                  className={`py-2 text-[14px] font-medium tracking-wide cursor-pointer text-gray-100 ${
                    activeTab === item.id ? activeLinkClass : hoverLinkClass
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Premium CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4" id="desktop-ctas">
              <a
                href={`tel:${config.phone}`}
                className="flex items-center space-x-1.5 text-xs font-semibold hover:opacity-90 duration-150 transition-opacity"
                id="call-now-nav-btn"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span className="text-gray-200">Call: {config.phoneFormatted}</span>
              </a>
              <a
                href={`https://wa.me/${config.phone}?text=Assalam-o-Alaikum%20I%20am%20inquiring%20from%20your%20website.`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1.5 px-4.5 py-2.5 rounded-full text-xs font-semibold cursor-pointer bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all duration-150 active:scale-95"
                id="wa-nav-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Mobile Menu Action Icon */}
            <div className="lg:hidden flex items-center space-x-3" id="mobile-hamburger-btn-container">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-white/10 transition-colors focus:outline-none"
                id="hamburger-toggle-button"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-gray-950 border-t border-white/5 overflow-hidden"
              id="mobile-drawer-container"
            >
              <div className="px-4 pt-3 pb-6 space-y-2.5">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleTabClick(item.id)}
                    className={`block w-full text-left px-4 py-2 text-[15px] font-medium rounded-md cursor-pointer ${
                      activeTab === item.id
                        ? 'bg-emerald-900/40 text-amber-400 font-semibold'
                        : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                
                <hr className="border-white/10 my-4" />

                <div className="grid grid-cols-2 gap-3 pt-2" id="mobile-drawer-ctas">
                  <a
                    href={`tel:${config.phone}`}
                    className="flex items-center justify-center space-x-1.5 py-3 border border-white/10 rounded-lg text-xs font-semibold text-gray-200 hover:bg-white/5"
                    id="mobile-drawer-call-btn"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>Call Desk</span>
                  </a>
                  <a
                    href={`https://wa.me/${config.phone}?text=Assalam-o-Alaikum%20I%20am%20inquiring%20from%20your%20website%20on%20mobile.`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center space-x-1.5 py-3 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:opacity-90"
                    id="mobile-drawer-wa-btn"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};