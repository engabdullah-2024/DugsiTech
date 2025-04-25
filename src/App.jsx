import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header'; // ✅ Import Header
import Footer from './components/Footer'; // ✅ Import Footer
import Exam from './pages/Exam';
import Dev from './pages/Dev';
import Contact from './pages/Contact';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Gallery from './components/Gallery';
import Testimonials from './pages/Testimonials';
import Hero from './pages/Hero';
import Service from './components/Service';
import OurServices from './components/OurServices';
import Plans from './pages/Plans';
import Payment from './pages/Payment';


const App = () => {
  return (
    <Router>
      <Header /> {/* ✅ Call Header at the top */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/service" element={<Service />} />
        <Route path="/our" element={<OurServices />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/payment" element={<Payment />} />
       
       
      </Routes>
      <Footer /> {/* ✅ Call Footer at the bottom */}
    </Router>
  );
};

export default App;
