import Button from "../../components/Button/Button";
import heroImage from "../../assets/images/hero-img.png";
import Overview from "../../components/Overview/Overview";
import CustomerGrowth from "../../components/CustomerGrowth/CustomerGrowth";
import { ReactComponent as Arrow } from "../../assets/images/arrowHero.svg";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="section-hero">
      <div className="hero-discription-box">
        <h1>Growing your business comes down to 1- thing</h1>
        <p className="hero-description">
          That's where we come in. We make it easy for you to boost your online
          search results and grow your business online. Contact us today to get
          started!
        </p>

        <span className="arrow">
          <Arrow />
        </span>

        <Button type="primary" text="Get Started Free" />
      </div>
      <div className="hero-img-box">
        <img
          className="hero-img"
          src={heroImage}
          alt="A man and woman working on tablet."
        />
        <Overview />
        <CustomerGrowth />
      </div>
    </div>
  );
}
