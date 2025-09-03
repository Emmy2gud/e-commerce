// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layouts/AppLayout";
import DashBoardLayout from "./components/layouts/DashBoardLayout";
import DashBoard from "./pages/dashboard/DashBoard";




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
          
            </Route>
        
        
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
