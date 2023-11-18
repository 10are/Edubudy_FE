// Navbar.jsx
import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left section */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="text-white text-xl font-bold">
              <span className="text-5xl">EduBudy</span>
            </div>
          </Link>
        </div>

        {/* Center section */}
        <div className="flex-grow text-center">
          <Link href="/" passHref className="text-white text-3xl hover:text-gray-300 px-6">
            Home
          </Link>
          <Link href="/faq" passHref className="text-white text-3xl hover:text-gray-300 px-6">
            FAQ
          </Link>
        </div>

        {/* Right section */}
        <div className="flex items-center">
          <Link href="/login" passHref className=" text-3xl hover:text-gray-300 px-6">
            Login
          </Link>
          <Link
            href="/register"
            passHref
            className=" hover:text-gray-300 px-6 border-l text-3xl border-gray-600"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
