import { Divider } from "antd";
import Header from "../../components/Header/Header";
import BaseButton from "../../components/Button/Button";
import { ReactComponent as Star } from "../../assets/images/starHero.svg";
import { ReactComponent as ArrowBtn } from "../../assets/images/arrow-up-right.svg";
import { ReactComponent as ArrowRight } from "../../assets/images/Arrowright.svg";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="section-hero">
      <Header />
      <div className="hero-content">
        <div className="header-hero">
          <Star />
          <span className="heading-text">World Best Startup</span>
          <Divider className="divider" />
        </div>
        <h1 className="heading-hero">Best Tech Startup Ever</h1>

        <div className="hero-additional-info">
          <p className="coca-info">
            Coca is a startup that's making the world a better place! We've been
            working on our mission since 2021
          </p>
          <div className="btn">
            <BaseButton
              type="primary"
              text={`Meet The Expert`}
              icon={<ArrowBtn />}
            />
          </div>
          <div className="team-info-container">
            <span className="info-arrow">
              <ArrowRight />
            </span>
            <p className="team-info">
              Today, we're a team of 200+ who are building the future together
              by using cutting-edge technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
