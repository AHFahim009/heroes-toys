import Gallery from "./GALLERY/Gallery";
import HeroSection from "./HERO SECTION/HeroSection";
import Category from "./TAB BAR/Category";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Gallery></Gallery>
      <Category></Category>
    </div>
  );
};

export default Home;
