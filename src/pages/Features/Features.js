import chartImg from "../../assets/images/SalesFigures-features.png";
import { ReactComponent as Arrow } from "../../assets/images/arrow-up-card.svg";
import { ReactComponent as Check } from "../../assets/images/check.svg";

import "./Features.scss";

const Features = () => {
  return (
    <div className="section-features">
      <div className="sales-details">
        <div className="sales-report">
          <h5 className="report-heading">Sales Report</h5>
          <img
            src={chartImg}
            className="sales-chart"
            alt="a chart representing sales over the course of months."
          />
        </div>
        <div className="sales-comp">
          <div className="data">
            <h6 className="data-heading">Sales</h6>
            <p className="amount">$31,092</p>
            <p className="diff">
              <Arrow /> 4.2%
              <span className="diff-desc">from last year</span>
            </p>
          </div>
          <div className="data">
            <h6 className="data-heading">Marketing</h6>
            <p className="amount">$29,128</p>
            <p className="diff">
              <Arrow /> 4.2%
              <span className="diff-desc">from last year</span>
            </p>
          </div>
        </div>
      </div>
      <div className="feature-details">
        <div className="feature-header">
          <h2>How we plan to disrupt the industry</h2>
          <p className="detail">
            We're based in NYC, which is home to so many great companies and
            communities, but it's also where we started out as a bootstrapped
            team of two people working from their apartments.{" "}
          </p>
        </div>

        <div className="features">
          <div className="feature">
            <span className="icon">
              <Check />
            </span>
            <p className="feature-desc">
              Agile web design and development methodology
            </p>
          </div>
          <div className="feature">
            <span className="icon">
              <Check />
            </span>
            <p className="feature-desc">
              Award winning web solutions and sites
            </p>
          </div>
          <div className="feature">
            <span className="icon">
              <Check />
            </span>
            <p className="feature-desc">
              Competitive rates for web design and development talent
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
