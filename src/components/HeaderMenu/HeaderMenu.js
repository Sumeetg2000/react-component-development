import Link from "antd/es/typography/Link";
import "./HeaderMenu.scss";

export default function HeaderMenu() {
  return (
    <nav className="headermenu">
      <ul className="nav-list">
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Pages</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
