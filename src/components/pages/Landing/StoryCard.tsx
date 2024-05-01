import React from 'react';
import ArrowIcon from '../../../../public/icons/ArrowIcon';

interface StoryCardProps {
  title: string;
  author: string;
  image: string;
}

function StoryCard({ title, author, image }: StoryCardProps) {
  return (
    <div
      className="min-h-[550px] text-white flex flex-col justify-end"
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
      }}>
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
    </div>
  );
}

export default StoryCard;
