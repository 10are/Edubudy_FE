import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <span className="text-white text-xl font-semibold">Edubuy.com</span>

          <div className="w-4"></div>
        </div>

        <div className="space-x-4">
          <a href="#" className="text-white">Login</a>
          <span className="text-white">|</span>
          <a href="#" className="text-white">Register</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
