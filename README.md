# Penguin Fashion (React)

Task 04 converts the Task-02 Penguin Fashion HTML template into a responsive React application built with Vite. It includes women's and men's jacket collections, an interactive shopping cart, and toast notifications.

- **Task 04 GitHub repository:** [najirhussain029/penguin-fashion-reac](https://github.com/najirhussain029/penguin-fashion-reac)
- **Live website:** [penguin-fashion-reac.vercel.app](https://penguin-fashion-reac.vercel.app/)
- **Original HTML project:** [najirhussain029/penguin-fashion](https://github.com/najirhussain029/penguin-fashion)

## Tech stack

- React 19 with functional components and hooks
- Vite
- Plain CSS, organized by page section and feature

## Run locally

```bash
npm install
npm run dev      # Start the development server at http://localhost:5173
npm run build    # Create the production build in dist/
npm run preview  # Preview the production build locally
```

## Features

### Storefront

- Separate women's and men's jacket collections, with 10 products in each collection.
- Product cards are rendered from product data arrays.
- Responsive layout with a mobile navigation menu.
- Shared color palette, typography, and button styling based on the original template.

### Shopping cart

- The navbar cart button displays the live total item quantity.
- Selecting **Buy now** adds the product and opens the slide-out cart drawer.
- The drawer shows each product's image, name, unit price, quantity controls, remove button, and line total.
- Adding the same product again increases its quantity instead of creating a duplicate row.
- The empty-cart view includes a message, shopping illustration, and **Continue shopping** link. The link closes the drawer and navigates to the products section.
- The drawer closes using its close button, the page overlay, or the Escape key. Background scrolling is locked while it is open.
- On narrow screens, the drawer fills the available width and the empty-cart content can scroll if needed.
- Cart state is held in React while the app is open; it is not saved between page reloads.

### Cart totals

The cart summary displays subtotal, 5% tax, shipping, and grand total. Shipping is ৳60 for orders below ৳3,000 and free for orders of ৳3,000 or more. The total is calculated as:

```text
Subtotal + tax + shipping = grand total
```

The minus control cannot reduce an item's quantity below one; use the remove button to delete it.

### Notifications and interactions

- Toasts confirm product additions, removals, and successful contact form submissions. They dismiss automatically.
- The checkout button displays a demo notice; payment and order processing are not connected.
- Product cards and buttons provide hover, press, and added-to-cart feedback.
- The cart badge pulses and the cart icon bounces when the item count changes.
- The drawer slides in over a fading overlay.
- Motion is reduced for users who enable their system's reduced-motion preference.

## Project structure

```text
src/
├── App.jsx                  # Shared cart, drawer, and toast state
├── main.jsx                 # App entry point and CSS imports
├── assets/images/           # Bundled product and hero images
├── components/
│   ├── cart/                 # Cart button, drawer, items, summary, and empty state
│   ├── feedback/             # Toast notifications
│   ├── layout/               # Navbar and footer
│   ├── product/              # Product card
│   ├── sections/             # Hero, collections, benefits, and support form
│   └── ui/                   # Reusable buttons, icons, price, and layout primitives
├── data/                     # Product, benefit, and navigation data
├── styles/                   # Base, section, responsive, cart, and toast styles
└── utils/                    # Cart calculations and price formatting
```

## Implementation notes

- `App.jsx` is the single source of truth for cart contents, so the navbar badge and drawer stay synchronized.
- Cart updates are immutable; cart calculations and price formatting are kept in pure utility functions.
- Reusable UI components receive their data and actions through props.

## Images

The original Task-02 images are reused. Some jacket images are color-edited variants to provide 10 distinct products per collection. Images are bundled locally, so the storefront does not depend on a remote image service. These are demo assets; to use different product photos, replace the files in `src/assets/images/` and update the imports in `src/data/products.js`.

## Author

Najir Hussain
