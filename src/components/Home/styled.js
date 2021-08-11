import styled from "styled-components";
export const StyledHome = styled.div`
  font-family: monospace;
  text-align: center;
  .contenedor {
    margin: auto;
    margin-top: 30px;
    display: table;
  }
  H2 {
    margin-top: 40px;
    padding: 5px;
    font-size: 2em;
    color: grey;
  }
  h1 {
    position: relative;
    float: left;
    background: white;
    color: black;
    font-size: 2em;
    margin-top: 10px;
  }

  h1 span {
    position: absolute;
    right: 0;
    width: 0;
    background: white;
    border-left: 1px solid #000;
    animation: escribir 5s steps(30) infinite alternate;
  }

  .container-img {
    height: 18%;
    width: 100%;
  }

  .manuel-pic {
    margin-top: 0;
    margin-bottom: 22px;
    width: 25%;
    height: 83%;
    transition: width 2s;
  }

  .manuel-pic:hover {
    width: 26%;
  }

  .underline {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }
  .footer-followers {
    ul {
      margin-left: 5px;
      margin-right: 5px;
      justify-content: center;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: row nowrap;

      a {
        margin-left: 5px;
        margin-right: 5px;
        img {
          width: 25px;
        }
        :hover {
          -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
          animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
      }
    }
  }
  @keyframes escribir {
    from {
      width: 100%;
    }
    to {
      width: 0;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    h3 {
      font-size: 2em;
      margin-top: 70px;
      margin-bottom: 0px;
    }

    h1 {
      font-size: 1.5em;
    }
    .manuel-pic {
      width: 65%;
      height: 65%;
      align-self: center;
    }

    h2 {
      position: relative;
    }

    h2:before {
      content: "";
      z-index: -1;
      left: 0.1em;
      top: -0.1em;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(107, 228, 196);
      border-color: linear-gradient(
        90deg,
        rgba(107, 228, 196, 0.9023984593837535) 0%,
        rgba(30, 229, 232, 1) 52%,
        rgba(39, 176, 252, 0.3225665266106442) 100%
      );
      position: absolute;
      border-right-color: transparent;
      width: 100%;
      height: 3.4em;
      transform: rotate(2deg);
      opacity: 0.7;
      border-radius: 50%;
      padding: 0.1em 0.25em;
    }
    h2:after {
      content: "";
      z-index: 1;
      left: 0.1em;
      top: 0.1em;
      padding: 0.1em 0.25em;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(107, 228, 196);
      border-color: linear-gradient(
        90deg,
        rgba(107, 228, 196, 0.9023984593837535) 0%,
        rgba(30, 229, 232, 1) 52%,
        rgba(39, 176, 252, 0.3225665266106442) 100%
      );
      border-left-color: transparent;
      border-top-color: transparent;
      position: absolute;
      width: 100%;
      height: 3.6em;
      transform: rotate(-1deg);
      opacity: 0.7;
      border-radius: 50%;
    }

    @keyframes escribir {
      from {
        width: 68%;
      }
      to {
        width: 35%;
      }
    }
  }
`;

export default StyledHome;
