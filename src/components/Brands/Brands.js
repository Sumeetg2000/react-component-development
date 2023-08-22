import React from "react";
import airbnbLogo from "../../assets/images/AirbnbLogo.png";
import googleLogo from "../../assets/images/GoogleLogo.png";
import microsoftLogo from "../../assets/images/MicrosoftLogo.png";
import oyoLogo from "../../assets/images/OYOLogo.png";
import fedexLogo from "../../assets/images/FedExLogo.png";
import amazonLogo from "../../assets/images/AmazonLogo.png";
import olaLogo from "../../assets/images/OLAlogo.png";
import walmartLogo from "../../assets/images/walmartLogo.png";
import BrandLogo from "../BrandLogo/BrandLogo";
import "./Brands.scss";

const Brands = () => {
  return (
    <div className="brands">
      <BrandLogo logo={airbnbLogo} />
      <BrandLogo logo={googleLogo} />
      <BrandLogo logo={microsoftLogo} />
      <BrandLogo logo={oyoLogo} />
      <BrandLogo logo={fedexLogo} />
      <BrandLogo logo={amazonLogo} />
      <BrandLogo logo={olaLogo} />
      <BrandLogo logo={walmartLogo} />
    </div>
  );
};

export default Brands;
