import React from 'react';
import PricingHero from '@/components/pages/pricing/PricingHero';
import BetaBanner from '@/components/pages/features/BetaBanner';
import PricingCards from '@/components/pages/pricing/PricingCards';
import ComparisonTable from '@/components/pages/pricing/ComparisonTable';

function page() {
  return (
    <>
      <PricingHero />
      <PricingCards />
      <ComparisonTable />
      <BetaBanner />
    </>
  );
}

export default page;
