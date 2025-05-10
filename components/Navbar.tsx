"use client";

import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { div } from "framer-motion/client";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<
    string | null
  >(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setActiveMobileDropdown(
      activeMobileDropdown === dropdown ? null : dropdown
    );
  };

  return (
    <div className="bg-[#1a1a1a] sticky top-0 z-50">
      <div>
      <nav className="bg-[#1a1a1a] ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  top-0 z-50">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Logo />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#ebf5ea] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            
            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('about')}
                onMouseEnter={() => setActiveDropdown('about')}
                className="flex items-center text-[#ebf5ea] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Us <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                  activeDropdown === 'about' ? 'block' : 'hidden'
                }`}
              >
                <div className="py-1">
                  <Link
                    href="/aboutUs/about"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Who We Are
                  </Link>
                  <Link
                    href="/aboutUs/team"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Our Team
                  </Link>
                  
                </div>
              </div>
            </div>

            <Link href="/projects" className="text-[#ebf5ea] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Projects
            </Link>

            <Link href="/contact" className="text-[#ebf5ea] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Contact Us
            </Link>

            <Link href="/blog" className="text-[#ebf5ea] hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#ebf5ea] hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0  z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block text-black hover:text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </Link>
          
          {/* Mobile About Links */}
          <div>
            <button
              onClick={() => toggleMobileDropdown('about')}
              className="flex items-center justify-between w-full text-black hover:text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
              <ChevronDown className={`h-4 w-4 transform transition-transform ${activeMobileDropdown === 'about' ? 'rotate-180' : ''}`} />
            </button>
            <div className={`pl-4 space-y-1 ${activeMobileDropdown === 'about' ? 'block' : 'hidden'}`}>
              <Link
                href="/aboutUs/about"
                className="block text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm"
              >
                Who We Are
              </Link>
              <Link
                href="/aboutUs/team"
                className="block text-gray-500 hover:text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-sm"
              >
                Our Team
              </Link>
              
            </div>
          </div>

          <Link
            href="/projects"
            className="block text-black hover:text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="block text-black hover:text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </Link>

          <Link
            href="/blog"
            className="block text-black hover:text-gray-500 hover:bg-gray-100 px-3 py-2 rounded-md text-base font-medium"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
      </div>
    </div>
  );
};

export default Navbar;
