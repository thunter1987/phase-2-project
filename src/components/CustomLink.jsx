import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function CustomLink({ to, children, ...props }) {
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
