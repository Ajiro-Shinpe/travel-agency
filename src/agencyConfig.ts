/**
 * Centralized Configuration for Al-Buraq Global Tours
 * Premium outbound & domestic tourism packages from Karachi, Pakistan
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
  relation: string;
  rating: number;
  text: string;
  packageUsed: string;
}

export interface ThemeColors {
  primary: string;
  accent: string;
  navBg: string;
  heroBgGradient: string;
  primaryBtn: string;
  secondaryBtn: string;
  badgeBg: string;
  textPrimary: string;
  textAccent: string;
  lightBg: string;
  footerBg: string;
  cardBorderHover: string;
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
  destinations: string[];
  faqs: Array<{ q: string; a: string }>;
}

export const agencyConfig: AgencyConfig = {
  agencyName: 'Al-Buraq Global Tours',
  logoText: 'Al-Buraq Tours',
  tagline: 'Discover the World. Start from Karachi.',
  dtsLicense: 'DTS License No: KHI-7862/2026',
  phone: '923112872129',
  phoneFormatted: '0311-2872129',
  email: 'hello@alburaqtours.com',
  address: 'Suite 4C, 2nd Floor, Al-Buraq Plaza, Commercial Lane Phase 2 Ext, DHA, Karachi, Pakistan',

  hero: {
    title: 'Premium International & Pakistan Tours from Karachi',
    subtitle:
      'Hand-crafted group & private journeys to Japan, Switzerland, Europe, Turkey, Dubai, Hunza & more. Direct flights, 4–5 star hotels, expert local guides and seamless visa support.',
    ctaPrimary: 'Explore Packages',
    ctaSecondary: 'Chat on WhatsApp',
    heroImage: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1600'
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
      title: 'Pakistan DTS Licensed',
      description: 'Fully licensed tour operator (KHI-7862/2026) under the Ministry of Tourism.',
      iconName: 'ShieldCheck'
    },
    {
      title: 'Direct Group Operations',
      description: 'No middlemen. End-to-end flights, hotels, transfers & experiences managed from Karachi.',
      iconName: 'Users'
    },
    {
      title: 'Expert Local Guides',
      description: 'Professional English & Urdu speaking guides in every destination for authentic experiences.',
      iconName: 'Compass'
    },
    {
      title: 'Preferred Airline Partners',
      description: 'Guaranteed group seats with leading airlines from Jinnah International Airport (KHI).',
      iconName: 'PlaneTakeoff'
    }
  ],

  services: [
    {
      title: 'International Group Tours',
      description: 'Curated fixed-departure packages to Japan, Switzerland, Europe, Turkey, Malaysia, Thailand & more.',
      iconName: 'Globe'
    },
    {
      title: 'Luxury Private Journeys',
      description: 'Fully customisable private tours with 5-star hotels, private transfers and personal itineraries.',
      iconName: 'Award'
    },
    {
      title: 'Pakistan Adventure Tours',
      description: 'Hunza, Skardu, Fairy Meadows, Naran-Kaghan and cultural circuits with premium stays.',
      iconName: 'Mountain'
    },
    {
      title: 'Visa & Documentation',
      description: 'Fast-track visa assistance for Schengen, Japan, UK, USA, Turkey and other destinations.',
      iconName: 'FileCheck'
    },
    {
      title: 'Airport Transfers & Coaches',
      description: 'Private luxury vehicles and air-conditioned coaches for seamless transfers worldwide.',
      iconName: 'Bus'
    },
    {
      title: 'Curated Experiences',
      description: 'Food tours, cultural shows, adventure activities and exclusive local experiences included.',
      iconName: 'Sparkles'
    }
  ],

  packages: [
    {
      id: 'japan-spring',
      title: 'Japan Cherry Blossom Tour – 10 Days',
      price: 'PKR 485,000',
      stay: 'Tokyo • Mount Fuji • Kyoto • Osaka (4–5★ hotels)',
      inclusions: [
        '✈️ Direct / 1-stop flights from KHI',
        '🏨 4–5 Star Hotels',
        '🚌 Private AC Coach',
        '📑 Japan Visa Assistance',
        ' commuter JR Pass'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=800',
      whatsappQuery:
        'Assalam-o-Alaikum Al-Buraq Tours, I am interested in the Japan Cherry Blossom Tour from Karachi.',
      badge: '🌸 Popular'
    },
    {
      id: 'swiss-alps',
      title: 'Swiss Alps & Lakes – 9 Days',
      price: 'PKR 595,000',
      stay: 'Zurich • Lucerne • Interlaken • Geneva (4–5★)',
      inclusions: [
        '✈️ Flights from KHI',
        '🏨 Premium Alpine Hotels',
        '🚆 Swiss Travel Pass',
        '📑 Schengen Visa Support',
        '🚤 Lake Cruise'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=800',
      whatsappQuery:
        'Assalam-o-Alaikum Al-Buraq Tours, I would like details of the Swiss Alps & Lakes package.',
      badge: '✨ Best Seller'
    },
    {
      id: 'europe-classic',
      title: 'Classic Europe Explorer – 14 Days',
      price: 'PKR 725,000',
      stay: 'Paris • Amsterdam • Brussels • Switzerland • Italy',
      inclusions: [
        '✈️ Return Flights',
        '🏨 4-Star Central Hotels',
        '🚌 Luxury Coach',
        '📑 Multi-Entry Schengen',
        '🎟️ Key Attractions'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800',
      whatsappQuery:
        'Assalam-o-Alaikum Al-Buraq Tours, interested in the Classic Europe Explorer package.',
      badge: '🌍 Most Booked'
    },
    {
      id: 'hunza-skardu',
      title: 'Hunza & Skardu Premium – 8 Days',
      price: 'PKR 185,000',
      stay: 'Hunza • Passu • Skardu • Deosai (Boutique & 4★)',
      inclusions: [
        '✈️ Domestic Flights / Road',
        '🏨 Premium Mountain Lodges',
        '🚙 Private 4x4',
        '📸 Photography Guide',
        '🍽️ Full Board'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&q=80&w=800',
      whatsappQuery:
        'Assalam-o-Alaikum Al-Buraq Tours, I want to book the Hunza & Skardu Premium tour.',
      badge: '🏔️ Domestic Favourite'
    },
    {
      id: 'turkey-cappadocia',
      title: 'Turkey & Cappadocia Magic – 8 Days',
      price: 'PKR 265,000',
      stay: 'Istanbul • Cappadocia • Pamukkale',
      inclusions: [
        '✈️ Direct Flights',
        '🏨 Cave Hotels + 5★ Istanbul',
        '🎈 Hot Air Balloon (optional)',
        '📑 E-Visa Included',
        '🚌 Private Transfers'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800',
      whatsappQuery:
        'Assalam-o-Alaikum Al-Buraq Tours, interested in Turkey & Cappadocia package.',
      badge: '🎈 Trending'
    },
    {
      id: 'dubai-abu-dhabi',
      title: 'Dubai & Abu Dhabi Luxury – 6 Days',
      price: 'PKR 195,000',
      stay: 'Downtown Dubai + Yas Island (5★)',
      inclusions: [
        '✈️ Direct Flights',
        '🏨 5-Star Hotels',
        '🚗 Private Transfers',
        '🎟️ Desert Safari + City Tour',
        '🛍️ Shopping Assistance'
      ],
      imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800',
      whatsappQuery:
        'Assalam-o-Alaikum Al-Buraq Tours, I want the Dubai & Abu Dhabi Luxury package.',
      badge: '💎 Quick Getaway'
    }
  ],

  about: {
    headline: '15+ Years Crafting Unforgettable Journeys from Karachi',
    bioParagraph:
      'Based in the heart of DHA Karachi, Al-Buraq Global Tours has helped thousands of Pakistani and international travellers explore the world with confidence. From the cherry blossoms of Japan to the alpine lakes of Switzerland and the majestic valleys of Hunza, we design experiences that balance comfort, authenticity and value.',
    karachiSignificance:
      'Our physical office in DHA makes face-to-face planning easy. Visit us for itinerary customisation, document review and pre-departure briefings.'
  },

  testimonials: [
    {
      name: 'Ayesha & Family',
      relation: 'Clifton, Karachi',
      rating: 5,
      text: 'The Japan Cherry Blossom tour was flawless. Hotels were excellent, the guide was fantastic, and everything ran on time. Highly recommend Al-Buraq for international trips.',
      packageUsed: 'Japan Cherry Blossom'
    },
    {
      name: 'Hassan Raza',
      relation: 'Islamabad (flew via KHI)',
      rating: 5,
      text: 'Swiss Alps package exceeded expectations. Seamless visa process, beautiful hotels and a very professional group manager. Will book Europe next year with them.',
      packageUsed: 'Swiss Alps & Lakes'
    },
    {
      name: 'Sana & Ali',
      relation: 'Gulshan, Karachi',
      rating: 5,
      text: 'Hunza & Skardu trip was pure magic. Boutique stays, private jeep, and the team handled every detail. Perfect domestic luxury experience.',
      packageUsed: 'Hunza & Skardu Premium'
    }
  ],

  destinations: [
    'Japan',
    'Switzerland',
    'Europe',
    'Turkey',
    'Dubai',
    'Hunza & Skardu',
    'Malaysia',
    'Thailand',
    'Custom Private Tour'
  ],

  faqs: [
    {
      q: 'Do you provide visa assistance for all packages?',
      a: 'Yes. We offer complete documentation guidance and submission support for Schengen, Japan, Turkey, UK and other major destinations. Success rate remains very high for complete applications.'
    },
    {
      q: 'Are the international packages fixed-departure group tours?',
      a: 'Most of our popular itineraries run as fixed group departures with guaranteed seats. We also create fully private custom tours for families and couples.'
    },
    {
      q: 'What is included in the package price?',
      a: 'Flights (or domestic transport), hotels, daily breakfast, airport transfers, sightseeing as per itinerary, English/Urdu speaking guide, and visa assistance. Exact inclusions are listed on each package.'
    },
    {
      q: 'Can we customise the itinerary or hotel category?',
      a: 'Absolutely. We specialise in tailored private journeys. Tell us your preferred dates, hotel standard and interests and we will design a personalised proposal.'
    },
    {
      q: 'Where can we meet you before booking?',
      a: 'Our office is in DHA Phase 2 Extension, Karachi. You are welcome to visit for a detailed discussion, document review and to meet the travel consultants.'
    }
  ]
};