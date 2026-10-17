// Pure helpers for cart maths. Keeping them outside the components
// makes the numbers easy to test and the components easy to read.

export const TAX_RATE = 0.05; // 5% tax
export const SHIPPING_FEE = 60; // flat shipping in BDT
export const FREE_SHIPPING_OVER = 3000; // free shipping threshold

export const getTotalQuantity = (items) =>
  items.reduce((total, item) => total + item.quantity, 0);

export const getSubtotal = (items) =>
  items.reduce((total, item) => total + item.price * item.quantity, 0);

export const getCartSummary = (items) => {
  const subtotal = getSubtotal(items);
  const tax = subtotal * TAX_RATE;
  const shipping =
    subtotal === 0 || subtotal >= FREE_SHIPPING_OVER ? 0 : SHIPPING_FEE;
  return { subtotal, tax, shipping, total: subtotal + tax + shipping };
};
