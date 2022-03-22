import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CartItemsContextProvider } from "./cart-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <CartItemsContextProvider>
      <App />
    </CartItemsContextProvider>
  </StrictMode>,
  rootElement
);
