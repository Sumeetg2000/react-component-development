import testimonialProfile from "../../assets/images/testimonial-Image.png";
import star from "../../assets/images/testimonial-imgStar.png";
import { ReactComponent as SliderDotFill } from "../../assets/images/testimonial-sliderDot-fill.svg";
import { ReactComponent as SliderDot } from "../../assets/images/testimonial-sliderDot.svg";
import "./Testimonials.scss";

const Testimonials = () => {
  return (
    <div className="section-testimonials">
      <div className="testimonial-header">
        <h2 className="testimonial-heading">Customer is Our Top Priority</h2>
        <p className="testimonial-subheading">
          We survey all of our clients, the results of which go directly to our
          CEO.
        </p>
      </div>
      <div className="testimonial-slider">
        <div className="testimonial--img-container">
          <img
            className="testimonial-img"
            src={testimonialProfile}
            alt="A man with glasses standing while holding laptop"
          />

          <img src={star} alt="star" className="img-star" />
        </div>
        <div className="testimonial-content">
          <h3 className="testimonial-comment">
            “Amazing experience working together Coca Team. They are very
            passionate.”
          </h3>
          <p className="name">— Suaka Marga Satwa</p>
          <p className="desination">Product Manager, Qnet</p>
          <div className="slider-dots">
            <SliderDotFill />
            <SliderDot />
            <SliderDot />
            <SliderDot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
