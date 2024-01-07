'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RiHeadphoneLine, RiUserVoiceLine, RiArticleLine, RiTeamLine } from 'react-icons/ri';

const links = [
  { name: 'Dinle/Anlat', href: '/Features/eduCard', icon: <RiHeadphoneLine />, color: '#718096' },
  { name: 'Kafam/Karışık', href: '/Features/eduMentor', icon: <RiUserVoiceLine />, color: '#90cdf4' },
  { name: 'BLOG', href: '/Features/eduBlog', icon: <RiArticleLine />, color: '#f6e05e' },
  { name: 'Meslek/Erbabı', href: '/Features/eduSocial', icon: <RiTeamLine />, color: '#fc8181' },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <nav className=" pt-10">
      <div className="flex justify-around min-w-screen-lg bg-mainColor items-center  max-w-screen-lg mx-auto">
        {links.map((link, index) => (
          <Link
            key={index}
            className={`flex flex-col items-center  text-xl rounded-md p-4 ${

              activeLink === index ? 'text-white border-b-2 border-white' : 'text-gray-500 border-b-2 border-transparent'
            }`}
            href={link.href}
            onClick={() => handleLinkClick(index)}
          >
            {React.cloneElement(link.icon, { className: `text-${link.color} text-3xl mb-1` })}
            <span className="mt-auto">{link.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
