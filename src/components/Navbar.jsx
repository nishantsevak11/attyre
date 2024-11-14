import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-end">
        {/* Logo */}
        <div className="text-white text-xl font-semibold">
          <span><img src="/logo.png" alt="Logo" /></span>
        </div>

        {/* Desktop Navbar Items */}
        <div className="hidden lg:flex gap-5 text-bold">
          <a href="#explore" className="text-grey hover:text-pink-500">Explore</a>
          <a href="#color-analysis" className="text-grey hover:text-pink-500">Color Analysis</a>
          <a href="#curations" className="text-grey hover:text-pink-500">Curations</a>
          
          <a href="#explore" className="text-grey hover:text-pink-500 block">Explore</a>
          
          <a href="#marketplace" className="text-grey hover:text-pink-500 block">Find the Fit</a>
          <a href="#marketplace" className="text-grey hover:text-pink-500 block"> Marketplace</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-grey focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      
        <div >
          
        </div>
      
    </nav>
  );
};

export default Navbar;
