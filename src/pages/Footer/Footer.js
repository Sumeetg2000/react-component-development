import { Divider } from "antd";
import Link from "antd/es/typography/Link";
import BaseButton from "../../components/Button/Button";
import CustomInput from "../../components/Input/Input";
import logo from "../../assets/images/footer-logo.png";
import submit from "../../assets/images/footer-Submit.png";
import socialLinks from "../../assets/images/footer-Social.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="logo-col">
        <img src={logo} alt="Coca logo" className="footer-logo" />
        <div className="get-started">
          <p>Ready to get started?</p>
          <BaseButton type="default" text="Get Started" />
        </div>
      </div>
      <Divider className="footer-divider" />

      <div className="footer-content">
        <div className="newsletter">
          <h5 className="newsletter-heading">Subscribe to our newsletter</h5>
          <CustomInput
            placeholder="Email address"
            tooltipTitle="subsrcibe to our newsletter"
            icon={submit}
          />
        </div>

        <div className="nav-row">
          <nav className="nav-col">
            <p className="footer-heading">Services</p>
            <ul className="footer-nav">
              <li>
                <Link className="footer-link">Email Marketing</Link>
              </li>
              <li>
                <Link className="footer-link">Campaigns</Link>
              </li>
              <li>
                <Link className="footer-link">Branding</Link>
              </li>
              <li>
                <Link className="footer-link">Offline</Link>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">About</p>
            <ul className="footer-nav">
              <li>
                <Link className="footer-link">Our Story</Link>
              </li>
              <li>
                <Link className="footer-link">Benefits</Link>
              </li>
              <li>
                <Link className="footer-link">Team</Link>
              </li>
              <li>
                <Link className="footer-link">Careers</Link>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Help</p>
            <ul className="footer-nav">
              <li>
                <Link className="footer-link">FAQs</Link>
              </li>
              <li>
                <Link className="footer-link">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-end">
        <div className="terms-policy">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="social-links">
          <img
            src={socialLinks}
            alt="social links: Facebook, Twitter, Instagram logos"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
