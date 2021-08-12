import React from "react";
import StyledProjects from "./styled";
import ecommerce from "./assets/images/ecommerce.png";
import countryapp from "./assets/images/countryapp.png";

const Projects = () => {
  return (
    <>
      <StyledProjects>
        <h3>Country APP</h3>
        <img src={countryapp} alt="Not found"></img>
        <label>
          The application consumes data from a RESTful API
          (https://restcountries.eu/) and from a local database. It was also
          required to create pagination, filtering and sorting. <br />
          <h6>
            PERN stack: ReactJS - Redux - NodeJS - Express - Sequelize -
            PostgreSQL
          </h6>
        </label>
        <div className="container-a">
          <a
            href="https://github.com/manuelnsosa/PI-Countries-FT13"
            target="_blank"
            rel="noreferrer"
            className="a1"
          >
            Github - Repository
          </a>
          <a
            href="https://github.com/manuelnsosa/PI-Countries-FT13"
            target="_blank"
            rel="noreferrer"
            className="a2"
          >
            Demo
          </a>
        </div>
      </StyledProjects>
      <br />
      <StyledProjects>
        <h3>E-Commerce - House&Wine</h3>
        <img src={ecommerce} alt="Not found"></img>
        <label>
          Ecommerce Platform to Sell Wine Online. <br />
          It includes admin and user authentication, catalogue, cart, credit
          card and MercadoPago payment methods, panel admin and more.
          <h6>MERN stack: ReactJS - Redux - NodeJS - MongoDB</h6>
        </label>
        <div className="container-a">
          <a
            href="https://github.com/itsnou/ecommerce-how"
            target="_blank"
            rel="noreferrer"
            className="a1"
          >
            Github - Repository
          </a>
          <a
            href="https://howclient.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            className="a2"
          >
            Demo
          </a>
        </div>
      </StyledProjects>
    </>
  );
};

export default Projects;
