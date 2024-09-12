import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth,db } from '../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { logoutUser } from '../utilities/auth';
import { FaGlobe } from 'react-icons/fa';
import { doc, getDoc } from 'firebase/firestore';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Default to closed
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [username, setUsername] = useState(''); // State to hold the username
  const [profilePhoto, setProfilePhoto] = useState('');
  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 1024); 
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(true); // Show full menu on larger screens
      } else {
        setIsMenuOpen(false); // Hide menu on smaller screens
      }
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Fetch user profile data to get the username and profile photo
    const fetchProfileData = async () => {
      if (user) {
        try {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUsername(data.displayName || ''); // Set the username if it exists
            setProfilePhoto(data.profilePicture || ''); // Set the profile photo URL if it exists
          }
        } catch (error) {
          console.error('Error fetching user profile data:', error);
        }
      }
    };

    fetchProfileData();
  }, [user]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen((prev) => !prev);
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      logoutUser(navigate);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center space-x-3 rtl:space-x-reverse heading">
          <Link to={user ? '/dashboard' : '/'} className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            TeamPassword
          </Link>
        </div>

        {/* Toggle button - shows on small screens */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        {/* Navigation links */}
        <div className={`w-full lg:block lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 lg:flex-row lg:space-x-6 lg:justify-end lg:items-center lg:mt-0">
            {user ? (
              <>
                <li>
                  <Link
                    to="/passwordGenerator"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500"
                  >
                    Password Generator
                  </Link>
                </li>
                

                <li>
                  <button
                    onClick={handleLogout}
                    className={`block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={loading}
                  >
                    {loading ? 'Logging out...' : 'Logout'}
                  </button>
                </li>
                {!isMobileView ?  (
                   <li className="flex items-center space-x-2">
                   {/*<span className="text-gray-900 dark:text-white">{username || 'User'}</span>*/}
                   <Link to="/profile" >
                     {profilePhoto ? (
                       
                       <img
                         src={profilePhoto}
                         alt="Profile"
                         className="w-8 h-8 rounded-full border-2 border-gray-300"
                       />
                     ) : (
                       <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white">
                         {username.charAt(0).toUpperCase()}
                       </div>
                     )}
                   </Link>
                   </li>
                ):(
                  <li>
                  <Link
                    to="/profile"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500"
                  >
                    Profile
                  </Link>
                </li>
                )}
               
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/get-started"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500"
                  >
                    Plans & Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/productTour"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500"
                  >
                    Product Tour
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/security"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    to="/passwordGenerator"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500"
                  >
                    Password Generator
                  </Link>
                </li>

                {/* Globe Icon for Language Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={toggleLanguageMenu}
                  >
                    <FaGlobe className="w-5 h-5" />
                  </button>

                  {/* Language Dropdown */}
                  {isLanguageMenuOpen && (
                    <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                      <ul className="py-1 text-gray-700 dark:text-gray-200">
                        <li className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700">English</li>
                        <li className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700">Spanish</li>
                        <li className="block px-4 py-2 hover:bg-blue-100 dark:hover:bg-gray-700">French</li>
                        {/* Add more languages as needed */}
                      </ul>
                    </div>
                  )}
                </div>
                <li>
                  <Link
                    to="/signin"
                    className="block py-2 px-3 text-gray-900  rounded hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500"
                  >
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link
                    to="/signup"
                    className="block py-2 px-3 text-gray-900  rounded hover:bg-blue-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500"
                  >
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/get-started" className="block bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition lg:ml-4">
                    Get Started
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
