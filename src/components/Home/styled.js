import styled from "styled-components";
export const StyledHome = styled.div`
  font-family: monospace;
  text-align: center;
  .contenedor {
    margin: auto;
    margin-top: 10px;
    display: table;
  }
  H2 {
    margin-top: 20px;
    padding: 15px;
    font-size: 2.5em;
    color: #86b7f7;
  }
  h1 {
    position: relative;
    float: left;
    background: white;
    color: black;
    font-size: 3em;
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

  img {
    margin-top: 0;
    margin-bottom: 30px;
    width: 30%;
    height: 30%;
    transition: width 2s;
  }

  img:hover {
    width: 31%;
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
      margin-top: 4px;
    }
    h1 {
      font-size: 1.5em;
    }
    img {
      width: 65%;
      height: 65%;
      align-self: center;
    }
    h3 {
      margin-top: 70px;
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
