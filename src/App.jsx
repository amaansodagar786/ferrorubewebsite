import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar"; // adjust path if needed
import React, { useState, useEffect } from "react";
// --- Pages ---
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About";
import Capabilities from "./Pages/Capabilities/Capabilities";

import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";

import "./App.css";
import Footer from "./Pages/Footer/Footer";
import LeaderIntro from "./Pages/About/Profile/LeaderIntro";
import Leader2 from "./Pages/About/Profile/Leader2";
import PipeFitting from "./Pages/Products/PipeFitting/PipeFitting";

function App() {


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about/leader1" element={<LeaderIntro />} />
        <Route path="/about/leader2" element={<Leader2 />} />


        <Route path="/products/pipe-fitting" element={<PipeFitting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
