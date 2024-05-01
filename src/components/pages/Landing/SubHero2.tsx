import React from 'react';
import Image from 'next/image';
import ArrowIcon from '../../../../public/icons/ArrowIcon';

type SubHeroProps = {
  mainImage: any;
  title: string;
  description: string;
};

function SubHero2({ mainImage, title, description }: SubHeroProps) {
  return (
    <main
      className="flex relative md:min-h-[700px] flex-col md:flex-row bg-white"
      style={{
        fontFamily: 'DM Sans, sans-serif',
      }}>
      <div className="md:w-[40%] xl:w-[60%] relative md:flex order-1 md:order-2  min-h-[350px]">
        <Image
          src={mainImage.src}
          fill={true}
          style={{ objectFit: 'cover' }}
          quality={100}
          alt="Beautiful Stories"
        />
      </div>
      <div className="md:w-[60%] xl:w-[40%] md:relative md:flex order-2 md:order-1 my-auto">
        <div className="relative p-10 md:py-0 md:px-16 xl:px-40">
          <h1 className="text-black text-[30px] md:text-[40px] font-bold tracking-[4.17px] leading-[48px]">
            {title}
          </h1>
          <p
            className="text-black/60 my-8 font-light"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {description}
          </p>
          <button
            className=" text-black tracking-[2px] flex font-semibold"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            VIEW THE STORIES
            <ArrowIcon
              color="black"
              className="ml-10 my-auto"
            />
          </button>
        </div>
      </div>
    </main>
  );
}

export default SubHero2;
