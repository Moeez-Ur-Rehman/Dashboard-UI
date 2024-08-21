import React, { useState } from 'react';
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link,useNavigate } from 'react-router-dom'; // Import for navigation link

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate ("/Signin") ;
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
          <button className="google-signup bg-white border border-black hover:bg-gray-200 text-black py-2 rounded-md transition duration-300 w-full">
            Sign up with Google
          </button>
          <button className="enterprise-signup bg-gray-600 hover:bg-gray-700 text-white py-2 rounded-md transition duration-300 w-full mt-2">
            Enterprise Sign Up
          </button>
        </div>

        <div className="flex justify-between">
        <Link to="/"  className="text-blue-600 hover:underline">Back to Home</Link>
        <Link className="text-blue-600 hover:underline">Need help?</Link>
        </div>
      </div>
    </div>
  );
}
export default Signup;