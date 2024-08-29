import React, { useState } from 'react';
import { auth, googleProvider } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateSignUp = () => {

    // Basic validation checks
    if (!email) {
        setError('Email is required.');
        return false;
    }

    if (!password) {
        setError('Password is required.');
        return false;
    }

    if (password.length < 8) {
        setError('Password must be at least 8 characters long.');
        return false;
    }

    if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return false;
    }

    return true;
};
  const handleSignup = async (e) => {
    e.preventDefault();
    if(validateSignUp()){
      setError('');
    try {
      const userCredential=await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken(true); // Force refresh of the token
      localStorage.setItem('authToken', token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  }

  };

  const handleGoogleSignup = async () => {
    try {
      const userCredential= await signInWithPopup(auth, googleProvider);
      const token = await userCredential.user.getIdToken(); // Get the Firebase ID token
      localStorage.setItem('authToken', token);
      console.log('Google Sign-up successful! Redirecting to dashboard...');
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 relative">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignup}>
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
              placeholder="Create a password"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 mb-4"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-center mt-4">
          <span className="text-gray-500">OR</span>
        </div>
        <div className="mt-4">
          <button
            className="google-signup bg-white border border-black hover:bg-gray-200 text-black py-2 rounded-md transition duration-300 w-full"
            onClick={handleGoogleSignup}
          >
            Sign up with Google
          </button>
        </div>
        <div className="flex justify-between">
          <Link to="/" className="text-blue-600 hover:underline">Back to Home</Link>
          <Link className="text-blue-600 hover:underline">Need help?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
