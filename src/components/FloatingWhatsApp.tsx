import React from 'react';
import { AgencyConfig } from '../agencyConfig';
import { MessageSquareShare } from 'lucide-react';
import { motion } from 'motion/react';

interface FloatingWhatsAppProps {
  config: AgencyConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ config }) => {
  // Customize standard greetings
  const customMessage = `Assalam-o-Alaikum%20${encodeURIComponent(config.agencyName)},%20I%20am%20inquiring%20about%20your%20Hajj%20and%20Umrah%20packages.`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-40"
      id="floating-wa-fab-wrap"
    >
      <a
        href={`https://wa.me/${config.phone}?text=${customMessage}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center space-x-2 p-4 sm:p-4.5 rounded-full shadow-2xl text-white cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200 group relative bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30"
        id="floating-wa-fab-anchor"
        title="Chat on WhatsApp"
      >
        {/* Soft infinite radial pulse aura animation */}
        <span className="absolute inset-0 rounded-full bg-inherit animate-ping opacity-25 scale-105 group-hover:duration-75" />

        <MessageSquareShare className="w-6 h-6 relative z-10 shrink-0" />
        
        {/* Animated label showing on desktop on hover */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out font-bold text-xs whitespace-nowrap uppercase tracking-wider relative z-10" id="wa-fab-hover-label">
          WhatsApp Desk
        </span>
      </a>
    </motion.div>
  );
};