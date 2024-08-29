import React from 'react';
import { BrowserRouter as Router, Routes, Route,Switch } from 'react-router-dom';
import Header from './mySite/components/header.jsx';
import Home from './mySite/publicPages/home.jsx';
import Footer from './mySite/components/footer.jsx';
import Signup from './mySite/publicPages/signUp.jsx';
import Signin from './mySite/publicPages/signIn.jsx';
import GetStarted from './mySite/publicPages/getStarted.jsx';
import ForgotPassword from './mySite/publicPages/forgotPassword.jsx';
import Profile from './mySite/privatePages/profile.jsx';
import Dashboard from './mySite/privatePages/dashBoard.jsx';
import ProtectedRoute from './routes/protectedRoute.jsx';
import NotFound from './mySite/publicPages/notFound.jsx';

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
          
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
        
      </div>
      
    </Router>
  );
};

export default App;
