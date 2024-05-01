import Hero from '@/components/pages/Landing/Hero';
import SubHero from '@/components/pages/Landing/SubHero';
import HeroPhoto1 from '/public/assets/new-photos/photographer.jpg';
import HeroPhoto2 from '/public/assets/new-photos/pc-on-desktop.jpg';
import SubHero2 from '@/components/pages/Landing/SubHero2';
import FeaturedStories from '@/components/pages/Landing/FeaturedStories';
import Features from '@/components/pages/Landing/Features';

export default function Home() {
  return (
    <>
      <Hero />
      <SubHero
        mainImage={HeroPhoto1}
        title={'BEAUTIFUL STORIES EVERY TIME'}
        description={
          'With Photosnap, you’ll have confidence knowing your stories will look their best. Our tool allows you to customize everything to your liking.'
        }
      />
      <SubHero2
        mainImage={HeroPhoto2}
        title={'DESIGNED FOR EVERYONE'}
        description={
          'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.'
        }
      />
      <FeaturedStories />
      <Features />
    </>
  );
}
