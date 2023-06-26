import { NavLink } from "react-router-dom";
import logo from "./../assets/images/dog.png";
import { LinkType } from "./sidebar";

type HeaderProps = {
  toggleSidebar: () => void;
  onClose: () => void;
};

const headerLinks: LinkType[] = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/contact",
    label: "Kontakt",
  },
  {
    path: "/animals",
    label: "Animals",
  },
];

const Header = ({ toggleSidebar, onClose }: HeaderProps) => {
  return (
    <div className="header__wrapper">
      <header className="header">
        <img
          onClick={toggleSidebar}
          className="header__logo"
          src={logo}
          alt="animated dog"
        />
        <nav className="header__nav">
          {headerLinks.map((link) => {
            return (
              <NavLink
                key={link.path}
                onClick={onClose}
                className="header__nav__link"
                to={link.path}
              >
                {link.label}
              </NavLink>
            );
          })}
        </nav>
      </header>
    </div>
  );
};

export default Header;
