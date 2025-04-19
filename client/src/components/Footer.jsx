import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-4">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        
        <div className="text-sm text-center sm:text-left mb-2 sm:mb-0">all rights reserved
          © {new Date().getFullYear()} <span className="text-white font-medium">VoteWise</span>
        </div>

        <div className="flex space-x-4 mb-2 sm:mb-0">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaGithub size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
            <FaLinkedin size={24} />
          </a>
        </div>

       

      </div>
    </footer>
  );
}

export default Footer;
