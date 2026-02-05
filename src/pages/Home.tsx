import HeroSection from '../components/HeroSection.tsx';
import StatsSection from '../components/StatsSection.tsx';
import GallerySection from '../components/GallerySection.tsx';
import TestimonialsSection from '../components/TestimonialsCarousel.tsx';

const Home = () => {
  return (
    
    <>
      <title>Kathmandu National School - Excellence in Education Since 1979</title>
      <meta 
        name="description" 
        content="Kathmandu National School (KNS) - Premier educational institution in Nepal with 45+ years of excellence. Motto: Education · Civilization · Humanization."
      />
        <HeroSection />
        <StatsSection />
        <GallerySection />
        <TestimonialsSection />
    </>
  );
};

export default Home;

