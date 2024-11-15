import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navbar from "./customer/components/NavBar/Navbar";
import customTheme from "./theme/customTheme";
import Home from "./customer/pages/home/Home";
import Product from "./customer/pages/product/Product";
import ProductDetails from "./customer/pages/productDetails/ProductDetails";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <Navbar />
        {/* <Home /> */}
        {/* <Product /> */}

        <ProductDetails />
      </div>
    </ThemeProvider>
  );
}

export default App;
