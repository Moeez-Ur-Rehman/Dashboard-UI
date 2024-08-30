import React from 'react'

const Footer = () => {
  return (
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4 text-center">
            <div className="space-x-4 mb-4">
              <a href="#" className="hover:text-blue-500">Contact Us</a>
              <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            </div>
            <p className="text-sm">&copy; 2024 Landing Page. All Rights Reserved.</p>
            <div className="mt-4 space-x-4">
              {/* Social media icons (placeholder links) */}
              <a href="#" className="hover:text-blue-500">Facebook</a>
              <a href="#" className="hover:text-blue-500">Twitter</a>
              <a href="#" className="hover:text-blue-500">LinkedIn</a>
            </div>
          </div>
        </footer>
      )
  
}

export default Footer
