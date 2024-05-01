import React from 'react';
import FeatureItem from './FeatureItem';
import InifnitySvg from '../../../../public/icons/InfinitySvg';
import ResponsiveSvg from '../../../../public/icons/ResponsiveSvg';
import SocialMediaSvg from '../../../../public/icons/SocialMediaSvg';

function Features() {
  return (
    <div className="bg-white min-h-[475px] flex justify-center">
      <div className="my-auto flex flex-col xl:flex-row space-y-14 py-14 xl:py-0 xl:space-y-0 xl:space-x-12">
        <FeatureItem
          svg={<ResponsiveSvg />}
          title="100% Responsive"
          description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        />
        <FeatureItem
          svg={<InifnitySvg />}
          title="No Photo Upload Limit"
          description="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />
        <FeatureItem
          svg={<SocialMediaSvg />}
          title="Available to Embed"
          description="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
        />
      </div>
    </div>
  );
}

export default Features;
