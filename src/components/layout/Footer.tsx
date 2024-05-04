import React from 'react';
import LogoIconWhite from '../../../public/icons/LogoIcon';
import Link from 'next/link';
import PinterestIcon from '../../../public/icons/PinterestIcon';
import InstagramIcon from '../../../public/icons/InstagramIcon';
import TwitterIcon from '../../../public/icons/TwitterIcon';
import FacebookIcon from '../../../public/icons/FacebookIcon';
import YoutubeIcon from '../../../public/icons/YoutubeIcon';
import ArrowIcon from '../../../public/icons/ArrowIcon';

function Footer() {
  return (
    <div
      className="bg-black"
      style={{ fontFamily: 'DM Sans Variable, sans-serif' }}>
      <div className="py-16 max-w-[1500px] mx-auto flex flex-col md:flex-row justify-between text-center lg:text-start">
        <div className="flex flex-row space-x-28 mx-auto mb-12 md:mb-0">
          <div className="flex flex-col justify-between space-y-8 lg:space-y-0">
            <LogoIconWhite className="order-1" />
            <ul className="lg:hidden md:text-start text-white tracking-[2px] space-y-5 font-semibold text-sm order-3">
              <li className="hover:text-white/30">
                <Link href="/">
                  <p>HOME</p>
                </Link>
              </li>
              <li className="hover:text-white/30">
                <Link href="/stories">
                  <p>STORIES</p>
                </Link>
              </li>
              <li className="hover:text-white/30">
                <Link href="/features">
                  <p>FEATURES</p>
                </Link>
              </li>
              <li className="hover:text-white/30">
                <Link href="/pricing">
                  <p>PRICING</p>
                </Link>
              </li>
            </ul>
            <div className="flex flex-row justify-between order-2">
              <FacebookIcon />
              <YoutubeIcon />
              <TwitterIcon />
              <PinterestIcon />
              <InstagramIcon />
            </div>
          </div>
          <ul className="hidden lg:inline text-white tracking-[2px] space-y-5 font-semibold text-sm">
            <li className="hover:text-white/30">
              <Link href="/">
                <p>HOME</p>
              </Link>
            </li>
            <li className="hover:text-white/30">
              <Link href="/stories">
                <p>STORIES</p>
              </Link>
            </li>
            <li className="hover:text-white/30">
              <Link href="/features">
                <p>FEATURES</p>
              </Link>
            </li>
            <li className="hover:text-white/30">
              <Link href="/pricing">
                <p>PRICING</p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between mx-auto">
          <div className="mx-auto lg:mx-0 text-white font-semibold hover:underline hover:decoration-solid hover:decoration-white flex flex-row">
            <p className="tracking-[2px]">GET AN INVITE</p>
            <ArrowIcon className="ms-6 my-auto" />
          </div>
          <p className="text-white/50 mt-4 text-sm">
            © 2024 fva062001. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
