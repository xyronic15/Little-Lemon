import React, { useState } from "react";
import { Link } from "react-router-dom";
import { pages } from "../utils/paths"
import logo from "../assets/Logo.png";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

  // open/closed state for mobile users
  let [open, setOpen] = useState(false);

  return (
    <header className="text-black container md:flex items-center justify-center py-4 gap-[18px]">
      <Link to="/" className="mr-5 font-medium inline-flex align-middle"><img src={logo} alt="Little Lemon" className="md:w-[200px]"/></Link>
      <nav>
        <ul className={`md:flex md:items-center ${!open ? 'hidden' : 'mt-2'}`}>
          {pages.map((page, index) => (
            <li key={index} className="px-3 md:px-0 py-2">
              <Link to={page.path} className="mr-5 text-[26px] font-medium uppercase">{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Hamburger */}
      <div onClick={() => setOpen(!open)} className="md:hidden z-10 absolute right-8 top-6 cursor-pointer py-2">
        {!open ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
      </div>
    </header>
  );
};

export default Header;