
import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Cart from "../../pages/Cart";
import CheckOut from "../../pages/CheckOut";
import SellerPage from "../../pages/SellerPage";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";
import ProductLists from "../../pages/ProductLists";
import NearbyUser from "../../pages/NearbyUser";
import ProductDetail from "../../pages/ProductDetail";
import { Routes, Route, Outlet } from "react-router-dom";
import VendorStorefront from "../../pages/VendorStorefront";

class AppLayout extends React.Component {
  render() {
    return (
      <div className="">
        <Navbar appTitle="React Multi Layout" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/vendor" element={<VendorStorefront/>} />
          <Route path="/productlists" element={<ProductLists />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/location" element={<NearbyUser />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default AppLayout;
