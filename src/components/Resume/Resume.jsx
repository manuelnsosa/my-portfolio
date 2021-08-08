import React from "react";
import UnderConstruction from "react-under-construction";
import "react-under-construction/build/css/index.css";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
const StyledNavBar = styled.div`
  z-index: 10;
`;
const Resume = () => (
  <>
    <StyledNavBar>
      <NavBar />
    </StyledNavBar>

    <UnderConstruction
      background={{
        image:
          "https://www.delt.net/wp-content/uploads/tips-for-learning-web-development.jpg",
        textColor: "#fff",
        overlay: {
          color: "#000",
          opacity: ".5",
        },
      }}
      title={{
        text: "Soon...",
      }}
      description={{
        text: "Section under construction",
        style: {
          maxWidth: "440px",
        },
      }}
      /* subscribe={{
      placeholder: "Enter your email",
      buttonText: "Subscribe",
      onSubmit: (value) => {
        console.log("user typed email :", value);
      },
    }} */
      links={[
        /* {
        url: "https://www.facebook.com/",
        image: "https://image.flaticon.com/icons/svg/220/220200.svg",
      },*/
        {
          url: "https://www.linkedin.com/in/manuelnsosa",
          image: "https://image.flaticon.com/icons/svg/145/145807.svg",
        },
        {
          url: "mailto:manuelsosa.ar@gmail.com",
          image: "https://image.flaticon.com/icons/svg/321/321817.svg",
        },
      ]}
    />
  </>
);

export default Resume;
