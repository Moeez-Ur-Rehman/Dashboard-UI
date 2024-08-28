import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {Link, useNavigate } from 'react-router-dom';

// Inside your login logic


const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken(true); // Force refresh of the token
      localStorage.setItem('authToken', token); // Store the token in local storage
      console.log('Sign-in successful! Redirecting to dashboard...');
      window.history.replaceState(null, null, '/dashboard');
      window.location.href = '/dashboard';
      navigate('/dashboard',{ replace: true });
      
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      const token = await userCredential.user.getIdToken(); // Get the Firebase ID token
      localStorage.setItem('authToken', token); // Store the token in local storage
      console.log('Google Sign-in successful! Redirecting to dashboard...');
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign In</h2>
        <form onSubmit={handleSignin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type Password"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 mb-4"
          >
            Sign In
          </button>
        </form>
        <Link to="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</Link>
        <div className="flex justify-center mt-4">
          <span className="text-gray-500">OR</span>
        </div>
        <div className="mt-4">
          <button
            className="google-signup bg-white border border-black hover:bg-gray-200 text-black py-2 rounded-md transition duration-300 w-full"
            onClick={handleGoogleSignin}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
