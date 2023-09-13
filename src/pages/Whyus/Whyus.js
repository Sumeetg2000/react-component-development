import Overview from "../../components/Overview/Overview";
import Team from "../../components/Team/Team";
import playicon from "../../assets/images/whyus-playIcon.png";
import meetImg from "../../assets/images/whyUs-img.png";
import "./Whyus.scss";

const Whyus = () => {
  return (
    <div className="section-whyus">
      <div className="whyus-content">
        <div className="whyus-header">
          <h2 className="whyus-heading">
            Why we are different from other startups
          </h2>
          <p className="whyus-subheading">
            With us you can create a mobile app for your business in 2 weeks as
            well as create a website for your business in 2 days.
          </p>
        </div>
        <Team />
      </div>
      <div className="whyus--img-container">
        <img
          src={meetImg}
          className="whyus-img"
          alt="man and a woman watching presentation in a meeting."
        />
        <img src={playicon} className="play-icon" alt="play" />
        <Overview />
      </div>
    </div>
  );
};

export default Whyus;
