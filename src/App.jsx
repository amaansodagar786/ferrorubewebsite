import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar/Navbar"; // adjust path if needed

// --- Pages ---
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About";
import Capabilities from "./Pages/Capabilities/Capabilities";

import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";

import "./App.css";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/capabilities" element={<Capabilities />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
