import HeaderMenu from "../HeaderMenu/HeaderMenu";
import Logo from "../Logo/Logo";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <HeaderMenu />
    </header>
  );
}
