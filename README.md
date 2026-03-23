# SOPEG — Next.js + Tailwind CSS

Landing page of the **Sociedad Peruana de Endoscopía Ginecológica**, migrated from a single-file HTML page into a Next.js 15 / Tailwind CSS 4 project.

## Quick start

```bash
cd sopeg-next
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
├── app/
│   ├── globals.css        # CSS custom properties + all component styles
│   ├── layout.tsx         # Root layout (fonts, metadata)
│   └── page.tsx           # Home page — composes all sections
└── components/
    ├── FadeInObserver.tsx  # Client component: scroll-reveal IntersectionObserver
    ├── TopBar.tsx          # Thin dark top bar (email / WhatsApp)
    ├── Header.tsx          # Sticky nav with mobile hamburger (client)
    ├── Hero.tsx            # Full-bleed hero section
    ├── StatsBar.tsx        # 4-column stat strip
    ├── Welcome.tsx         # About / Quiénes Somos section
    ├── Features.tsx        # 3-pillar feature cards
    ├── CongressBanner.tsx  # Dark congress event CTA
    ├── Membership.tsx      # Membership benefits + card visual
    ├── Videos.tsx          # Video library grid
    ├── Board.tsx           # Consejo Directivo section
    └── Footer.tsx          # Site-wide footer
```

## Design tokens

All colours, shadows, fonts and border radii live in `src/app/globals.css` as CSS custom properties under `:root`, so they are fully accessible from both CSS classes and inline `style` props:

```css
--primary: #0B3D5C;
--accent:  #C9A94E;
--teal:    #1A8A7D;
/* … */
```

Tailwind utility classes are used for layout and spacing throughout the components, while custom classes (`.hero`, `.feature-card`, etc.) handle the more complex visual styling defined in `globals.css`.
