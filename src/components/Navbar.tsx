import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  return (
    <>
      <nav>
        <NavLink to="/" className="header-link">
          <h3 className="logo">Matte.dev</h3>
        </NavLink>
        <ul>
          <li>
            <NavLink to="/">
              <div>Home</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog">
              <div>Blog</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <div>About</div>
            </NavLink>
          </li>
          {/*<li>
            <NavLink to="/servizi">
              <div>Servizi</div>
            </NavLink>
          </li>*/}
          <li>
            <NavLink to="/progetti">
              <div>Progetti</div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contatti">
              <div>Contatti</div>
            </NavLink>
          </li>
          <li onClick={() => hamburgerMenu()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mobile-menu"
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </li>
        </ul>
      </nav>
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-x"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
        <ul>
          <li onClick={() => hamburgerMenu()}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li onClick={() => hamburgerMenu()}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li onClick={() => hamburgerMenu()}>
            <NavLink to="/about">About</NavLink>
          </li>
          {/* <li onClick={() => hamburgerMenu()}>
            <NavLink to="/servizi">Servizi</NavLink>
          </li> */}
          <li onClick={() => hamburgerMenu()}>
            <NavLink to="/progetti">Progetti</NavLink>
          </li>
          <li onClick={() => hamburgerMenu()}>
            <NavLink to="/contatti">Contatti</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
