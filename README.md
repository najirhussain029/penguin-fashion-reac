Penguin Fashion (React)

Task 04: the Task-02 Penguin Fashion HTML template converted into a React (Vite) application with a working shopping cart.

GitHub repository: najirhussain029/penguin-fashion-react
Task-02 (original HTML version): najirhussain029/penguin-fashion
Tech stack
React 19 (functional components and hooks)
Vite
Plain CSS (the original Task-02 stylesheets, split by section, plus new files for the cart and toasts)
Run locally
bash
npm install
npm run dev      # start the development server (http://localhost:5173)
npm run build    # production build in /dist
npm run preview  # preview the production build
Features
Women's and Men's collections, 10 products each, rendered from arrays with .map()
Live cart badge in the navbar that updates in real time
Slide-out cart drawer with thumbnail, unit price, quantity and line total
+ / - quantity buttons and a trash button to remove an item
Price summary: Subtotal, Tax, Shipping and Grand Total
Empty-cart placeholder with an icon and a friendly message
Toast notifications for add, remove and message-sent actions
Fully responsive layout, including a mobile menu and a full-width cart drawer on phones
Cart rules
Clicking "Buy now" on a product already in the cart increases its quantity. No duplicate row is added.
All state updates are immutable (map, filter and the spread operator). State is never mutated directly.
- is disabled when the quantity is 1. Use the trash button to remove an item.
Summary: Subtotal + 5% tax + ৳60 shipping (free for orders over ৳3,000) = Grand Total.
Animations and interactions
Product cards lift up and the image zooms on hover
Buttons give press feedback, and "Buy now" briefly changes to "Added"
The navbar cart badge pulses and the cart icon bounces when the count changes
Toasts slide in and out automatically
The cart drawer slides in from the right with a fading overlay
Animations are reduced for users who prefer reduced motion
Project structure
text
src/
├── App.jsx                  # cartItems, toasts and drawer state (useState)
├── main.jsx                 # entry point and CSS imports
├── data/                    # products.js (10 women + 10 men), benefits.js, navLinks.js
├── utils/                   # cart.js (totals, tax, shipping), format.js (৳ price)
├── styles/                  # base, header-hero, products-benefits, contact, footer,
│                            # responsive, ui, cart, toast
├── assets/images/           # product and hero images
└── components/
    ├── ui/                  # Button, IconButton, Eyebrow, SectionHeading, Price,
    │                        # Logo, ImageFrame, QuantityControl
    ├── layout/              # Navbar, Footer
    ├── sections/            # Hero, ProductSection, Benefits, Support, ContactForm
    ├── product/             # ProductCard
    ├── cart/                # CartButton, CartDrawer, CartItem, CartSummary,
    │                        # EmptyCart, CartIcon, TrashIcon
    └── feedback/            # Toast (ToastContainer)
Component design
Reusable UI: small pieces such as Button, IconButton, Price and QuantityControl are used across the whole site.
Separate data layer: all product, benefit and menu data lives in src/data/. Components only receive props.
Single source of truth: the cart state lives in App.jsx, so the navbar badge and the cart drawer always stay in sync.
Pure helpers: cart maths and price formatting are in src/utils/, outside the components.
Images

The original Task-02 images are reused. To get 10 unique products per category, some images are colour-edited variants of the template jackets. They are bundled with the project, so the site works without an internet connection. These images are demo content for a learning project. To use real product photos, replace the files in src/assets/images/ and update the imports in src/data/products.js.

Author

Najir Hussain