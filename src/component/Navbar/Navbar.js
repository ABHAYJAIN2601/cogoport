import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  useEffect(() => {
    changeBackground();
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("scroll", changeBackground);
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  return (
    <div className={navbar ? "header active " : "header "}>
      <span className="header-left">
        <img
          src="./burger.svg"
          onClick={toggleNav}
          className="btn"
          alt="burger"
        />
        <img className="logo" src="./cogoport_logo.svg" alt="logo" />
      </span>
      {(toggleMenu || screenWidth > 820) && (
        <div className="navbar-items">
          <span className="items">
            <span>Products</span>
            <img src="./arrow-drop-down.svg" alt="dropdown-arrow" />
          </span>
          <span className="items">
            <span>Partners</span>
            <img src="./arrow-drop-down.svg" alt="dropdown-arrow" />
          </span>
          <span className="items">
            <span>Tools</span>
            <img src="./arrow-drop-down.svg" alt="dropdown-arrow" />
          </span>
          <span className="items">
            <span>Company</span>
            <img src="./arrow-drop-down.svg" alt="dropdown-arrow" />
          </span>
          <span className="items">
            <span>Knowledge Center</span>
            <img src="./arrow-drop-down.svg" alt="dropdown-arrow" />
          </span>
          <span className="items">
            <span>Contact Us</span>
            <img src="./arrow-drop-down.svg" alt="dropdown-arrow" />
          </span>
          <span className="items">
            <img src="./smile.svg" alt="smile emoji" />
            <span>Login In</span>
          </span>
          <button className="btn-red items">Sign up</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
