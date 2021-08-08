import React from "react";
import { Link } from "react-router-dom";
import Ul from "./styled";

const RightNavBar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h3>Home</h3>
        </Link>
      </li>
      <li>
        <Link to="/resume" style={{ textDecoration: "none" }}>
          <h3>Resume</h3>
        </Link>
      </li>
      <li>
        <Link to="/portfolio" style={{ textDecoration: "none" }}>
          <h3>Portfolio</h3>
        </Link>
      </li>
      <li>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <h3>Contact</h3>
        </Link>
      </li>
    </Ul>
  );
};

export default RightNavBar;
