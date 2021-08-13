import styled from "styled-components";

const StyledProjects = styled.div`
  background-color: none;
  color: black;
  width: 350px;
  height: 480px;
  border-radius: 20px;
  /*  border: 1.4px solid grey; */
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin-bottom: 30px;
  img {
    width: 330px;
    height: 220px;
    border-radius: 15px;
    align-self: center;
    padding: 10px;
  }
  a {
    border-radius: 5px;
    padding: 5px;
    background: #91b3f6;
    color: white;
    font-weight: bold;
    width: 18%;
    height: 30px;
    text-decoration: none;
  }
  a:hover {
    background: #ffb588;
  }
  a:focus {
    background: #ffb588;
  }
  .a1 {
    width: 50%;
    margin-right: 10px;
  }
  .a2 {
    margin-left: 10px;
  }
  .container-a {
    display: flex;
    flex-direction: row nowrap;
    width: 100%;
    justify-content: space-around;
    display: inline-block;
    vertical-align: middle;
    margin-bottom: 20px;
  }
  h3 {
    font-size: 22px;
    color: grey;
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
  }
  h6 {
    padding: 10px;
  }
  label {
    padding: 5px;
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 400px;
    justify-content: center;
    vertical-align: middle;
    margin-top: 30px;
    margin-left: 0;

    h3 {
      margin: 0;
      margin-bottom: 10px;
      margin-top: 10px;
      font-size: 1em;
    }
    label {
      font-size: 0.8em;
    }
    h6 {
      font-size: 0.9em;
    }
    img {
      width: 230px;
      height: 150px;
    }
  }
`;

export default StyledProjects;
