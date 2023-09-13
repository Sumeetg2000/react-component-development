import BaseButton from "../Button/Button";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Logo from "../Logo/Logo";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Logo />
        <HeaderMenu />
      </div>
      <div className="header-right">
        <BaseButton type="text" text="Sign In" />
        <BaseButton type="primary" text="Get Started Free" />
      </div>
    </header>
  );
}
