import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import RootLayout from "./components/layout/RootLayout";
import About from "./components/pages/About";
import Account from "./components/pages/Account";
import CartPage from "./components/pages/CartPage";
import CheckOut from "./components/pages/CheckOut";
import Contact from "./components/pages/Contact";
import Error from "./components/pages/Error";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import ProductDetails from "./components/pages/ProductDetails";
import Products from "./components/pages/Products";
import Sinup from "./components/pages/Sinup";
import { useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import Order from "./components/Order";
// import auth from '../../firebaseConfig'
// import ProDetails from "./components/proDetails";

function App() {
  let [user,setUser]=useState();
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user);
    });
  });
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Sinup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my_account" element={<Account/>} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/ordersuccess" element={<Order/>} />
          <Route path="*" element={<Error />} />
          {/* <Route path="/prodil" element={<ProDetails/>} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;

//  user? <Account />: