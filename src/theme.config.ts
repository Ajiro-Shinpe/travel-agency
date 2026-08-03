/**
 * THEME CONFIGURATION - Change everything in 2 minutes!
 * =============================================================================
 * This file contains ALL theme-related settings: colors, fonts, spacing, etc.
 * Simply update the values below and the entire website will reflect the changes.
 */

export interface ThemeConfig {
  // Colors - Tailwind CSS color names or custom hex values
  colors: {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    accent: string;
    accentLight: string;
    background: string;
    surface: string;
    text: string;
    textMuted: string;
    border: string;
  };
  
  // Typography
  typography: {
    fontFamily: {
      sans: string;
      heading: string;
    };
    fontSize: {
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeight: {
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
    };
  };
  
  // Layout
  layout: {
    maxWidth: string;
    containerPadding: string;
  };
  
  // Border Radius
  borderRadius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  
  // Shadows
  shadows: {
    sm: string;
    md: string;
    lg: string;
  };
  
  // Transitions
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
}

// CURRENT THEME - Emerald/Islamic Green Theme (Default)
// To change theme, simply update these values!
export const themeConfig: ThemeConfig = {
  colors: {
    primary: 'emerald',
    primaryLight: 'emerald-400',
    primaryDark: 'emerald-700',
    accent: 'amber',
    accentLight: 'amber-400',
    background: 'zinc-950',
    surface: 'zinc-900',
    text: 'white',
    textMuted: 'zinc-400',
    border: 'white/10',
  },
  
  typography: {
    fontFamily: {
      sans: 'Inter, system-ui, sans-serif',
      heading: 'Inter, system-ui, sans-serif',
    },
    fontSize: {
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  
  layout: {
    maxWidth: 'max-w-7xl',
    containerPadding: 'px-4 sm:px-6 lg:px-8',
  },
  
  borderRadius: {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
  },
  
  shadows: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
  },
  
  transitions: {
    fast: 'transition-all duration-150',
    normal: 'transition-all duration-300',
    slow: 'transition-all duration-500',
  },
};

// CSS Variables that will be injected into the DOM
export const generateCSSVariables = (): string => {
  return `
    :root {
      --color-primary: #10b981; /* emerald-500 */
      --color-primary-light: #34d399; /* emerald-400 */
      --color-primary-dark: #047857; /* emerald-700 */
      --color-accent: #f59e0b; /* amber-500 */
      --color-accent-light: #fbbf24; /* amber-400 */
      --font-sans: ${themeConfig.typography.fontFamily.sans};
      --font-heading: ${themeConfig.typography.fontFamily.heading};
    }
  `;
};