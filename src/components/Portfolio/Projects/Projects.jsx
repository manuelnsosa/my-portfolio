import React from "react";
import StyledProjects from "./styled";
import ecommerce from "../../../ecommerce.png";

const Projects = () => {
  return (
    <>
      <StyledProjects>
        <h3>Country APP</h3>
        <img
          src="https://comiendomelanubehome.files.wordpress.com/2019/11/3.png"
          alt="Not found"
        ></img>
        <label>-description-</label>
        <a
          href="https://github.com/manuelnsosa/PI-Countries-FT13"
          target="_blank"
          rel="noreferrer"
        >
          Github - Repository
        </a>
        <a
          href="https://github.com/manuelnsosa/PI-Countries-FT13"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      </StyledProjects>
      <br />
      <StyledProjects>
        <h3>E-Commerce - House&Wine</h3>
        <img src={ecommerce} alt="Not found"></img>
        <label>-description-</label>
        <a
          href="https://github.com/itsnou/ecommerce-how"
          target="_blank"
          rel="noreferrer"
        >
          Github - Repository
        </a>
        <a
          href="https://howclient.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          Demo
        </a>
      </StyledProjects>
    </>
  );
};

export default Projects;
