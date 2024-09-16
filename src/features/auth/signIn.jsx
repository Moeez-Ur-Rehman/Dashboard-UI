import React, { useState , useEffect} from 'react';
import { auth, googleProvider } from '../../firebase/config';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import {Link, useNavigate } from 'react-router-dom';
import { redirectToDashboardIfAuthenticated,redirectToDashboardAfterAuthentication } from '../../utilities/auth';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Inside your login logic
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    redirectToDashboardIfAuthenticated(navigate);
  }, [navigate]);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const token = await user.getIdToken(true); // Force refresh of the token
      redirectToDashboardAfterAuthentication(navigate,token);
      
      
    } catch (err) {
      setError("incorrect Password");
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
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"data-aos="zoom-in">
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
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type Password"
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-blue-500"
        >
          {showPassword ? <FaEyeSlash/> : <FaEye/>} 
        </button>
      </div>
    </div>


          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 mb-4"
          >
            Sign In
          </button>
        </form>
        <Link to="/forgot-password" className="text-blue-600 hover:underline ">Forgot Password?</Link>
        <div className="flex justify-center mt-4">
          <span className="text-gray-500">OR</span>
        </div>
        <div className="mt-4">
        <button
        className="google-signup bg-white border border-black hover:bg-blue-100 text-black py-2 rounded-md transition duration-300 w-full flex items-center justify-center"
        onClick={handleGoogleSignin}
       >
      <FcGoogle size={20} className="mr-2" />
      Sign in with Google
      </button>
</div>
      </div>
    </div>
  );
};

export default Signin;
