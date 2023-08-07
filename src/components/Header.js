import React from "react";
import { Link } from "react-router-dom";
import pages from "../utils/paths"
import logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/"><img src={logo} alt="Little Lemon" /></Link>
        <ul>
          {pages.map((page, index) => (
            <li key={index}>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;