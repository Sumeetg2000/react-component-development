import BaseButton from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import { ReactComponent as ArrowBtn } from "../../assets/images/arrow-up-right.svg";
import "./Aboutus.scss";

const Aboutus = () => {
  return (
    <div className="section-aboutus">
      <div className="section-heading">
        <h2>Delivering tech solutions</h2>
        <p className="heading-detail">
          We are a team of 20+ who are passionate about making the world a
          better place.
        </p>
      </div>
      <div className="modals">
        <div className="modal--promo">
          <div className="modal--heading-container">
            <p className="modal--sub-heading">Ready for future</p>
            <h3 className="modal-heading">
              Leveraging tech to drive a better IT experience
            </h3>
          </div>
          <div className="modal-btn">
            <BaseButton
              type="primary"
              text="See Incredible Work"
              icon={<ArrowBtn />}
            />
          </div>
        </div>
        <Modal
          className="modal bg-green"
          description="We have share our journey and some story"
          heading="Read our blog"
          Icon={ArrowBtn}
        />
        <Modal
          className="modal bg-orange"
          description="It’s a must to that we would like to share our workflow to believe you"
          heading="See our workflow"
          Icon={ArrowBtn}
        />
        <Modal
          className="modal bg-purple"
          description="2,000+ our team members around the world who create incredible and amazing projects"
          heading="Meet Our Expert"
          Icon={ArrowBtn}
        />
      </div>
    </div>
  );
};

export default Aboutus;
