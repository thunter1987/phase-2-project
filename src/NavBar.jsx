import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>
        Performance Parts Manager
      </Link>
      <ul>
        <CustomLink to='/parts'>Parts List</CustomLink>
        <CustomLink to='/partform'>Parts Form</CustomLink>
      </ul>
    </nav>
  );
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
}
