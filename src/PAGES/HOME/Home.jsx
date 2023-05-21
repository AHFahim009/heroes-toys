import { useEffect } from "react";
import Gallery from "./GALLERY/Gallery";
import HeroSection from "./HERO SECTION/HeroSection";
import OurFeatures from "./OUT_FEATURES/OurFeatures";
import Category from "./TAB BAR/Category";
import UserProfile from "./User_Profile/UserProfile";

const Home = () => {
  useEffect(() => {
    document.title = "Heroes - Home";
  }, []);

  return (
    <div>
      <HeroSection></HeroSection>
      <Gallery></Gallery>
      <Category></Category>
      <OurFeatures></OurFeatures>
      <UserProfile></UserProfile>
    </div>
  );
};

export default Home;
