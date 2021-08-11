import React from "react";
import StyledHome from "./styled.js";
import logo from "../../logo.jpg";
import NavBar from "../NavBar/NavBar";
import email from "./assets/email.svg";
import linkedin from "./assets/linkedin.svg";
import github from "./assets/github.svg";
import whatsapp from "./assets/whatsapp.svg";
export const Home = () => {
  var w = window.innerWidth;
  return (
    <>
      <NavBar />
      <StyledHome>
        {w <= 768 && (
          <>
            <h3>
              Welcome to my <span class="underline">website!</span>
            </h3>
            <div>
              <h2>
                My name is <br />
                Manuel Sosa
              </h2>
            </div>
          </>
        )}
        {w > 768 && (
          <h2>
            My name is <span class="underline"> Manuel Sosa </span>
          </h2>
        )}
        <div className="contenedor">
          <h1>
            I am a Full Stack Developer <span>&#160;</span>
          </h1>
        </div>
        <div className="container-img">
          <img className="manuel-pic" src={logo} alt="Logo" />
        </div>
        <div className="footer-followers">
          <ul>
            <li>
              <a
                href="http://www.linkedin.com/in/manuelnsosa"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} class="footer-svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://www.github.com/manuelnsosa"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} class="footer-svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="http://bit.ly/whatsapp-manuel"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} class="footer-svg" alt="" />
              </a>
            </li>
            <li>
              <a
                href="mailto:manuelsosa.ar@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img src={email} class="footer-svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </StyledHome>
    </>
  );
};

export default Home;
