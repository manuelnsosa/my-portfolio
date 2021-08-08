import React, { useState } from "react";
import StyledBurger from "./styled.js";
import RightNavBar from "../RightNavBar/RightNavBar.jsx";
const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger
        id="burger"
        open={open}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </StyledBurger>
      <RightNavBar open={open} />
    </>
  );
};

export default Burger;
