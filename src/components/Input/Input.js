import { Input, Tooltip } from "antd";
import "./Input.scss";

const CustomInput = ({ placeholder, tooltipTitle, icon }) => {
  return (
    <Input className="input"
      placeholder={placeholder}
      suffix={
        <Tooltip title={tooltipTitle}>
          <img src={icon} alt="Subscribe button for our newsletter" />
        </Tooltip>
      }
    />
  );
};

export default CustomInput;
