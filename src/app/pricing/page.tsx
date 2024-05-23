import React from 'react';
import PricingHero from '@/components/pages/pricing/PricingHero';
import BetaBanner from '@/components/pages/features/BetaBanner';
import PricingCards from '@/components/pages/pricing/PricingCards';

function page() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <BetaBanner />
    </>
  );
}

export default page;
