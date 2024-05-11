import React from 'react';
import FeatureItem from '../Landing/FeatureItem';
import InifnitySvg from '../../../../public/icons/InfinitySvg';
import ResponsiveSvg from '../../../../public/icons/ResponsiveSvg';
import SocialMediaSvg from '../../../../public/icons/SocialMediaSvg';
import DragDropIcon from '../../../../public/icons/DragDropIcon';
import CustomDomain from '../../../../public/icons/CustomDomainIcon';
import BoostExperience from '../../../../public/icons/BoostExperience';

const features = [
  {
    svg: <ResponsiveSvg />,
    title: "100% Responsive",
    description: "No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
  },
  {
    svg: <InifnitySvg />,
    title: "No Photo Upload Limit",
    description: "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
  },
  {
    svg: <SocialMediaSvg />,
    title: "Available to Embed",
    description: "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more."
  },
  {
    svg: <CustomDomain />,
    title: "Custom Domain",
    description: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!"
  },
  {
    svg: <BoostExperience />,
    title: "Boost Your Exposure",
    description: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list."
  },
  {
    svg: <DragDropIcon />,
    title: "Drag & Drop Image",
    description: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories."
  }
];

function AllFeatures() {
  return (
    <div className="bg-white min-h-[475px] flex justify-center">
      <div className="my-auto flex flex-col xl:flex-row space-y-14 py-28 gap-16 xl:space-y-0 flex-wrap justify-center max-w-[1500px]">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            svg={feature.svg}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AllFeatures;
