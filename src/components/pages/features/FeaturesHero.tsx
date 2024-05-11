import React from 'react';
import Image from 'next/image';
import DesktopMHeroImage from '/public/assets/new-photos/camera.jpg';
import ArrowIcon from '../../../../public/icons/ArrowIcon';

function FeaturesHero() {
  return (
    <main
      className="flex relative md:min-h-[550px] flex-col md:flex-row bg-black"
      style={{
        fontFamily: 'DM Sans, sans-serif',
      }}>
      <div className="md:w-[65%] xl:w-[40%] md:relative md:flex order-2 md:order-1 my-auto">
        <div className="relative p-10 md:py-0 md:px-16 xl:px-40">
          <div
            className=" absolute hidden inset-0 border-l-[6px] md:inline-block"
            style={{
              borderImage:
                'linear-gradient(to bottom, #FFC593 0%, #BC7198 52%, #5A77FF 100%)',
              borderImageSlice: 1,
            }}
          />

          <div
            className="mx-10 absolute w-4/12 md:hidden  inset-0 border-t-[6px]"
            style={{
              borderImage:
                'linear-gradient(to right, #FFC593 0%, #BC7198 52%, #5A77FF 100%)',
              borderImageSlice: 1,
            }}
          />

          <h1 className="text-white text-[30px] md:text-[40px] font-bold tracking-[4.17px] leading-[48px]">
            FEATURES{' '}
          </h1>
          <p
            className="text-white/60 my-8 font-light"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
      </div>
      <div className="md:w-[35%] xl:w-[60%] relative md:flex order-1 md:order-2 min-h-[350px]">
        <Image
          src={DesktopMHeroImage.src}
          fill={true}
          style={{ objectFit: 'cover' }}
          quality={100}
          alt="Beautiful Stories"
        />
      </div>
    </main>
  );
}

export default FeaturesHero;
