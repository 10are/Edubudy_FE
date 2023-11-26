'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { RiHeadphoneLine, RiUserVoiceLine, RiArticleLine, RiTeamLine } from 'react-icons/ri';

const links = [
  { name: 'Dinle/Anlat', href: '/Features/eduCard', icon: <RiHeadphoneLine />, color: 'blue' },
  { name: 'Kafam/Karışık', href: '/Features/eduBlog', icon: <RiUserVoiceLine />, color: 'green' },
  { name: 'BLOG', href: '/Features/eduMentor', icon: <RiArticleLine />, color: 'yellow' },
  { name: 'Meslek/Erbabı', href: '/Features/eduSocial', icon: <RiTeamLine />, color: 'red' },
];
function Navbar() {

    return (
      <div className="bg-slate-400 py-5 px-20 w-min mx-auto mt-8 rounded-lg">
        <ul className="flex justify-center items-center space-x-20 text-lg">
          {links.map((link, index) => (
            <li key={index}>

                <Link className='border flex flex-col items-center ' href={link.href}>
                  {React.cloneElement(link.icon, { className: `text-${link.color}-500 text-2xl` })}
                  <span className={`mt-auto`}>{link.name}</span>
                </Link>
 
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Navbar;
  
