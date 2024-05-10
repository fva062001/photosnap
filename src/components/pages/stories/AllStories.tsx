import React from 'react';
import StoryCard from '../Landing/StoryCard';
import MountainsImage from '/public/assets/new-photos/full-moon.jpg';
import CityscapeImage from '/public/assets/new-photos/sunset.jpg';
import VoyageImage from '/public/assets/new-photos/parrot.jpg';
import ArchitectureImage from '/public/assets/new-photos/architecture.jpg';
import LionImage from '/public/assets/new-photos/lion.jpg';
import AlpsImage from '/public/assets/new-photos/swiss-alps.jpg';
import AfricaImage from '/public/assets/new-photos/africa.jpg';
import BigTreeImage from '/public/assets/new-photos/big-tyree.jpg';
import OceanImage from '/public/assets/new-photos/Ocean.jpg';
import WhaleImage from '/public/assets/new-photos/Whales.jpg';
import BeachSunsetImage from '/public/assets/new-photos/BeachSunset.jpg';
import HorsesImage from '/public/assets/new-photos/horses.jpg';
import GalaxyImage from '/public/assets/new-photos/galaxy.jpg';
import YellowFlower from '/public/assets/new-photos/YellowFlower.jpg';
import MountaineImage from '/public/assets/new-photos/mountain.jpg';
import WinterLandscapeImage from '/public/assets/new-photos/winter-landscape.jpg';

const images = [
  {
    title: 'The Mountains',
    author: 'John Appleseed',
    image: MountainsImage.src,
  },
  {
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    image: CityscapeImage.src,
  },
  { title: 'Parrots', author: 'Alexei Borodin', image: VoyageImage.src },
  {
    title: 'Architecturals',
    author: 'Samantha Brooke',
    image: ArchitectureImage.src,
  },
  { title: 'The Mountains', author: 'John Appleseed', image: AlpsImage.src },
  {
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    image: AfricaImage.src,
  },
  { title: 'Parrots', author: 'Alexei Borodin', image: LionImage.src },
  {
    title: 'Architecturals',
    author: 'Samantha Brooke',
    image: BigTreeImage.src,
  },
  { title: 'Ocean', author: 'Jane Doe', image: OceanImage.src },
  { title: 'Whales', author: 'John Smith', image: WhaleImage.src },
  { title: 'Beach Sunset', author: 'Emily Brown', image: BeachSunsetImage.src },
  { title: 'Horses', author: 'Michael Johnson', image: HorsesImage.src },
  { title: 'Galaxy', author: 'Sarah Wilson', image: GalaxyImage.src },
  { title: 'Yellow Flower', author: 'David Martinez', image: YellowFlower.src },
  { title: 'Mountain', author: 'Jessica Lee', image: MountaineImage.src },
  {
    title: 'Winter Landscape',
    author: 'Alexandra Davis',
    image: WinterLandscapeImage.src,
  },
];

function AllStories() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {images.map((image, index) => (
          <StoryCard
            key={index}
            title={image.title}
            author={image.author}
            image={image.image}
          />
        ))}
      </div>
    </>
  );
}

export default AllStories;
