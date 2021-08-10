import React from "react";
import StyledHome from "./styled.js";
import logo from "../../logo.jpg";
import NavBar from "../NavBar/NavBar";
export const Home = () => {
  var w = window.innerWidth;
  return (
    <>
      <NavBar />
      <StyledHome>
        {w <= 768 && (
          <>
            <h3>Welcome to my website!</h3>
            <div>
              <h2>
                My name is <br />
                Manuel Sosa
              </h2>
            </div>
          </>
        )}
        {w > 768 && <h2>My name is Manuel Sosa</h2>}
        <div className="contenedor">
          <h1>
            I am a Full Stack Developer <span>&#160;</span>
          </h1>
        </div>
        <img src={logo} alt="Logo" />
      </StyledHome>
    </>
  );
};

export default Home;
