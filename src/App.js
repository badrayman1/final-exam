import React from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import Footer from "./Components/Footer";
import BlogGrid from "./Components/BlogGrid";
import ContactForm from "./Components/ContactForm";
import { Routes, Route } from "react-router-dom"; 
import AboutPage from "./Components/About";
import "./about.css";
import ServesSection from "./Components/ServesSection"; 
import PricingPlans from "./Components/PricingPlans"; 
import ProductsSection from "./Components/ProductsSection";
import Cameras from "./Components/Products/Cameras";
import Sensor from "./Components/Products/Sensor";
import Dvr from "./Components/Products/DVR";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Carousel/><h1 style={{display:"flex", justifyContent:"center",marginTop:"80px"}}>Best Services</h1><ServesSection/></>} />
        <Route path="/serves" element={<BlogGrid />} />
        <Route path="/dvr" element={<Dvr />} />
        <Route path="/cameras" element={<Cameras />} />
        <Route path="/sensor" element={<Sensor />} />
        <Route path="/products" element={<><ProductsSection/><PricingPlans/></>} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<h1 style={{display:"flex", justifyContent:"center",margin:"202.5px"}}>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
