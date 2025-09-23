import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";
import { Outlet } from "react-router-dom";

class AppLayout extends React.Component {
  render() {
    return (
      <div className="">
        <Navbar appTitle="React Multi Layout" />
        <Outlet />
        <Footer />
        <ScrollToTop variant="classic" />
      </div>
    );
  }
}

export default AppLayout;