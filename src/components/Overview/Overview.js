import { ReactComponent as Arrow } from "../../assets/images/arrow-up-card.svg";

import "./Overview.scss";

const Overview = () => {
  return (
    <div className="overview">
      <p className="amount">$8,901</p>
      <p className="desc">Total visitors</p>
      <p className="diff">
        <Arrow /> 37.8%
      </p>
    </div>
  );
};

export default Overview;
