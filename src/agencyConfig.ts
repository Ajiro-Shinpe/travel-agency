/**
 * Centralized Configuration for Al-Buraq Hajj & Umrah Travel Agency website.
 * Purely dedicated to Islamic pilgrimage services from Karachi.
 */

export interface TravelPackage {
  id: string;
  title: string;
  price: string;
  stay: string;
  inclusions: string[];
  imageUrl: string;
  whatsappQuery: string;
  badge?: string;
}

export interface TrustBadge {
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  iconName: string;
}

export interface Testimonial {
  name: string;
  relation: string; // Karachi residency details
  rating: number;
  text: string;
  packageUsed: string;
}

export interface ThemeColors {
  primary: string;        // emerald for Islamic theme
  accent: string;         // amber
  navBg: string;          // background for navigation
  heroBgGradient: string; // main gradient overlay
  primaryBtn: string;     // bg-emerald-600 hover:bg-emerald-700
  secondaryBtn: string;   // border styles
  badgeBg: string;        // badge style element
  textPrimary: string;    // text-emerald-800
  textAccent: string;     // text-amber-500
  lightBg: string;        // light theme backdrop
  footerBg: string;       // footer background
  cardBorderHover: string;// hover border ring
}

export interface AgencyConfig {
  agencyName: string;
  logoText: string;
  tagline: string;
  dtsLicense: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address: string;
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    heroImage: string;
  };
  colors: ThemeColors;
  trustBadges: TrustBadge[];
  services: ServiceItem[];
  packages: TravelPackage[];
  about: {
    headline: string;
    bioParagraph: string;
    karachiSignificance: string;
  };
  testimonials: Testimonial[];
  destinations: string[]; // for contact form options
  faqs: Array<{q: string; a: string}>;
}

