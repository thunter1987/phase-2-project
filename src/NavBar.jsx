import React from "react";
import { Link } from "react-router-dom";

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
    function CustomLink({to, children, ...props}) {
        const path = window.location.pathname
        return (
            <li className={ path === to ? "active" : "" }>
                <Link to={ path } { ...props }>{ children }</Link>
            </li>
        )
    }
}
