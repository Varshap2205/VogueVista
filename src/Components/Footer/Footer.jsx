import React from 'react';
import footer_logo from '../Assets/logo_big.png';
import insta_icon from '../Assets/instagram_icon.png';
import pinterest from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';

const Footer = () => {
  return (
    <div className="footer flex flex-col justify-center items-center gap-8 px-4 sm:px-8">
      {/* Footer Logo Section */}
      <div className="footer-logo flex items-center gap-4 sm:gap-6">
        <img src={footer_logo} alt="Footer Logo" className="w-12 sm:w-16" />
        <p className="text-gray-700 text-2xl sm:text-3xl font-bold">VogueVista</p>
      </div>

      {/* Footer Links */}
      <ul className="footer-links flex flex-wrap justify-center gap-4 sm:gap-8 text-gray-800 text-sm sm:text-base">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="footer-social-icon flex gap-4 sm:gap-6">
        <div className="footer-icons-container p-2 bg-gray-50 border border-gray-200 rounded-lg">
          <img src={insta_icon} alt="Instagram Icon" className="w-6 sm:w-8" />
        </div>
        <div className="footer-icons-container p-2 bg-gray-50 border border-gray-200 rounded-lg">
          <img src={pinterest} alt="Pinterest Icon" className="w-6 sm:w-8" />
        </div>
        <div className="footer-icons-container p-2 bg-gray-50 border border-gray-200 rounded-lg">
          <img src={whatsapp} alt="WhatsApp Icon" className="w-6 sm:w-8" />
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer-copyright flex flex-col items-center gap-4 w-full text-gray-700 text-sm sm:text-base">
        <hr className="w-3/4 border-t border-gray-300" />
        <p>Copyright © 2024 - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
