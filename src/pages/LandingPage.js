import { ConfigProvider } from "antd";
import Header from "../components/Header/Header";
import Hero from "./Hero/Hero";
import Brands from "../components/Brands/Brands";
import Features from "./Features/Features";
import AboutUs from "./AboutUs/AboutUs";
import Strategies from "./Strategies/Strategies";
import Team from "./Team/Team";
import Faq from "./Faq/Faq";
import Contact from "./ContactUs/Contact";
import Footer from "./Footer/Footer";
import theme from "../theme/Theme";
import "../styles/main.scss";

function LandingPage() {
  return (
    <div className="landing-page">
      <ConfigProvider theme={theme}>
        <Header />
        <Hero />
        <Brands />
        <Features />
        <AboutUs />
        <Strategies />
        <Team />
        <Faq />
        <Contact />
        <Footer />
      </ConfigProvider>
    </div>
  );
}

export default LandingPage;
