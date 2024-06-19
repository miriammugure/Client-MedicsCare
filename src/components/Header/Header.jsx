import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { MdOutlineLocalHospital } from "react-icons/md";

function Header() {
  return (
    <div>
      <div className="headerContainer">
        <div className="navLinks">
          <ul>
            <li>
              {" "}
              <Link to="/" className="link">
                home
              </Link>
            </li>
            <li>
              <Link to="/About" className="link">
                about
              </Link>
            </li>
            <li>
              <Link to="/Services" className="link">
                services
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Doctors" className="link">
                doctors
              </Link>
            </li>
            <li>
              {" "}
              <Link to="/Contact" className="link">
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <h2>medics hub</h2>
          <div className="iconHeader">
            <MdOutlineLocalHospital />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
