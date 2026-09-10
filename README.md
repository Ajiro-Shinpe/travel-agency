# Karachi Travel & Tours Agency

A responsive, configuration-driven travel website for a Karachi-based agency. The site supports both Islamic tourism and general holiday-planning content through the shared configuration in [`src/agencyConfig.ts`](src/agencyConfig.ts).

## Features

- Responsive landing page for desktop, tablet, and mobile
- Configurable agency details, services, packages, testimonials, and contact information
- Dedicated sections for tours, services, trust badges, testimonials, and contact enquiries
- WhatsApp enquiry shortcut and contact form flow
- SEO metadata, sitemap, robots.txt, and Netlify headers
- Vite production build with hashed assets

## Requirements

- Node.js 18 or newer
- npm

## Getting started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:3000`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run the TypeScript compiler without emitting files |
| `npm run clean` | Remove generated build and server files |

Before committing changes, run:

```bash
npm run lint
npm run build
```

## Customization

Most business content is managed in [`src/agencyConfig.ts`](src/agencyConfig.ts):

- Agency name, contact details, and social links
- Hero content and calls to action
- Services and travel packages
- Testimonials and trust badges
- Islamic tourism and holiday-planner content modes

Visual tokens and shared styling live in [`src/theme.config.ts`](src/theme.config.ts) and [`src/index.css`](src/index.css). Reusable page sections are in `src/components/`.

## Deployment

The project produces a static Vite build and can be deployed to Netlify or any static hosting provider.

```bash
npm run build
```

Deploy the generated `dist/` directory. Netlify settings are included in [`netlify.toml`](netlify.toml).

## Project structure

```text
src/
  agencyConfig.ts       Agency content and business configuration
  App.tsx               Application composition
  index.css             Global styles and responsive layout rules
  theme.config.ts       Theme configuration
  components/           Page sections and shared UI components
  assets/images/        Local image assets
public/                 Static SEO and hosting files
```

## License

This project is maintained for Karachi Travel & Tours Agency. Contact the project owner before reusing its branding, copy, or media.
