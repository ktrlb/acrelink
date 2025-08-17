# AcreLink Website

A professional website for AcreLink, a smart technology consulting and installation company specializing in large properties and rural estates across North Central Texas.

## Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS
- **Modern UI**: Built with Shadcn UI components and Radix UI primitives
- **Performance Optimized**: Next.js App Router with React Server Components
- **Professional Sections**: Hero, Services, Testimonials, and CTA sections
- **Complete Pages**: Home, Services, About, Portfolio, and Contact pages

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI + Radix UI
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd acrelink-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── portfolio/        # Portfolio page
│   ├── services/         # Services page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # Shadcn UI components
└── lib/                  # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors
The website uses a blue and green color scheme that can be customized in the Tailwind config and component files.

### Content
Update the content in the component files to match your business needs:
- `src/components/sections/hero.tsx` - Main hero section
- `src/components/sections/services.tsx` - Services offered
- `src/components/sections/testimonials.tsx` - Customer testimonials
- `src/components/sections/cta.tsx` - Call to action section

### Contact Information
Update contact details in:
- `src/components/layout/footer.tsx`
- `src/app/contact/page.tsx`

## Deployment

The website can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js applications

## License

This project is private and proprietary to AcreLink.

## Support

For questions or support, contact the development team.
