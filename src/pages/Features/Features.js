import React from "react";
import Feature from "../../components/Feature/Feature";
import { ReactComponent as TestingIcon } from "../../assets/images/testing.svg";
import { ReactComponent as SettingIcon } from "../../assets/images/setting.svg";
import { ReactComponent as CloudIcon } from "../../assets/images/cloud.svg";
import "./Features.scss";

const Features = () => {
  return (
    <div className="section-features">
      <h2 className="features-heading">
        Awesome Features Optimizing Your Website
      </h2>
      <div className="features-description">
        <Feature
          Icon={TestingIcon}
          title="Improving UX with A/B"
          text="A/B testing is useful when you're launching something new or if you already have a large audience."
        />
        <Feature
          Icon={SettingIcon}
          title="Optimize Page Content"
          text="Great content relies on relevance. Any blog post, video you create should focus on your target market."
        />
        <Feature
          Icon={CloudIcon}
          title="Build Seamless Experience"
          text="Optimize your website for all devices, not just desktops. This is especially true of mobile devices."
        />
      </div>
    </div>
  );
};

export default Features;
