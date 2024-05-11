import React from 'react';
import ArrowIcon from '../../../../public/icons/ArrowIcon';

function BetaBanner() {
  return (
    <div
      className="min-h-[400px] border-l-[6px] flex "
      style={{
        fontFamily: 'DM Sans, sans-serif',
        borderImage:
          'linear-gradient(to bottom, #FFC593 0%, #BC7198 52%, #5A77FF 100%)',
        borderImageSlice: 1,
        background:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/new-photos/dunes.jpg) no-repeat center center/cover',
      }}>
      <div className="max-w-[1500px] mx-4 flex flex-col md:flex-row justify-between my-auto xl:mx-auto w-full ">
        <h1 className="text-5xl tracking-[4.17px] leading-[48px] text-white font-bold">
          WE’RE IN BETA. <br /> GET YOUR INVITE <br />
          TODAY!
        </h1>
        <button
          className=" text-white tracking-[2px]  flex font-semibold my-12 md:my-0"
          style={{ fontFamily: 'DM Sans, sans-serif' }}>
          <p className="my-auto"> GET AN INVITE</p>
          <ArrowIcon className="ml-10 my-auto" />
        </button>
      </div>
    </div>
  );
}

export default BetaBanner;
