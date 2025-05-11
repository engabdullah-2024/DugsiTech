import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'; // Social media icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
          <Link to="/">  <h1 className="text-3xl font-bold text-white">
              Dugsi <span className="text-gray-200">Hub</span>
            </h1></Link>
            <p className="text-gray-200 mt-2">Your #1 source for Grade 12 Exam PDFs – organized, easy to access, and 100% free.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 mt-6 md:mt-0 justify-center md:justify-start">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
              <FaFacebook size={30} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
              <FaTwitter size={30} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
              <FaInstagram size={30} />
            </a>
            <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition duration-300">
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 border-t border-gray-500 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <p className="text-gray-200 text-sm">&copy; 2025 Dugsi Tech. All Rights Reserved.</p>
            </div>
            <div className="text-center mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-200 hover:text-white text-sm mr-6">
                Privacy Policy
              </Link>
              <Link to='/gallery' className='text-gray-200 hover:text-white text-sm mr-6'>
                Gallery
              </Link>
              <Link to="/community" className="text-gray-200 hover:text-white text-sm mr-6">
                Community
              </Link>
              <Link to="/terms" className="text-gray-200 hover:text-white text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
