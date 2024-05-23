import React from 'react';
import ArrowIcon from '../../../../public/icons/ArrowIcon';

function BetaBanner() {
  return (
    <>
      <div
        className='hidden min-h-[400px] border-l-[6px] md:flex '
        style={{
          fontFamily: 'DM Sans, sans-serif',
          borderImage:
            'linear-gradient(to bottom, #FFC593 0%, #BC7198 52%, #5A77FF 100%)',
          borderImageSlice: 1,
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/new-photos/dunes.jpg) no-repeat center center/cover',
        }}
      >
        <div className='mx-4 my-auto flex w-full max-w-[1500px] flex-col justify-between md:flex-row xl:mx-auto '>
          <h1 className='text-5xl font-bold leading-[48px] tracking-[4.17px] text-white'>
            WE’RE IN BETA. <br /> GET YOUR INVITE <br />
            TODAY!
          </h1>
          <button
            className=' my-12 flex  font-semibold tracking-[2px] text-white md:my-0'
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <p className='my-auto'> GET AN INVITE</p>
            <ArrowIcon className='my-auto ml-10' />
          </button>
        </div>
      </div>
      <div
        className=' relative flex min-h-[400px] md:hidden '
        style={{
          fontFamily: 'DM Sans, sans-serif',
          background:
            'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/new-photos/dunes.jpg) no-repeat center center/cover',
        }}
      >
        <div
          className='absolute inset-0 mx-4 w-4/12  border-t-[6px] md:hidden'
          style={{
            borderImage:
              'linear-gradient(to right, #FFC593 0%, #BC7198 52%, #5A77FF 100%)',
            borderImageSlice: 1,
          }}
        />
        <div className='mx-6 my-auto flex w-full max-w-[1500px] flex-col justify-between md:flex-row xl:mx-auto '>
          <h1 className='mt-12 text-5xl font-bold leading-[48px] tracking-[4.17px] text-white'>
            WE’RE IN BETA. <br /> GET YOUR INVITE <br />
            TODAY!
          </h1>
          <button
            className=' my-12 flex  font-semibold tracking-[2px] text-white md:my-0'
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            <p className='my-auto'> GET AN INVITE</p>
            <ArrowIcon className='my-auto ml-10' />
          </button>
        </div>
      </div>
    </>
  );
}

export default BetaBanner;
