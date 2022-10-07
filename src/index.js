import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";
//comfy-ecommerce-react.us.auth0.com
//58vsWO9RfOcgF75lXMG9WIrO2wU3nLAM
ReactDOM.render(
  <Auth0Provider
    domain="comfy-ecommerce-react.us.auth0.com"
    clientId="58vsWO9RfOcgF75lXMG9WIrO2wU3nLAM"
    redirectUri={window.location.origin}
    chacheLocation="localstorage"
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
