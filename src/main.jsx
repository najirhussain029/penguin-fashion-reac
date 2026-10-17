import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./styles/base.css";
import "./styles/header-hero.css";
import "./styles/products-benefits.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/ui.css";
import "./styles/cart.css";
import "./styles/toast.css";
import "./styles/responsive.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
