# Rukman Palta - Combined Frontend Portfolio

This is one combined portfolio project built from the three uploaded frontend projects:

1. `portfolio` is now the main landing page.
2. `tea-station` is included as a complete working demo in `projects/tea-station/`.
3. `backroads` is included as a complete working demo in `projects/backroads/`.

## How to run

Open `index.html` directly in a browser, or open the folder in VS Code and run it with Live Server.

## Main pages

- `index.html` — recruiter-facing landing page
- `about.html` — resume highlights and experience summary
- `projects.html` — all project cards and links
- `component-lab.html` — reusable UI component examples
- `contact.html` — contact placeholders to update before sharing

## Project demos

- Tea Station: `projects/tea-station/index.html`
- Backroads: `projects/backroads/index.html`

## Modern CSS structure

The root portfolio uses modular CSS imports:

- `css/main.css`
- `css/tokens.css`
- `css/base.css`
- `css/layout.css`
- `css/components.css`
- `css/pages.css`

The `scss/` folder includes examples of Sass maps, mixins, and `@use` imports for interview discussion and future optimization.

## Before sharing publicly

Contact details updated with Rukman Palta email, LinkedIn, and South Lyon, Michigan location.

## Responsive Updates

This version includes an added `css/responsive.css` layer imported after the main component styles. It improves small-screen behavior for navigation, buttons, cards, grids, hero sections, and converts the Component Lab comparison table into stacked cards on mobile screens. Responsive polish overrides were also added to the Tea Station and Backroads demos so the included original projects behave better on smaller devices.


## Latest updates

- Restored original Tea Station and Backroads project CSS files so their animations, hover states, cards, and original effects remain intact.
- Added separate `portfolio-integration.css` files for responsive fixes and portfolio back links.
- Added a working static contact form with first name, last name, email, company/role, message, validation, and success/error states.
- Added demo form validation to Tea Station and Backroads forms.
- Reduced oversized typography for better desktop and mobile readability.
- Updated the portfolio logo asset to say `Rukman` instead of the original placeholder logo text.
