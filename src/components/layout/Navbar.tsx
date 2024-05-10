'use client';
import React, { useState } from 'react';
import LogoIcon from '../../../public/icons/LogoIcon';
import Link from 'next/link';
import BurgerIcon from '../../../public/icons/BurgerIcon';
import XMarkIcon from '../../../public/icons/XMarkIcon';
import { motion } from 'framer-motion';

function Navbar() {
  // State to track if the mobile menu is open or closed
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to toggle menu state
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div
        className="w-full flex flex-row justify-between max-w-[1500px] mx-auto align-items-center p-6 md:p-4 relative z-10"
        style={{ fontFamily: 'DM Sans Variable, sans-serif' }}>
        <Link
          href={'/'}
          className="my-auto">
          <LogoIcon />
        </Link>

        <div className="hidden md:flex flex-row space-x-8 font-semibold text-md tracking-[2px]">
          <Link
            href="/stories"
            className="hover:text-black/30 my-auto">
            STORIES
          </Link>
          <Link
            href="/features"
            className="hover:text-black/30 my-auto">
            FEATURES
          </Link>
          <Link
            href="/pricing"
            className="hover:text-black/30 my-auto">
            PRICING
          </Link>
        </div>

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

        <button className="hidden md:flex bg-black text-white font-semibold px-6 py-3 tracking-[2px] hover:bg-gray-300">
          GET AN INVITE
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute -mt-2  z-20 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring' }}
            className="flex flex-col text-center font-semibold text-md tracking-[2px] px-8 space-y-6 pt-4 pb-6 md:hidden bg-white">
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
          </motion.div>
          <div
            onClick={toggleMenu}
            className="h-screen bg-black/50 "></div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
