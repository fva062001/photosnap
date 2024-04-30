'use client';
import React, { useState } from 'react';
import LogoIcon from '../../public/icons/LogoIcon';
import Link from 'next/link';
import BurgerIcon from '../../public/icons/BurgerIcon';
import XMarkIcon from '../../public/icons/XMarkIcon';

function Navbar() {
  // State to track if the mobile menu is open or closed
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className="w-full flex flex-row justify-between max-w-[1500px] mx-auto align-items-center p-8 md-p-4 relative z-10"
        style={{ fontFamily: 'DM Sans Variable, sans-serif' }}>
        <LogoIcon className="my-auto" />

        {/* Desktop links */}
        <div className="hidden md:flex flex-row space-x-8 font-semibold text-md tracking-[2px]">
          <Link
            href="/stories"
            className="hover:text-black/30">
            STORIES
          </Link>
          <Link
            href="/features"
            className="hover:text-black/30">
            FEATURES
          </Link>
          <Link
            href="/pricing"
            className="hover:text-black/30">
            PRICING
          </Link>
        </div>

        {/* Burger Icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none">
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <BurgerIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop "Get an Invite" button */}
        <button className="hidden md:flex bg-black text-white font-semibold px-6 py-3 tracking-[2px] hover:bg-gray-300">
          GET AN INVITE
        </button>

        {/* Mobile Menu */}
      </div>
      {isMenuOpen && (
        <div className="flex flex-col text-center font-semibold text-md tracking-[2px] px-8 w-full space-y-6 pt-4 pb-6 bottom-100 md:hidden bg-white">
          <Link
            href="/stories"
            onClick={toggleMenu}>
            STORIES
          </Link>
          <Link
            href="/features"
            onClick={toggleMenu}>
            FEATURES
          </Link>
          <Link
            href="/pricing"
            onClick={toggleMenu}>
            PRICING
          </Link>
          <div className="h-[1px] bg-black/25"></div>
          <button
            className="bg-black text-white font-semibold px-6 py-3 tracking-[2px] hover:bg-gray-300"
            onClick={toggleMenu}>
            GET AN INVITE
          </button>
        </div>
      )}
    </>
  );
}

export default Navbar;