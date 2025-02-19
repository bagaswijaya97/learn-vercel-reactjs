import { Link } from "react-router-dom";

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
  return (
    <>
      <ul
        className={`nav navbar-nav ${navbarPlacement}`}
        data-in="fadeInDown"
        data-out="fadeOutUp"
      >
         <li>
          <Link to="/">Beranda</Link>
        </li>
        <li className="dropdown">
          <Link
            to="#"
            className="dropdown-toggle"
            data-toggle="dropdown"
            onClick={toggleSubMenu}
          >
            Halaman
          </Link>
          <ul className="dropdown-menu">
            <li>
              <Link to="/about-us-2">About Us Two</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact Us</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/project-2">Proyek</Link>
        </li>
        <li>
          <Link to="/services-2">Layanan</Link>
        </li>
        <li>
          <Link to="/contact-us">Kontak</Link>
        </li>
      </ul>
    </>
  );
};

export default MainMenu;
