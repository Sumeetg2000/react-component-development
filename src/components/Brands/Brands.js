import BrandLogo from "../BrandLogo/BrandLogo";
import uberEats from "../../assets/images/uberEatsIcon.png";
import jeep from "../../assets/images/JeepIcon.png";
import amazon from "../../assets/images/amazonIcon.png";
import bitcoin from "../../assets/images/bitcoinIcon.png";
import hubspot from "../../assets/images/hubspotIcon.png";
import stripe from "../../assets/images/stripeIcon.png";
import "./Brands.scss";

const Brands = () => {
  return (
    <div className="brands">
      <BrandLogo logo={uberEats} />
      <BrandLogo logo={jeep} />
      <BrandLogo logo={amazon} />
      <BrandLogo logo={bitcoin} />
      <BrandLogo logo={hubspot} />
      <BrandLogo logo={stripe} />
    </div>
  );
};

export default Brands;
