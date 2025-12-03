import React from "react";
import "./App.css";
import "./index.css";

import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About_us from "./components/about-us/About_us";
import Services from "./components/services/Services";
import Contact_us from "./components/contact-us/Contact_us";
import Privacy_policy from "./components/terms-privacy/Privacy_policy";
import Term_conditions from "./components/terms-privacy/Term_conditions";
import Sign_Up from "./components/sign-up/Sign_Up";
import ScrollToTop from "./components/ScrollTotop/ScrollTotop";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path="/sign-up" element={<Sign_Up />} />
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About_us />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact-us" element={<Contact_us />} />
        <Route path="/privacy-policy" element={<Privacy_policy />} />
        <Route path="/terms-conditions" element={<Term_conditions />} />
      </Routes>
      <Footer />


    </>
  );
}

export default App;
