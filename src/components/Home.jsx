import React from "react";
import '../css/App.css'
import CustomLink from "./CustomLink";

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Performance Parts Manager</h1>
      <h3>Click A Link Below: </h3>
          <CustomLink to='/parts'>Parts List</CustomLink>
          <CustomLink to='/partform'>Parts Form</CustomLink>
    </div>
  );
}
