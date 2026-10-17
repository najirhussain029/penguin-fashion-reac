# Penguin Fashion (React)

Task 04: the Task-02 Penguin Fashion HTML template converted to React (Vite) with a working cart.

## Run
```bash
npm install
npm run dev      # development
npm run build    # production build in /dist
```

## Structure
```
src/
├── App.jsx                  # cartItems, toasts & drawer state live here (useState)
├── data/                    # products.js (10 women + 10 men), benefits.js, navLinks.js
├── utils/                   # cart.js (totals, tax, shipping), format.js (৳ price)
├── styles/                  # original CSS split by section + ui.css, cart.css, toast.css
└── components/
    ├── ui/        Button, IconButton, Eyebrow, SectionHeading, Price, Logo, ImageFrame, QuantityControl
    ├── layout/    Navbar, Footer
    ├── sections/  Hero, ProductSection, Benefits, Support, ContactForm
    ├── product/   ProductCard
    ├── cart/      CartButton (badge), CartDrawer, CartItem, CartSummary, EmptyCart, icons
    └── feedback/  Toast (ToastContainer)
```

## Cart rules
- "Buy now" on an item already in the cart increments its `quantity` (no duplicate row).
- All updates are immutable (`map`, `filter`, spread).
- `-` is disabled at quantity 1; the trash button removes the item.
- Summary: Subtotal + 5% tax + ৳60 shipping (free over ৳3,000) = Grand Total.

## Images
Original template images are reused. Extra product images are colour variants of the
template jackets (generated offline), so they work without internet. Replace the files in
`src/assets/images/` and the imports in `src/data/products.js` to use real photos.
