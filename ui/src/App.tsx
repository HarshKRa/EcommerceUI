import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, ThemeProvider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navbar from "./customer/components/NavBar/Navbar";
import customTheme from "./theme/customTheme";
import Home from "./customer/pages/home/Home";
import Product from "./customer/pages/Product/Product";
import ProductDetails from "./customer/pages/productDetails/ProductDetails";
import Review from "./customer/pages/Review/Review";
import Cart from "./customer/pages/Cart/Cart";
import CheckOut from "./customer/pages/checkOut/CheckOut";
import Account from "./customer/pages/Account/Account";
import { Route, Routes, useNavigate } from "react-router-dom";
import BecomeSeller from "./customer/pages/Become Seller/BecomeSeller";
import SellerDashboard from "./seller/pages/SellerDashboard/SellerDashboard";
import AdminDashboard from "./admin/Pages/Dashboard/Dashboard";
import { fetchProducts } from "./State/fetchProduct";
import { useAppDispatch, useAppSelctoer } from "./State/Store";
import { fetchSellerProfile } from "./State/seller/SellerSlice";
import Auth from "./customer/pages/Auth/Auth";
import { fetchUserProfile } from "./State/AuthSlice";
import PaymentSuccess from "./customer/pages/PaymentSuccess";
import WishList from "./customer/pages/WishList/WishList";

function App() {
  const dispatch = useAppDispatch();

  const { seller } = useAppSelctoer((store) => store);
  const { auth } = useAppSelctoer((store) => store);

  const navigate = useNavigate();

  useEffect(() => {
    // localStorage.clear();
    dispatch(fetchSellerProfile(localStorage.getItem("jwt") || ""));
  },[]);

  useEffect(() => {
    if (seller.profile) {
      navigate("/seller");
    }
  },[seller.profile]);

  useEffect(()=>{
    dispatch(fetchUserProfile({jwt : auth.jwt || localStorage.getItem("jwt")}));
  },[auth.jwt])

  
  return (
    <ThemeProvider theme={customTheme}>
      <div>
        {/* <Home /> */}
        {/* <Product /> */}
        {/* <ProductDetails /> */}
        {/* <Review /> */}
        {/* <Cart /> */}
        {/* <CheckOut /> */}
        {/* <Account /> */}

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/products/:category" element={<Product />} />
          <Route path="/reviews/:productId" element={<Review />} />
          <Route
            path="/product-details/:caategoryId/:name/:productId"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/payment_success/:orderId" element={<PaymentSuccess />} />
          <Route path="/become-seller" element={<BecomeSeller />} />
          <Route path="/account/*" element={<Account />} />
          <Route path="/seller/*" element={<SellerDashboard />} />
          <Route path="/admin/*" element={<AdminDashboard />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
