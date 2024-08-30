import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase/config';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingStatus, setCheckingStatus] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is authenticated:', user);
        setIsAuthenticated(true);
      } else {
        console.log('User is not authenticated.');
        setIsAuthenticated(false);
      }
      setCheckingStatus(false);
    });

    return () => unsubscribe();
  }, []);

  if (checkingStatus) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    console.log('Redirecting to signin');
    return <Navigate to="/signin" replace/>;
  }

  return children;
};


export default ProtectedRoute;
