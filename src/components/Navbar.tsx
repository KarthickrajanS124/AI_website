import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="px-10">
      <nav className="fixed w-[100%] z-50 transition-all duration-300 backdrop-blur-3xl  shadow-lg mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold">VEED</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white/90 backdrop-blur-md shadow-lg rounded-md mt-2 py-2">
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">
                    Video Editor
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">
                    Screen Recorder
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">
                    Text to Speech
                  </a>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-blue-600">
                  <span>Use Cases</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute hidden group-hover:block w-48 bg-white/90 backdrop-blur-md shadow-lg rounded-md mt-2 py-2">
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">
                    Social Media
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">
                    Business
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-50">
                    Education
                  </a>
                </div>
              </div>
              <a href="#" className="hover:text-blue-600">
                Resources
              </a>
              <a href="#" className="hover:text-blue-600">
                For Business
              </a>
              <a href="#" className="hover:text-blue-600">
                Pricing
              </a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600">
                Login
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Sign Up
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-blue-50"
              >
                Products
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-blue-50"
              >
                Use Cases
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-blue-50"
              >
                Resources
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-blue-50"
              >
                For Business
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md hover:bg-blue-50"
              >
                Pricing
              </a>
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
              <button className="w-full text-center py-2 text-gray-700 hover:text-blue-600">
                Login
              </button>
              <button className="w-full text-center py-2 mt-2 bg-black text-white rounded-lg hover:bg-gray-800">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
