import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/config';  // Your Firebase config

const ProtectedRoute = ({ children }) => {
  const [user] = useAuthState(auth);

  if (!user) {
    return <Navigate to="/signin" />;
  }

  else{
    return <Navigate to="/Dashboard" />;
  }
};

export default ProtectedRoute;
