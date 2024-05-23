import React from 'react'

const plans = [
  {
    planName: 'Basic',
    description:
      'Additional features available such as more detailed metrics. Recommended for business owners.   ',
    price: 19.0,
    principal: false,
  },
  {
    planName: 'Pro',
    description:
      'More advanced features available. Recommended for photography veterans and professionals.',
    price: 39.0,
    principal: true,
  },
  {
    planName: 'Business',
    description:
      'Additional features available such as more detailed metrics. Recommended for business owners.',
    price: 99.0,
    principal: false,
  },
];

function PricingCards() {
  return (
    <div
      className='flex min-h-[475px] justify-center bg-white'
      style={{
        fontFamily: 'DM Sans, sans-serif',
      }}
    >
      <div className='my-auto flex max-w-[1500px] flex-col  flex-wrap items-center justify-center gap-16 px-10 py-28 xl:flex-row xl:space-y-0'>
        {plans.map((plan, index) => {
          return (
            <Card
              key={index}
              planName={plan.planName}
              description={plan.description}
              price={plan.price}
              principal={plan.principal}
            />
          );
        })}
      </div>
    </div>
  );
}

interface CardProps {
  planName: string;
  description: string;
  price: number;
  principal: boolean;
}

function Card({ planName, description, price, principal }: CardProps) {
  return (
    <>
      {principal ? (
        <div
          className='inset-0 flex min-h-[470px] max-w-[350px] flex-col items-center  justify-center space-y-4 border-t-[6px] bg-black p-10 md:min-h-[0px] md:max-w-full md:flex-row md:items-stretch md:justify-between md:border-l-[6px]  md:border-t-0 xl:min-h-[470px] xl:max-w-[350px] xl:flex-col xl:items-center xl:border-l-0 xl:border-t-[6px]'
          style={{
            borderImage:
              'linear-gradient(to bottom, #FFC593 0%, #BC7198 52%, #5A77FF 100%)',
            borderImageSlice: 1,
          }}
        >
          <div className='max-w-[none] space-y-0 text-center md:max-w-[40%] md:space-y-12 md:text-start xl:max-w-[none] xl:text-center'>
            <h2 className='mb-3 text-2xl font-bold text-white md:text-4xl xl:text-2xl'>
              {planName}
            </h2>
            <p className=' text-white/60'>{description}</p>
            <button className='hidden w-full bg-white px-6 py-2 tracking-[2px] text-black hover:bg-gray-700 md:block xl:hidden'>
              PICK PLAN
            </button>
          </div>
          <div className='text-center'>
            <h3 className='pt-6 text-4xl font-bold tracking-[4.17px] text-white'>
              ${price.toFixed(2)}
            </h3>
            <p className='pb-6 text-white/60'>per month</p>
          </div>

          <button className='block w-full bg-white px-6 py-2 tracking-[2px] text-black hover:bg-gray-700 md:hidden xl:block'>
            PICK PLAN
          </button>
        </div>
      ) : (
        <div className='md:order flex max-h-[405px] min-h-[405px] max-w-[350px] flex-col items-center justify-center space-y-4 bg-[#F5F5F5] p-10 md:min-h-[0px] md:max-w-full md:flex-row md:items-stretch md:justify-between xl:max-w-[350px] xl:flex-col xl:items-center'>
          <div className='max-w-[none] space-y-0 text-center md:max-w-[40%] md:space-y-8 md:text-start xl:max-w-[none] xl:text-center'>
            <h2 className=' mb-3 text-2xl font-bold text-gray-900 md:text-4xl xl:text-2xl'>
              {planName}
            </h2>
            <p className=' text-gray-500'>{description}</p>
            <button className='hidden w-full bg-black px-6 py-2 tracking-[2px] text-white hover:bg-gray-700 md:block xl:hidden'>
              PICK PLAN
            </button>
          </div>
          <div className='text-center'>
            <h3 className='pt-6 text-4xl font-bold tracking-[4.17px] text-black'>
              ${price.toFixed(2)}
            </h3>
            <p className='pb-6 text-gray-500'>per month</p>
          </div>

          <button className='block w-full bg-black px-6 py-2 tracking-[2px] text-white hover:bg-gray-700 md:hidden xl:block'>
            PICK PLAN
          </button>
        </div>
      )}
    </>
  );
}

export default PricingCards