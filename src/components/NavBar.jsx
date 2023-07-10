import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";

export default function NavBar() {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to='/' className='site-title'>
            Performance Parts Manager
          </Link>
        </li>
      </ul>
      <ul>
          <CustomLink to='/parts'>Parts List</CustomLink>
          <CustomLink to='/partform'>Parts Form</CustomLink>
      </ul>
    </nav>
  );
}
