import React from "react";
import "../css/navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

 export default function NavBar() {
   function CustomLink({ to, children, ...props }) {
    let resolvedPath = useResolvedPath(to);
    let match = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={match ? "active" : ""}>
        <Link to={resolvedPath} {...props}>
          {children}
        </Link>
      </li>
    );
  }
  return (
    <nav className='nav'>
      <ul><li>
      <Link to='/' className='site-title'>
        Performance Parts Manager
        </Link>
      </li>
        </ul>
        <ul>
        <li>
          <CustomLink to='/parts'>Parts List</CustomLink>
        </li>
        <li>
          <CustomLink to='/partform'>Parts Form</CustomLink>
          </li>
          </ul>
    </nav>
  ); 
 }