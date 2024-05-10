import React from 'react';
import ArrowIcon from '../../../../public/icons/ArrowIcon';

function StoriesHero() {
  return (
    <>
      <main
        className="flex relative min-h-[50vh] md:min-h-[750px] flex-col md:flex-row "
        style={{
          background:
            'url( /assets/new-photos/the-mountains.jpg) no-repeat center center/cover',
          fontFamily: 'DM Sans, sans-serif',
        }}>
        <div className="hidden md:inline my-auto mx-16">
          <p className="text-xs text-white mb-4 tracking-[2px] font-semibold">
            LAST MONTH’S FEATURED STORY
          </p>
          <h1 className="break-all text-5xl font-bold text-white tracking-[4.17px]">
            HAZY FULL <br /> MOON OF <br />
            APPALACHIA
          </h1>
          <p className=" text-sm text-white mt-6 mb-10">
            <span className="text-white/75">March 2nd 2020 </span>
            by John Appleseed
          </p>
          <p className="mb-6 max-w-[400px] leading-[25px] text-white/60">
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called &quot;mountains,&quot; especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>

          <button
            className=" text-white tracking-[2px] flex font-semibold"
            style={{ fontFamily: 'DM Sans, sans-serif' }}>
            READ THE STORY
            <ArrowIcon className="ml-10 my-auto" />
          </button>
        </div>
      </main>
      <div className="md:hidden min-h-[50vh] bg-black p-10">
        {' '}
        <p className="text-xs text-white mb-4 tracking-[2px] font-semibold">
          LAST MONTH’S FEATURED STORY
        </p>
        <h1 className=" break-all text-5xl font-bold text-white tracking-[4.17px]">
          HAZY FULL <br /> MOON OF <br />
          APPALACHIA
        </h1>
        <p className=" text-sm text-white mt-6 mb-10">
          <span className="text-white/75">March 2nd 2020 </span>
          by John Appleseed
        </p>
        <p className="mb-6 max-w-[400px] leading-[25px] text-white/60">
          The dissected plateau area, while not actually made up of geological
          mountains, is popularly called &quot;mountains,&quot; especially in eastern
          Kentucky and West Virginia, and while the ridges are not high, the
          terrain is extremely rugged.
        </p>
        <button
          className=" text-white tracking-[2px] flex font-semibold"
          style={{ fontFamily: 'DM Sans, sans-serif' }}>
          READ THE STORY
          <ArrowIcon className="ml-10 my-auto" />
        </button>
      </div>
    </>
  );
}

export default StoriesHero;
