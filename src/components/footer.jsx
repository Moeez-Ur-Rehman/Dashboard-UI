import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <div className="space-x-4 mb-4">
          <a href="#" className="hover:text-blue-500">Contact Us</a>
          <a href="#" className="hover:text-blue-500">Privacy Policy</a>
        </div>
        <p className="text-sm">&copy; 2024 Landing Page. All Rights Reserved.</p>
        <div className="mt-4 flex justify-center space-x-8">
          {/* Social media icons */}
          <a href="#" className="hover:text-blue-500">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="hover:text-blue-500">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
