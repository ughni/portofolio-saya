import logo from '../assets/logom.png'
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1 */}
        <div>
          <img
            className='pt-8 cursor-pointer drop-shadow-[0_0_35px_rgba(255,255,255,1)]'
            src={logo} alt="" />
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul>
            <li><a href="#" className="hover:underline">Web Development</a></li>
            <li><a href="#" className="hover:underline">App Development</a></li>
            <li><a href="#" className="hover:underline">SEO Services</a></li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Linkedin " className="hover:text-blue-500">
            <FaLinkedin />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">
            <FaTwitterSquare />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-red-600">
            <FaInstagramSquare />
            </a>
            <a href="#" aria-label="Whatsapp" className="hover:text-green-700">
            <FaWhatsappSquare />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8">
        © 2024 M Mughni.
      </div>
    </footer>
  );
};

export default Footer;
