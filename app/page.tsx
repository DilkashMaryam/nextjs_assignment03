import Image from "next/image";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import Deals from "./components/Deals/page";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HeroSection></HeroSection>
      <Deals/>
      <Footer></Footer>
    </div>
  );
}
export default Home
