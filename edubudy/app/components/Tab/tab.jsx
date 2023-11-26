'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RiHeadphoneLine, RiUserVoiceLine, RiArticleLine, RiTeamLine } from 'react-icons/ri';

const links = [
  { name: 'Dinle/Anlat', href: '/Features/eduCard', icon: <RiHeadphoneLine />, color: 'blue' },
  { name: 'Kafam Karışık', href: '/Features/eduBlog', icon: <RiUserVoiceLine />, color: 'green' },
  { name: 'BLOG', href: '/Features/eduMentor', icon: <RiArticleLine />, color: 'yellow' },
  { name: 'Meslek Erbabı', href: '/Features/eduSocial', icon: <RiTeamLine />, color: 'red' },
];

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <div class="bg-slate-400 py-2 container mx-auto mt-4 rounded-lg">
        <ul className="flex justify-center space-x-6">
          {links.map((link, index) => (
            <li key={index}>
              <a
                className={`flex flex-col items-center text-white hover:text-gray-300 rounded-md p-2 ${activeLink === index ? `bg-${link.color}-700` : ''}`}
                onClick={() => setActiveLink(index)}
              >
                <Link href={link.href}>
                  {React.cloneElement(link.icon, { className: `text-${link.color}-500 text-2xl` })}
                  <span className={`mt-2 ${activeLink === index ? `text-${link.color}-500` : ''}`}>{link.name}</span>
                </Link>
              </a>
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Navbar;