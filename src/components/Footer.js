import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Heart,
} from "lucide-react";

// Brand icons not in lucide-react v1.14.0 (matching Contact.js style)
const GithubIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 bg-white/80 backdrop-blur-md border-t border-gray-100 pt-16 pb-8 px-4 dark:bg-gray-900/80 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Namaste React
          </h3>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
            Fast delivery, fresh flavors, and the best restaurants in town.
            We're on a mission to bring deliciousness to your doorstep.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-all dark:bg-gray-800 dark:text-gray-400"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-all dark:bg-gray-800 dark:text-gray-400"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-all dark:bg-gray-800 dark:text-gray-400"
            >
              <TwitterIcon size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-gray-600 hover:text-orange-600 transition-colors dark:text-gray-400 dark:hover:text-orange-500 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-150 transition-transform"></span>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-orange-600 transition-colors dark:text-gray-400 dark:hover:text-orange-500 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-150 transition-transform"></span>
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-orange-600 transition-colors dark:text-gray-400 dark:hover:text-orange-500 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-150 transition-transform"></span>
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/cart"
                className="text-gray-600 hover:text-orange-600 transition-colors dark:text-gray-400 dark:hover:text-orange-500 flex items-center gap-2 group"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 group-hover:scale-150 transition-transform"></span>
                My Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-wider">
            Help & Support
          </h4>
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition-colors dark:text-gray-400 dark:hover:text-orange-500"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition-colors dark:text-gray-400 dark:hover:text-orange-500"
              >
                Terms & Conditions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition-colors dark:text-gray-400 dark:hover:text-orange-500"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-orange-600 transition-colors dark:text-gray-400 dark:hover:text-orange-500"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-6 uppercase tracking-wider">
            Get in Touch
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
              <Mail size={18} className="text-orange-500 shrink-0 mt-1" />
              <span>support@namastereact.com</span>
            </li>
            <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
              <Phone size={18} className="text-orange-500 shrink-0 mt-1" />
              <span>+91 81281 53581</span>
            </li>
            <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
              <MapPin size={18} className="text-orange-500 shrink-0 mt-1" />
              <span>123 React Lane, Tech Park, Bangalore</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-100 pt-8 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {currentYear} Namaste React. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
          Made with <Heart size={16} className="text-red-500 fill-red-500" /> by{" "}
          <span className="font-bold text-gray-800 dark:text-white">
            Manil Jotaniya
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
