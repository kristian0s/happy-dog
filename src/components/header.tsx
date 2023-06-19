import { NavLink } from "react-router-dom";
import logo from "./../assets/images/dog.png";

type HeaderProps = {
  toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: HeaderProps) => {
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
          <NavLink className="header__nav__link" to="/">
            Home
          </NavLink>
          <NavLink className="header__nav__link" to="/contact">
            Contact
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
