'use client';
import React from 'react';
import ArrowIcon from '../../../../public/icons/ArrowIcon';
import { motion } from 'framer-motion';

interface StoryCardProps {
  title: string;
  author: string;
  image: string;
}

function StoryCard({ title, author, image }: StoryCardProps) {
  return (
    <>
      <motion.div
        className="relative min-h-[550px] text-white flex flex-col justify-end"
        style={{
          fontFamily: 'DM Sans, sans-serif',
          background: `
      linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%, 
        rgba(0, 0, 0, 0.66) 100%  
      ),
      url(${image}) no-repeat center center/cover
    `,
        }}
        whileHover={{ y: -20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute hidden inset-0 border-b-[6px] md:inline-block"
          style={{
            borderImage:
              'linear-gradient(to right, #FFC593 0%, #BC7198 52%, #5A77FF 100%)',
            borderImageSlice: 1,
          }}
        />
        <div className=" p-8">
          <div>
            <h1 className="text-xl text-white font-bold">{title}</h1>
            <p className=" text-base font-extralight py-1">by {author}</p>
          </div>
          <div className="h-[1px] w-full bg-white/50 mt-4 mb-6" />
          <div className="flex flex-row justify-between">
            <button className="text-base font-semibold tracking-[2px]">
              READ STORY
            </button>
            <ArrowIcon />
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default StoryCard;
