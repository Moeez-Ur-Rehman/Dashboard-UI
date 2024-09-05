import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ForgotPassword from "../features/auth/forgotPassword";
import Signin from "../features/auth/signIn";
import Signup from "../features/auth/signUp";
import Home from "../features/home/home";
import GetStarted from "../features/auth/getStarted";
import UserProfile from "../features/dashboard/profile";
import Dashboard from "../features/dashboard/dashBoard";
import NotFound from "../features/home/notFound";
import ProtectedRoute from './protectedRoutes';
import PasswordGenerator from '../features/home/passwordGenerator';
export const allroutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/passwordGenerator" element={<PasswordGenerator/>}/>

      {/* Protected Routes */}
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <UserProfile />
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

      {/* Fallback Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
