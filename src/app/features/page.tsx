import React from 'react';
import FeaturesHero from '@/components/pages/features/FeaturesHero';
import AllFeatures from '@/components/pages/features/AllFeatures';
import BetaBanner from '@/components/pages/features/BetaBanner';

function page() {
  return (
    <>
      <FeaturesHero />
      <AllFeatures />
      <BetaBanner />
    </>
  );
}

export default page;
