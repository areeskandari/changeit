# ChangeIt - Global Family Support Transfer Platform

A modern, trustworthy fintech website for international family support transfers.

## Features

- 🌍 **Multi-language Support**: English, Persian (Farsi), and Arabic with full RTL support
- 💳 **Transparent Pricing**: Tiered fee structure with no hidden costs
- 🔒 **Security First**: Enterprise-grade security and compliance
- ⚡ **Fast Settlement**: 3-12 hour settlement times
- 📱 **Responsive Design**: Mobile-first, modern UI
- 🎨 **Premium Design**: Clean, minimal fintech aesthetic

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS**
- **next-intl** for internationalization
- **RTL Support** for Persian and Arabic

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── [locale]/          # Locale-specific routes
│   │   ├── layout.tsx     # Locale layout with Header/Footer
│   │   ├── page.tsx       # Homepage
│   │   ├── about/         # About page
│   │   ├── compliance/    # Compliance page
│   │   ├── pricing/       # Pricing page
│   │   ├── monthly-plans/ # Monthly plans page
│   │   ├── faq/           # FAQ page
│   │   ├── contact/       # Contact page
│   │   ├── privacy/       # Privacy policy
│   │   └── terms/         # Terms of service
│   └── layout.tsx         # Root layout
├── components/
│   ├── Header.tsx         # Header with language switcher
│   ├── Footer.tsx         # Footer
│   └── sections/         # Homepage sections
├── messages/              # Translation files
│   ├── en.json           # English
│   ├── fa.json           # Persian (Farsi)
│   └── ar.json           # Arabic
└── i18n.ts               # i18n configuration
```

## Languages

- **English (en)**: Default language
- **Persian/Farsi (fa)**: Full RTL support
- **Arabic (ar)**: Full RTL support

Language switcher is available in the header.

## Build

```bash
npm run build
```

## License

© 2024 ChangeIt. All rights reserved.

