import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const authToken = localStorage.getItem('authToken'); // Replace with your token key

  if (!authToken) {
    // If no token is found, redirect to the signin page
    return <Navigate to="/signin" />;
  }

  // If token exists, render the child components
  return children;
};

export default ProtectedRoute;
