import React from "react";
import { ReactComponent as Minus } from "../../assets/images/minusIcon.svg";
import { ReactComponent as Plus } from "../../assets/images/plusIcon.svg";

import "./Faq.scss";

const Faq = () => {
  return (
    <div className="section-faq">
      <div className="container">
        <h2 className="faq-heading">
          Awesome features optimizing your website
        </h2>
        <div className="questions">
          <div className="question">
            <div className="open-question">
              <h4>1. Why You Need SEO Optimization</h4>
              <p className="answer">
                When does a mere internet 'SEO' company grow into a trusted
                partner that stays in front of the latest industry trends? When
                it's time to partner with Mocer, that's when.
              </p>
            </div>
            <Minus />
          </div>
          <div className="question">
            <h4>2. The Benefits of SEO Optimization</h4>
            <Plus />
          </div>
          <div className="question">
            <h4>3. How to Get Started with SEO Optimization</h4>
            <Plus />
          </div>
          <div className="question">
            <h4>4. How to Get Your Business Ready for SEO Optimization</h4>
            <Plus />
          </div>
          <div className="question">
            <h4>5. What is a Meta Description?</h4>
            <Plus />
          </div>
          <div className="question">
            <h4>6. How to Write a Meta Description</h4>
            <Plus />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
