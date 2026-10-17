/** Format a number as Bangladeshi Taka, e.g. 1200 -> "৳1,200" */
export const formatPrice = (amount) =>
  `৳${Math.round(amount).toLocaleString("en-US")}`;
