import React from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import BlogGrid from "./Components/BlogGrid";
import ContactForm from "./Components/ContactForm";
import { Routes, Route } from "react-router-dom"; 
import AboutPage from "./Components/About";
import "./about.css";
import AppSection from "./Components/AppSection"; // Import AppSection
import PricingPlans from "./Components/PricingPlans"; // Import PricePlans
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Carousel /><AppSection/></>} />
        <Route path="/serves" element={<BlogGrid />} />
        <Route path="/products" element={<><AppSection/><AppSection/><AppSection/><PricingPlans/></>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<h1 style={{display:"flex", justifyContent:"center",margin:"202.5px"}}>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
