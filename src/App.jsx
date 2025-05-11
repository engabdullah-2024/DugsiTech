import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/Header';
import Footer from './components/Footer';
// import Exam from './pages/Exam';
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
import Schools from './pages/Schools';
import Community from './components/Community';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';
import Quiz from './pages/Quiz';
import Answers from './pages/Answers';

// ✅ Protected Route Logic
const ProtectedRoute = ({ children }) => {
  const auth = localStorage.getItem('auth');
  return auth ? children : <Navigate to="/login" />;
};

const App = () => {
  const auth = localStorage.getItem('auth');

  return (
    <Router>
      {/* Header always visible */}
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />

        {/* 🔒 Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hero"
          element={
            <ProtectedRoute>
              <Hero />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        {/* <Route
          path="/exam"
          element={
            <ProtectedRoute>
              <Exam />
            </ProtectedRoute>
          }
        /> */}
        <Route
          path="/dev"
          element={
            <ProtectedRoute>
              <Dev />
            </ProtectedRoute>
          }
        />
        <Route
          path="/quiz"
          element={
            <ProtectedRoute>
              <Quiz />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/privacy"
          element={
            <ProtectedRoute>
              <Privacy />
            </ProtectedRoute>
          }
        />
        <Route
          path="/terms"
          element={
            <ProtectedRoute>
              <Terms />
            </ProtectedRoute>
          }
        />
        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <Gallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/testimonials"
          element={
            <ProtectedRoute>
              <Testimonials />
            </ProtectedRoute>
          }
        />
        <Route
          path="/service"
          element={
            <ProtectedRoute>
              <Service />
            </ProtectedRoute>
          }
        />
        <Route
          path="/our"
          element={
            <ProtectedRoute>
              <OurServices />
            </ProtectedRoute>
          }
        />
        <Route
          path="/plans"
          element={
            <ProtectedRoute>
              <Plans />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schools"
          element={
            <ProtectedRoute>
              <Schools />
            </ProtectedRoute>
          }
        />
        <Route
          path="/community"
          element={
            <ProtectedRoute>
              <Community />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/answers"
          element={
            <ProtectedRoute>
              <Answers />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </Router>
  );
};

export default App;
