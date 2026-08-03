import React from 'react';
import * as LucideIcons from 'lucide-react';

interface LucideIconProps {
  name: string;
  className?: string;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className }) => {
  // Safe lookup for lucide icon
  const IconComponent = (LucideIcons as any)[name];

  if (!IconComponent) {
    // Fallback to a safe icon
    return <LucideIcons.HelpCircle className={className} id="fallback-icon" />;
  }

  return <IconComponent className={className} id={`lucide-icon-${name.toLowerCase()}`} />;
};
