import List from "../../components/List/List";
import "./Pricing.scss";

const Pricing = () => {
  const planDetails = [
    "No Discount",
    "Basic Support",
    "Ads Banner Free",
    "Design Style",
    "Component Library",
    "All limited links",
    "Own analytic platform",
    "Chat support",
    "Optimize hashtags",
    "Unlimited users",
  ];
  return (
    <div className="section-pricing">
      <div className="pricing-header">
        <h2 className="pricing-heading">
          Inspiring possibility and applying innovation
        </h2>
        <p className="pricing-subheading">Started today. We're ready!</p>
      </div>
      <div className="pricing-plans">
        <List
          listItems={planDetails}
          planGrade="Silver"
          planPrice="$50"
          btnType="primary"
        />
        <div className="popular">
          <p className="label">Most Popular</p>
          <List
            listItems={planDetails}
            planGrade="Gold"
            planPrice="$50"
            btnType="text"
          />
        </div>
        <List
          listItems={planDetails}
          planGrade="Premium"
          planPrice="$50"
          btnType="primary"
        />
      </div>
    </div>
  );
};

export default Pricing;
