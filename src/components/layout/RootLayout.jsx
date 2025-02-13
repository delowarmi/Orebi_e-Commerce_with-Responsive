import React from "react";
import Navbar from "../parts/Navbar";
import Header from "../parts/Header";
import { Outlet } from "react-router-dom";
import Footer from "../parts/Footer";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default RootLayout;
