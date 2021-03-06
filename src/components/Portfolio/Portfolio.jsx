import React from "react";
import NavBar from "../NavBar/NavBar";
import Projects from "./Projects/Projects";
import StyledProjects from "./styled";
export const Portfolio = () => {
  return (
    <>
      <NavBar />
      <StyledProjects>
        <h2>PORTFOLIO</h2>
        <div className="container-projects">
          <Projects />
        </div>
      </StyledProjects>
    </>
  );
};

export default Portfolio;
