import BaseButton from "../Button/Button";
import { ReactComponent as CheckBlack } from "../../assets/images/pricing-check-black.svg";
import { ReactComponent as CheckWhite } from "../../assets/images/pricing-check-white.svg";
import "./List.scss";
import { Divider } from "antd";

const List = ({ planGrade, planPrice, listItems, btnType }) => {
  const isGold = planGrade === "Gold";

  return (
    <div className={`${isGold ? "popular list" : "list"}`}>
      <p className="plan-grade">{planGrade}</p>
      <p className="plan-price">
        {planPrice}
        <span className="price-desc">/month</span>
      </p>
      {isGold && <Divider className="divider" />}

      <ul className="plan-list">
        {listItems.map((listItem) => (
          <li className="list-item" key={listItem}>
            {isGold ? <CheckWhite /> : <CheckBlack />}
            {listItem}
          </li>
        ))}
      </ul>
      <BaseButton type={btnType} text="Choose plan" />
    </div>
  );
};

export default List;
