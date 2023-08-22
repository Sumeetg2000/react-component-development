import React from "react";
import Card from "../../components/Cards/Card";
import founderImg from "../../assets/images/founder.png";
import seoImg from "../../assets/images/seoMaster.png";
import accountExecutiveImg from "../../assets/images/accountExedcutive.png";
import adminImg from "../../assets/images/adminBro.png";
import "./Team.scss";

const Team = () => {
  return (
    <div className="section-team">
      <div className="team-header">
        <h2 className="team-heading">Get to know our mastah & super keren</h2>
        <p className="team-subheading">
          We provide SEO services to help your website rank higher on search
          engines like Google.
        </p>
      </div>
      <div className="team-members">
        <Card
          image={founderImg}
          name="Rakabuming Suhu"
          designation="Founder, CTO"
        />
        <Card
          image={seoImg}
          name="Jessica Aduhai"
          designation="SEO Master"
        />
        <Card
          image={accountExecutiveImg}
          name="Azalea Perumahan"
          designation="Account Executive"
        />
        <Card
          image={adminImg}
          name="Galot Bambang"
          designation=" Admin bro"
        />
      </div>
    </div>
  );
};

export default Team;
