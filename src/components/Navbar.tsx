import React, { useState } from 'react';
import { Menu, X, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Camera className="h-8 w-8 text-gray-900" />
              <span className="ml-2 text-xl font-semibold">Elena Studio</span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/#home" className="hover:text-gray-600 px-3 py-2 text-sm font-medium">Home</a>
              <a href="/#portfolio" className="hover:text-gray-600 px-3 py-2 text-sm font-medium">Portfolio</a>
              <a href="/#about" className="hover:text-gray-600 px-3 py-2 text-sm font-medium">About</a>
              <Link to="/book" className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">Book Now</Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="/#home" className="block px-3 py-2 text-base font-medium">Home</a>
            <a href="/#portfolio" className="block px-3 py-2 text-base font-medium">Portfolio</a>
            <a href="/#about" className="block px-3 py-2 text-base font-medium">About</a>
            <Link to="/book" className="block px-3 py-2 text-base font-medium">Book Now</Link>
          </div>
        </div>
      )}
    </nav>
  );
}