import { Button } from "@/components/ui/button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SellerPage from "./pages/SellerPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CheckOut from "./pages/CheckOut";
import ProductLists from "./pages/ProductLists";
import NearbyUser from "./pages/NearbyUser";
import DashBoard from "./pages/dashboard/DashBoard";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="">
            
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/vendor" element={<SellerPage />} />
              <Route path="/productlists" element={<ProductLists />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
              <Route path="/location" element={<NearbyUser/>} />
               <Route path="/dashboard" element={<DashBoard/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
