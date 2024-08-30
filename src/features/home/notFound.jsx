// src/components/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-black mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
