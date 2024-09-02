import React, { useState, useEffect } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import { redirectToDashboardIfAuthenticated } from '../../utilities/auth';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();
  
  
  // Redirect to dashboard if already authenticated
  useEffect(() => {
    redirectToDashboardIfAuthenticated(navigate);
  }, [navigate]);
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint is 1024px
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-blue-500 bg-cover bg-center bg-no-repeat">
  <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between lg:h-screen ">
    
    {/* Text Section */}
    <div className="max-w-xl text-left space-y-4"data-aos="fade-right">
      <h1 className="text-3xl text-white font-bold sm:text-5xl">
        The Password Manager
        <strong className="block font-bold text-white mt-2">
          for Teams
        </strong>
      </h1>

      <p className="mt-4 text-white max-w-lg sm:text-xl/relaxed">
        TeamPassword is the fastest, easiest, and most secure way to store and share team logins and passwords.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center"data-aos="fade-up">
        <Link
          to="/get-started"
          className="block w-full rounded-lg bg-white px-12 py-3 text-sm font-medium text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
        >
          Get Started
        </Link>
        
      </div>
    </div>

    {/* Image Section */}
    {!isMobile && (
      <div className="relative hidden lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <div className="relative lg:w-2/3">
          <img
            src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomepage-hero1.7b445e2c.png&w=1080&q=75"
            alt="TeamPassword App"
            className="object-cover object-center w-full h-auto rounded-3xl shadow-lg transform scale-105"
            style={{ zIndex: 10 }}
          />
          <img
            src="https://teampassword.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhomepage-hero2.c61ec3a8.png&w=640&q=75"
            alt="TeamPassword App"
            className="object-cover object-center w-full h-auto rounded-3xl shadow-lg absolute top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/3 scale-90"
            style={{ zIndex: 5 }}
          />
        </div>
      </div>
    )}
  </div>
</section>

   {/*Features Section*/}
<section className="bg-white dark:bg-gray-900">
  <div className="container px-6 py-10 mx-auto ">
    <div className="container px-6 py-10 mx-auto flex flex-col items-center text-center"data-aos="fade-up">
      <h1 className="text-4xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
        Your Team,<br /> Secure <span className="underline decoration-blue-500">and in sync</span>
      </h1>
    </div>
    
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 updateFeatures">
      <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"data-aos="fade-right">
        <span className="inline-block text-blue-500 dark:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
          </svg>
        </span>
        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Keep Projects Moving</h1>
        <p className="text-gray-500 dark:text-gray-300">
          Everybody hates being locked out. With our shared password manager, your team's apps and tools are accessible anywhere, keeping your projects moving.
        </p>
      </div>

      <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"data-aos="fade-up">
        <span className="inline-block text-blue-500 dark:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
          </svg>
        </span>
        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Share Logins and Passwords</h1>
        <p className="text-gray-500 dark:text-gray-300">
          Most password managers are for personal use and require installation and configuration. Our team password manager was designed with ease-of-use and collaboration in mind.
        </p>
      </div>

      <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl"data-aos="fade-left">
        <span className="inline-block text-blue-500 dark:text-blue-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </span>
        <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Protect Your Assets</h1>
        <p className="text-gray-500 dark:text-gray-300">
          If poorly managed passwords get into the wrong hands, the consequences can cripple your business. Our secure password manager protects your team by controlling access to your most valuable assets.
        </p>    
      </div>
    </div>
    
    {/* Centralized Button */}
    <div className="flex justify-center mt-10">
      <div className="flex items-center bg-blue-100 py-2 px-4 rounded-lg hover:bg-blue-200">
        <span className="text-blue-500 font-medium">Take a Product Tour</span>
        <button className="w-8 h-8 ml-2 border-2 border-dashed border-blue-500 text-blue-500 rounded flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

{/*Testimonial*/}

<section className="py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
      <div className="w-full lg:w-2/5" data-aos="fade-right">
        <span className="text-sm text-gray-700 font-semibold mb-4 block">Testimonial</span> {/* Made the text slightly darker and bolder */}
        <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
          Customers Around the World Love and Trust{' '}
          <span className="text-blue-500">
            TeamPassword
          </span>
        </h2>
        <div className="flex items-center justify-center lg:justify-center gap-5 mt-6"> {/* Centering the buttons */}
          <button
            id="slider-button-left"
            className="group flex justify-center items-center border border-solid border-blue-500 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-blue-500"
          >
            <svg
              className="h-6 w-6 text-blue-500 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            id="slider-button-right"
            className="group flex justify-center items-center border border-solid border-blue-500 w-12 h-12 transition-all duration-500 rounded-lg hover:bg-blue-500"
          >
            <svg
              className="h-6 w-6 text-blue-500 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="w-full lg:w-3/5 ">
        {/* Testimonial Cards */}
        <div className="space-y-8">
          <div className="group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-blue-500"data-aos="fade-down">
            <div className="flex items-center gap-5 mb-5 sm:mb-9">
              <img
                className="rounded-full"
                src="https://pagedone.io/asset/uploads/1696229969.png"
                alt="avatar"
              />
              <div className="grid gap-1">
                <h5 className="text-gray-900 font-medium transition-all duration-500">Jane D</h5>
                <span className="text-sm leading-6 text-gray-500">CEO</span>
              </div>
            </div>
            <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
              "The chrome extension is so handy, even with the two-factor authentication,
              log in is under a minute and I can access everything with a few taps on my keyboard. 
              The site and extension are extremely user-friendly."
            </p>
          </div>

          <div className="group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-blue-500"data-aos="fade-up">
            <div className="flex items-center gap-5 mb-5 sm:mb-9">
              <img
                className="rounded-full"
                src="https://pagedone.io/asset/uploads/1696229994.png"
                alt="avatar"
              />
              <div className="grid gap-1">
                <h5 className="text-gray-900 font-medium transition-all duration-500">Harsh P.</h5>
                <span className="text-sm leading-6 text-gray-500">Product Designer</span>
              </div>
            </div>
            <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  className="w-5 h-5"
                  viewBox="0 0 18 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                    fill="currentColor"
                  />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24 group-hover:text-gray-800">
              "The thing I like most about TeamPassword is how easy it is to keep track of things, 
              as well as invite new team members and have access to only what they need."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/*Ending*/}
<section className="bg-blue-500 text-center py-24">
  <div className="max-w-3xl mx-auto px-4"data-aos="zoom-in">
    <h1 className="text-4xl font-bold text-white mb-4">
      The Password Manager for Teams
    </h1>
    <p className="text-white text-lg mb-8">
      TeamPassword is the fastest, easiest and most secure way to store and share team logins and passwords.
    </p>
    <Link to='/get-started'>
    <button
      className="block mx-auto w-full sm:w-auto rounded-lg bg-white px-6 py-3 text-sm font-medium text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring active:bg-blue-500"
    >
      Get Started
    </button>
    </Link>
  </div>
</section>
      {/* Additional Features Section can be added here */}
    </div>
  );
};

export default Home;
