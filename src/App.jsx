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
import Payouts from "./pages/dashboard/sellers/sales/Payouts";
import Transactions from "./pages/dashboard/sellers/sales/Transactions";
import AllProducts from "./pages/dashboard/admin/products/AllProducts";
import AdminTransactions from "./pages/dashboard/admin/finance/AdminTransactions";
import AdminPayouts from "./pages/dashboard/admin/finance/AdminPayouts";
import Earnings from "./pages/dashboard/admin/finance/Earnings";
import ViewCategory from "./pages/dashboard/admin/products/ViewCategory";
import ViewStores from "./pages/dashboard/admin/stores/ViewStores";
import StoreRequest from "./pages/dashboard/admin/stores/StoreRequest";
import AllUsers from "./pages/dashboard/admin/users/AllUsers";
import Notification from "./pages/dashboard/admin/notifications/Notification";
import Setting from "./pages/dashboard/admin/settings/Setting";
import AddCategory from "./pages/dashboard/admin/products/AddCategory";
import Complaints from "./pages/dashboard/admin/complaints/Complaints";
import ComplaintDetail from "./pages/dashboard/admin/complaints/ComplaintDetail";
import StoreSetup from "./pages/StoreSetup";
import StoreSetupDemo from "./pages/StoreSetupDemo";
import StoreProfile from "./pages/dashboard/sellers/store profile/StoreProfile";
import SellerNotification from "./pages/dashboard/sellers/notifications/SellerNotification";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<AppLayout />} />
            <Route path="/store-setup" element={<StoreSetup />} />
            <Route path="/store-demo" element={<StoreSetupDemo />} />

            {/* Dashboard routes inside DashboardLayout */}
            <Route path="/dashboard" element={<DashBoardLayout />}>
              <Route index element={<DashBoard />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="products/view" element={<ProductList />} />
              <Route path="products/reviews" element={<Reviews />} />
              <Route path="products/inventory" element={<Inventory />} />
              <Route path="orders" element={<OrderList />} />
              <Route path="sales/payouts" element={<Payouts />} />
              <Route path="sales/transactions" element={<Transactions />} />
                <Route path="settings/notifications" element={<SellerNotification />} />
              {/* admin dashboard page */}
              <Route path="admin/products" element={<AllProducts />} />
              <Route
                path="admin/transactions"
                element={<AdminTransactions />}
              />
              <Route path="admin/payouts" element={<AdminPayouts />} />
              <Route path="admin/earnings" element={<Earnings />} />
              <Route path="admin/categories" element={<ViewCategory />} />
              <Route path="admin/categories/add" element={<AddCategory />} />
              <Route path="admin/stores" element={<ViewStores />} />
              <Route path="admin/stores/requests" element={<StoreRequest />} />
              <Route path="admin/stores/profile" element={<StoreProfile />} />
              <Route path="admin/users" element={<AllUsers />} />
              <Route path="admin/settings" element={<Setting />} />
              <Route path="admin/complaints" element={<Complaints />} />
              <Route
                path="admin/complaintsdetails"
                element={<ComplaintDetail />}
              />
              <Route
                path="admin/settings/notification"
                element={<Notification />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
