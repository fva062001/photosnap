import React from 'react'

function PricingCards() {
  return (
    <div
      className="bg-white min-h-[475px] flex justify-center"
      style={{
        fontFamily: 'DM Sans, sans-serif',
      }}>
      <div className="my-auto flex flex-col xl:flex-row  py-28 px-10 gap-16 xl:space-y-0 flex-wrap justify-center items-center max-w-[1500px]">
        <div className="flex flex-col items-center justify-center space-y-4 min-h-[405px] max-h-[405px] bg-[#F5F5F5] max-w-[350px] p-10">
          <h2 className="text-2xl font-bold text-gray-900">Basic</h2>
          <p className="text-gray-500 text-center">
            Includes basic usage of our platform. Recommended for new and
            aspiring photographers.
          </p>
          <h3 className="text-4xl font-bold text-black tracking-[4.17px] pt-6">
            $19.00
          </h3>
          <p className="text-gray-500 pb-6">per month</p>
          <button className="tracking-[2px] bg-black text-white w-full px-6 py-2 hover:bg-gray-700">
            PICK PLAN
          </button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 min-h-[470px] bg-black max-w-[350px] p-10">
          <h2 className="text-2xl font-bold text-white">Pro</h2>
          <p className="text-white/60 text-center">
            More advanced features available. Recommended for photography
            veterans and professionals.
          </p>
          <h3 className="text-4xl font-bold text-white tracking-[4.17px] pt-6">
            $39.00
          </h3>
          <p className="text-white/60 pb-6">per month</p>
          <button className="tracking-[2px] bg-white text-black w-full px-6 py-2 hover:bg-gray-700">
            PICK PLAN
          </button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4 min-h-[405px] max-h-[405px] bg-[#F5F5F5] max-w-[350px] p-10">
          <h2 className="text-2xl font-bold text-gray-900">Business</h2>
          <p className="text-gray-500 text-center">
            Additional features available such as more detailed metrics.
            Recommended for business owners.
          </p>
          <h3 className="text-4xl font-bold text-black tracking-[4.17px] pt-6">
            $99.00
          </h3>
          <p className="text-gray-500 pb-6">per month</p>
          <button className=" tracking-[2px] bg-black text-white w-full px-6 py-2 hover:bg-gray-700">
            PICK PLAN
          </button>
        </div>
      </div>
    </div>
  );
}

export default PricingCards