// Single, dedicated configuration for Hajj, Umrah & Ziyarats
export const agencyConfig: AgencyConfig = {
  agencyName: 'Al-Buraq Travel & Tours (KHI)',
  logoText: 'Al-Buraq Tours',
  tagline: 'Your Sacred Journey Begun with Perfect Trust',
  dtsLicense: 'DTS License No: KHI-7862/2026',
  phone: '923112872129',
  phoneFormatted: '0311-2872129',
  email: 'hajj-umrah@alburaqtours.com',
  address: 'Suite 4C, 2nd Floor, Al-Buraq Plaza, Commercial Lane Phase 2 Ext, DHA, Karachi, Pakistan',
  hero: {
    title: 'Trusted Hajj, Umrah & Spiritual Ziyarats from Karachi',
    subtitle: 'Complete premium direct-flight group packages with Karachi-based scholars, premium star-hotels steps from Haram boundaries, and absolute government DTS licensing.',
    ctaPrimary: 'Explore Packages',
    ctaSecondary: 'Chat on WhatsApp',
    heroImage: './src/assets/images/hero_islamic_1779272851321.png'
  },
  colors: {
    primary: 'emerald',
    accent: 'amber',
    navBg: 'bg-black/70 backdrop-blur-md border-b border-white/5',
    heroBgGradient: 'bg-gradient-to-t from-[#080808] via-[#080808]/90 to-transparent',
    primaryBtn: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg transition-colors',
    secondaryBtn: 'border border-white/20 text-white hover:bg-white/5 transition-colors',
    badgeBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    textPrimary: 'text-emerald-400',
    textAccent: 'text-amber-400',
    lightBg: 'bg-zinc-950/50',
    footerBg: 'bg-black',
    cardBorderHover: 'hover:border-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/5'
  },
  trustBadges: [
    {
      title: 'Pakistan DTS Verification',
      description: 'Approved DTS License (KHI-7862/2026), Ministry of Hajj & Pilgrimage Affairs.',
      iconName: 'ShieldCheck'
    },
    {
      title: 'Direct Group Operations',
      description: 'No middleman. End-to-end direct hotel, transport & visa handling from Karachi.',
      iconName: 'Users'
    },
    {
      title: 'On-Ground Guides',
      description: 'Karachi guides & Islamic scholars join the group to lead pilgrimage step-by-step.',
      iconName: 'Compass'
    },
    {
      title: 'Direct Flight Operations',
      description: 'Guaranteed group booking with leading direct airlines from Jinnah International KHI.',
      iconName: 'PlaneTakeoff'
    }
  ],
  services: [
    {
      title: 'Premium Umrah Packages',
      description: 'We offer economy premium, 4-star, and 5-star customized or group Umrah programs with close-by hotel bookings.',
      iconName: 'Moon'
    },
    {
      title: 'Official Hajj Processing',
      description: 'Government and Private Hajj quotas. Complete training sessions held in Karachi prior to departures.',
      iconName: 'Award'
    },
    {
      title: 'Iraq & Iran Ziyarats',
      description: 'Accompanied group journeys to Najaf, Karbala, Baghdad, and Mashhad with premium hotels and local security.',
      iconName: 'Map'
    },
    {
      title: 'Family Visa Processing',
      description: 'Hassle-free eVisa processing for Umrah within 48-72 business hours.',
      iconName: 'FileCheck'
    },
    {
      title: 'AC Luxury Coach Transfers',
      description: 'High-quality VIP coaches for transport between Jeddah, Makkah, Madinah, and Ziyarat spots.',
      iconName: 'Bus'
    },
    {
      title: 'Halal Full-Board Meals',
      description: 'Daily buffet breakfast, lunch, and dinner with authentic Pakistani taste specially customized for our groups.',
      iconName: 'Utensils'
    }
  ],
  packages: [
    {
      id: '1',
      title: 'Premium 15-Day Umrah Group Package',
      price: 'PKR 345,000',
      stay: '7 Nights Makkah (5-Star Hotel steps from Haram) & 7 Nights Madinah (4-Star Near Nabawi)',
      inclusions: ['✈️ Direct KHI Flights', '🏨 5-Star Hotel (Makkah)', '🚌 AC Coach Transport', '📑 Visa & Health Ins.'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdH8nbMZRXEhtDbtlLWKxCqNAyaGbnxzS-3rgQ3uoj-CJz37D3FnD5eatS&s=10',
      whatsappQuery: 'Assalam-o-Alaikum Al-Buraq Tours, I am interested in booking the Premium 15-Day Umrah Group Package departing from Karachi.',
      badge: '⭐️ Popular'
    },
    {
      id: 'pkg-u-exec',
      title: 'Custom VIP Executive Umrah Package',
      price: 'PKR 495,000',
      stay: 'Flexible stay with Dar Al Tawhid Makkah & Pullman Zamzam Madinah',
      inclusions: ['✈️ Direct Saudia Flight', '🏨 5-Star Luxury Frontage', '🚗 VIP Private Transfer', '📑 Fast Visa Service'],
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR5KuQDZcWm6U--eQhkU-JOGbQ0cYigcXnIvfMsoOc0A&s=10',
      whatsappQuery: 'Assalam-o-Alaikum Al-Buraq Tours, I would like to get a quote for the Custom VIP Executive Umrah Package from Karachi.',
      badge: '✨ Elite Luxury'
    },
    {
      id: 'pkg-hajj-2026',
      title: 'Official 2026 Hajj Complete Package',
      price: 'PKR 895,000',
      stay: '25 Days in Makkah & Madinah with premium accommodation',
      inclusions: ['✈️ Direct PIA Flights', '🏨 5-Star Makkah Hotel', '🚌 Private Transport', '📑 Hajj Visa Included', '🍽️ Full Board Meals'],
      imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=800',
      whatsappQuery: 'Assalam-o-Alaikum Al-Buraq Tours, I am interested in the Official 2026 Hajj Complete Package from Karachi.',
      badge: '🎯 Limited Spots'
    },

    {
      id: 'pkg-ziy-iraq',
      title: 'Baghdad, Najaf & Karbala Ziyarat Tour',
      price: 'PKR 290,000',
      stay: '10 Days group itinerary guided by local scholars. 3 Meals included.',
      inclusions: ['✈️ Air Arabia Route', '🏨 Standard Close Hotels', '🚌 VIP Escort Transport', '📑 Group Visa Included'],
      imageUrl: 'https://images.unsplash.com/photo-1718680962024-0fa899e1815e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FyYmFsYXxlbnwwfHwwfHx8MA%3D%3D',
      whatsappQuery: 'Assalam-o-Alaikum Al-Buraq Tours, I am interested in joining the next Baghdad, Najaf & Karbala Ziyarat departure from Karachi.',
      badge: '🕋 Scholar Guided'
    },
    {
      id: 'pkg-hajj-2027',
      title: 'Official 2027 Hajj Complete Package',
      price: 'PKR 925,000',
      stay: '27 Days in Makkah & Madinah with premium accommodation',
      inclusions: ['✈️ Direct PIA Flights', '🏨 5-Star Makkah Hotel', '🚌 Private Transport', '📑 Hajj Visa Included', '🍽️ Full Board Meals', '🛡️ Extended Insurance'],
      imageUrl: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&q=80&w=800',
      whatsappQuery: 'Assalam-o-Alaikum Al-Buraq Tours, I am interested in the Official 2027 Hajj Complete Package from Karachi.',
      badge: '🔥 Pre-Book Now'
    },
    {
      id: 'pkg-ziy-iran',
      title: 'Mashhad & Qom Iran Ziyarat Tour',
      price: 'PKR 325,000',
      stay: '12 Days group itinerary with religious scholars. All meals included.',
      inclusions: ['✈️ Iran Air Flights', '🏨 Premium Hotels', '🚌 Private Transport', '📑 Iran Visa Included', '🍽️ Daily Meals'],
      imageUrl: 'https://5.imimg.com/data5/ZZ/RB/IU/SELLER-73177103/ziyarat-packages-iran-services.png',
      whatsappQuery: 'Assalam-o-Alaikum Al-Buraq Tours, I am interested in joining the Mashhad & Qom Iran Ziyarat Tour from Karachi.',
      badge: '🕌 New Departure'
    }
  ],
    about: {
      headline: 'Over 15 Years of Serving Pilgrims in Karachi with Unmatched Honour',
      bioParagraph: 'Operating from our central office in DHA Karachi, we have been blessed to assist thousands of pilgrims in performing their holy obligations. We operate on a zero-compromise quality standard, ensuring our elders, women, and families from Karachi receive top-tier, direct support from the moment they step into Jinnah International Airport until their secure return.',
      karachiSignificance: 'Convenient physical office in Karachi for face-to-face trust builder documents review, fingerprint guides, and daily pre-flight training sessions.'
    },
    testimonials: [
      {
        name: 'Dr. Faisal Shah',
        relation: 'Malir Cantonment, Karachi',
        rating: 5,
        text: 'Al-Buraq handled Umrah arrangements for my elderly parents. They were extremely concerned due to distance to Haram, but Al-Buraq provided them with a wheelchair-friendly room just 3 minutes walk from the central gate. Simply outstanding support!',
        packageUsed: 'Premium 15-Day Umrah'
      },
      {
        name: 'Mrs. S. Batool',
        relation: 'Gulshan-e-Iqbal, Karachi',
        rating: 5,
        text: 'For the Ziyarat of Iraq, our entire family travelled with them. Extremely structured, safe, and of very high religious focus. The scholar, Maulana Raza, guided our prayers at every shrine with absolute details.',
        packageUsed: 'Iraq Ziyarat Tour'
      },
      {
        name: 'Muhammad Haris Siddiqui',
        relation: 'Nazimabad, Karachi',
        rating: 5,
        text: 'Unbiased and transparent packages. No hidden costs. They delivered exactly what was written in our agreement. Our hotels in Madinah had hot Pakistani buffet styling which was delightful.',
        packageUsed: 'Executive Umrah'
      }
    ],
    destinations: [], // Kept for interface compatibility - destinations are now dynamically pulled from packages array
    faqs: [
      {
        q: 'Where are your pre-departure training sessions held in Karachi?',
        a: 'We hold complete, step-by-step physical training sessions for Hajj and Umrah pilgrims at our centralized DHA office hall. We cover flight boarding, Ahram restrictions, Tawaf guidelines, and on-ground Saudi logistics.'
      },
      {
        q: 'How far are your Makkah hotels from the Haram boundary?',
        a: 'Our premium hotels are within direct walking distance (typically 3 to 5 minutes, less than 250 meters) of the Haram boundary courtyard. We prioritize elderly-friendly streets with zero steep elevations.'
      },
      {
        q: 'Are Pakistani dishes served daily in group catering packages?',
        a: 'Yes, our custom catering services provide authentic Pakistani breakfasts, lunches, and dinners prepared by specialized chefs in Makkah, Madinah, and Najaf hotels daily.'
      },
      {
        q: 'Can women travel without a Mehram under your group packages?',
        a: 'Yes, under the updated Saudi regulations, women are legally allowed to secure Umrah visas and travel in our certified, family-guided group cohorts accompagnied by reliable terminal directors.'
      }
    ]
};