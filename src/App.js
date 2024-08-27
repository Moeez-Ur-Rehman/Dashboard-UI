import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import Footer from './component/Footer';
import Signup from './component/Signup.jsx';
import Signin from './component/Signin.jsx';
import GetStarted from './component/get-started.jsx';
import ForgotPassword from './component/ForgotPassword.jsx';
import Profile from './component/Profile.jsx';
import Dashboard from './component/Dashboard';
import ProtectedRoute from './routes/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/get-started" element={<GetStarted />} />

          {/* Protected Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
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
          >
            {/* Add other routes like /settings, /analytics here */}
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
