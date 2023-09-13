import Brands from "../components/Brands/Brands";
import Aboutus from "./AboutUs/Aboutus";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import Testimonials from "./Testimonials/Testimonials";
import Whyus from "./Whyus/Whyus";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <Aboutus />
      <Features />
      <Whyus />
      <Brands />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
