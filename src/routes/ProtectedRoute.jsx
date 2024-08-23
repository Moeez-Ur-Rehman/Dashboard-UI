import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/config';  // Your Firebase config

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  // Show a loading screen while the auth state is being checked
  if (loading) {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated, redirect to the sign-in page
  if (!user) {
    return <Navigate to="/signin" />;
  }

  // If the user is authenticated, render the child components (Dashboard in this case)
  return children;
};

export default ProtectedRoute;
