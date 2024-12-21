import React from "react";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";
import BlogGrid from "./Components/BlogGrid";
import ContactForm from "./Components/ContactForm";
import { Routes, Route } from "react-router-dom"; 
import AboutPage from "./Components/About";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Carousel /><HeroSection /></>} />
        <Route path="/blog" element={<BlogGrid />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="*" element={<h1 style={{display:"flex", justifyContent:"center",margin:"202.5px"}}>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
