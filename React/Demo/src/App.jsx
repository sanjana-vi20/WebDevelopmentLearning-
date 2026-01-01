import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import {Toaster}from "react-hot-toast";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position="top-center" reverseOrder = {false}/>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
