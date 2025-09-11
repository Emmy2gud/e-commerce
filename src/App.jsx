// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import DashBoardLayout from "./components/layouts/DashBoardLayout";
import DashBoard from "./pages/dashboard/DashBoard";
import AddProduct from "./pages/dashboard/sellers/products/AddProduct";
import ProductList from "./pages/dashboard/sellers/products/ProductList";
import OrderList from "./pages/dashboard/sellers/orders/OrderList";
import Reviews from "./pages/dashboard/sellers/products/Reviews";
import Inventory from "./pages/dashboard/sellers/products/Inventory";





class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
     
            <Route path="/*" element={<AppLayout />} />

            {/* Dashboard routes inside DashboardLayout */}
            <Route path="/dashboard" element={<DashBoardLayout />}>
              <Route index element={<DashBoard />} />
               <Route path="products/add" element={<AddProduct/>} />
               <Route path="products/view" element={<ProductList />} />
                 <Route path="products/reviews" element={<Reviews/>} />
                  <Route path="products/inventory" element={<Inventory/>} />
                <Route path="orders" element={<OrderList />} />
            
              
            </Route>
        
        
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
