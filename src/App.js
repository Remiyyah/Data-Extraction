import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";
import Footer from "./components/Footer"; // Import the Footer component
import SignUpLogin from "./components/SignUpLogin";
import ContactUs from "./components/ContactUs";
import BeforeAfterComparison from "./components/BeforeAfterComparison";
import AnonymizingToolPreview from "./components/AnonymizingToolPreview";
import EmailInterface from "./components/EmailInterface";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar at the top */}
        <Navbar />

        {/* Main content */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/account" element={<SignUpLogin />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/comparison" element={<BeforeAfterComparison />} />
          <Route path="/anon" element={<AnonymizingToolPreview/>} />
          <Route path="/email" element={<EmailInterface/>} />
          
        </Routes>

        {/* Footer at the bottom */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;