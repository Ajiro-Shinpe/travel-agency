import React from 'react';
import { AgencyConfig } from '../agencyConfig';
import { LucideIcon } from './LucideIcon';
import { Mail, Phone, MapPin, Building, ShieldCheck, Heart, AlertCircle } from 'lucide-react';

interface FooterProps {
  config: AgencyConfig;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ config, activeTab, setActiveTab }) => {
  const logoIcon = 'Moon';

  const menuAnchors = [
    { id: 'home', label: 'Home Page' },
    { id: 'packages', label: 'Tour Packages' },
    { id: 'services', label: 'Travel Services' },
    { id: 'about', label: 'About Agency' },
    { id: 'contact', label: 'Book Inquiry' },
  ];

  const handleAnchorClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${config.colors.footerBg} text-slate-300 py-16 border-t border-white/[0.06]`} id="agency-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top brand grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" id="footer-top-grid">
          
          {/* Brand col */}
          <div className="space-y-4" id="footer-brand-col">
            <div className="flex items-center space-x-2.5" id="footer-logo-row">
              <div className="p-2 rounded bg-amber-500/10">
                <LucideIcon name={logoIcon} className="w-6 h-6 text-amber-400" />
              </div>
              <span className="font-sans font-bold text-lg text-white tracking-wide">
                {config.logoText}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              {config.tagline}. High-conversions booking agency specializing in direct airlines departures from Jinnah International Airport (KHI) with full-board coordinates in Makkah, Madinah, Karbala & Northern Valleys.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1.5" id="footer-license-marks">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>{config.dtsLicense}</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Building className="w-4 h-4 text-emerald-400" />
                <span>Karachi, Pakistan Office verified</span>
              </div>
            </div>
          </div>

          {/* Sitemaps Quick Anchors */}
          <div id="footer-links-col">
            <h4 className="text-white font-sans font-bold text-xs uppercase tracking-wider mb-5">
              Quick Navigation
            </h4>
            <ul className="space-y-3 text-xs" id="footer-anchors-list">
              {menuAnchors.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleAnchorClick(item.id)}
                    className="text-slate-400 hover:text-white transition duration-150 cursor-pointer text-left"
                  >
                    • {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Specialties */}
          <div id="footer-specialties-col">
            <h4 className="text-white font-sans font-bold text-xs uppercase tracking-wider mb-5">
              Sacred Services
            </h4>
            <ul className="space-y-3 text-xs text-slate-400" id="footer-specialty-list">
              {config.services.map((serv, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="w-1 h-1 rounded-full bg-amber-400"></span>
                  <span>{serv.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts info cols */}
          <div className="space-y-4" id="footer-contact-col">
            <h4 className="text-white font-sans font-bold text-xs uppercase tracking-wider mb-5">
              Karachi Headquarters
            </h4>
            <ul className="space-y-4 text-xs" id="footer-coordinates-list">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-slate-400 leading-normal">{config.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${config.phone}`} className="text-slate-400 hover:text-white font-mono">{config.phoneFormatted}</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`mailto:${config.email}`} className="text-slate-400 hover:text-white">{config.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Disclaimer Notice */}
        <div className="pt-8 border-t border-white/[0.06] text-center" id="footer-bottom-notice">
          <div className="max-w-3xl mx-auto space-y-4">
            
            {/* Regulatory Notice block */}
            <div className="bg-[#080808] border border-white/[0.06] p-4 rounded-xl text-left text-[11px] text-slate-400 flex items-start space-x-3" id="footer-dts-disclaimer-box">
              <AlertCircle className="w-4 h-4 text-amber-500/80 shrink-0 mt-0.5" />
              <p className="leading-normal font-light">
                <strong>REGULATORY DISCLAIMER:</strong> All physical and digital travel bookings made via Al-Buraq Travel & Tours (KHI) / Karachi Horizon Holiday Planners are subject to flight quotas, Ministry approvals, and ticketing policies set by the Department of Tourist Services, Pakistan. Complete details regarding cancellation matrixes, hotel distance certifications, and pilgrim training guidelines are accessible at our Karachi central branch office.
              </p>
            </div>

            {/* Copyright with heart element */}
            <p className="text-[11px] text-slate-500 leading-snug">
              © {new Date().getFullYear()} {config.agencyName}. All Rights Reserved. Designed with <Heart className="w-3 h-3 inline text-red-500 fill-current hover:scale-125 duration-100 mx-0.5" /> in Karachi, Pakistan.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};