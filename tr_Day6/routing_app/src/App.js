import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css";
import Home from "./pages/home";
import Contact from "./pages/contact";
import About from "./pages/about";
import Services from "./pages/services";
import Nav from "./navbar";
import Notfound from "./pages/notfound";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
