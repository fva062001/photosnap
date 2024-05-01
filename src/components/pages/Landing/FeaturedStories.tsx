import React from 'react';
import StoryCard from './StoryCard';
import MountainsImage from '/public/assets/new-photos/the-mountains.jpg';
import CityscapeImage from '/public/assets/new-photos/sunset.jpg';
import VoyageImage from '/public/assets/new-photos/parrot.jpg';
import ArchitectureImage from '/public/assets/new-photos/architecture.jpg';

function FeaturedStories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      <StoryCard
        title={'The Mountains'}
        author={'John Appleseed'}
        image={MountainsImage.src}
      />
      <StoryCard
        title={'Sunset Cityscapes'}
        author={'Benjamin Cruz'}
        image={CityscapeImage.src}
      />
      <StoryCard
        title={'Parrots'}
        author={'Alexei Borodin'}
        image={VoyageImage.src}
      />
      <StoryCard
        title={'Architecturals'}
        author={'Samantha Brooke'}
        image={ArchitectureImage.src}
      />
    </div>
  );
}

export default FeaturedStories;
