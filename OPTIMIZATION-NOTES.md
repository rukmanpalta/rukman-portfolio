# Optimization Notes

## Already included

- CSS custom properties for colors, spacing, radii, shadows, and transitions
- Modular CSS using `@import`
- Responsive grids with media queries
- Accessible navigation with `aria-expanded` and `aria-controls`
- Skip link for keyboard users
- Visible `:focus-visible` states
- Semantic sections, headings, buttons, cards, and tables
- Accordion with real buttons and hidden panels
- SCSS example files with maps, mixins, and `@use`

## Next optimization pass

- Replace placeholder contact links with real links
- Compress large images if hosting on GitHub Pages/Netlify
- Remove unused Font Awesome files to reduce final ZIP size
- Add Lighthouse review fixes after browser testing
- Convert Component Lab into React components:
  - `Navbar`
  - `SecondaryNav`
  - `HeroBanner`
  - `ProjectCard`
  - `Accordion`
  - `ResponsiveTable`
  - `Footer`

## Typography update

Applied the requested portfolio typography scale using rem values:

- Main headings: `2rem` / 32px on large screens around 1440px
- Main headings: `1.25rem` / 20px on desktop/tablet widths under 990px
- Main headings: `1.125rem` / 18px on mobile widths under 767px
- Paragraph text: `1.125rem` / 18px

The values live in `css/tokens.css` as reusable CSS custom properties and are applied through `css/base.css` and `css/responsive.css`. Tea Station and Backroads keep their original animations/effects, with only integration typography overrides added in their separate `portfolio-integration.css` files.
