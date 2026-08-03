# 🚀 Quick Update Guide - Karachi Travel & Tours Agency
Everything you need to know to update this website in minutes!

## 🎨 Change Theme (Colors, Fonts) - 2 Minutes
All theme settings are in **`src/theme.config.ts`**. Simply edit this file to completely change the look.

### How to change colors:
```typescript
// Current emerald theme
colors: {
  primary: 'emerald',
  primaryLight: 'emerald-400',
  primaryDark: 'emerald-700',
  accent: 'amber',
  // ... other colors
}

// Change to blue theme example:
colors: {
  primary: 'blue',
  primaryLight: 'blue-400',
  primaryDark: 'blue-700',
  accent: 'orange',
  // ... other colors
}
```

### How to change fonts:
```typescript
typography: {
  fontFamily: {
    sans: 'Inter, system-ui, sans-serif', // Change this
    heading: 'Inter, system-ui, sans-serif', // Change this
  },
}
```

## 📝 Update Content - 5 Minutes
All website content is in **`src/agencyConfig.ts`**. Edit this single file to update:
- Agency name, contact info, address
- Hero section text and CTAs
- All packages, pricing, inclusions
- Services offered
- Testimonials
- About section
- FAQs
- And more!

### Example - Update contact info:
```typescript
phone: '+923001234786',
email: 'your-email@example.com',
address: 'Your new office address here',
```

### Example - Add a new package:
```typescript
packages: [
  // ... existing packages
  {
    id: 'pkg-new',
    title: 'Your New Package',
    price: 'PKR 400,000',
    stay: '10 days...',
    inclusions: ['Flight', 'Hotel', 'Transport'],
    imageUrl: 'https://your-image-url.com',
    whatsappQuery: 'Your WhatsApp message...'
  }
]
```

## 🌐 SEO Files
- `public/robots.txt` - Update domain when you go live
- `public/sitemap.xml` - Update domain and add more pages as needed
- `index.html` - Update all meta tags, URLs, and structured data

## 🚀 Deploy to Netlify
1. Push your code to GitHub/GitLab
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click deploy! Netlify handles the rest.

## 📦 Build Locally
```bash
npm install
npm run build
# Production files in /dist folder
```

## ✨ Features Implemented
- ✅ Full SEO optimization with meta tags
- ✅ JSON-LD structured data for Google
- ✅ sitemap.xml & robots.txt
- ✅ Native lazy loading for all images
- ✅ Theme system for 2-minute color/font changes
- ✅ Centralized content for 5-minute updates
- ✅ Netlify configuration ready
- ✅ Security headers
- ✅ Performance optimizations
- ✅ Open Graph & Twitter Cards for social sharing