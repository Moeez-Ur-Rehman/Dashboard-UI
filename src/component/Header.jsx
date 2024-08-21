import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Header = () => {
    return(<header className="bg-white shadow">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Landing Page</h1>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
          <Link to="/Signup" className="text-gray-700 hover:text-blue-500">Sign Up</Link>
          <Link to="/Signin" className="text-gray-700 hover:text-blue-500">Login</Link>
        </div>
      </nav>
    </header>)
};

export default Header
