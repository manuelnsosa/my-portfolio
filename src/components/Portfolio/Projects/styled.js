import styled from "styled-components";

const StyledProjects = styled.div`
  background-color: none;
  color: black;
  width: 350px;
  height: 350px;
  border-radius: 20px;
  border: 1.4px solid grey;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  img {
    width: 330px;
    height: 220px;
    border-radius: 15px;
    align-self: center;
    padding: 10px;
  }
  a {
    border-radius: 5px;
    margin-bottom: 5px;
    width: 85%;
    align-self: center;
    background-color: black;
    color: white;
  }
  a:hover {
    background-color: grey;
  }
  a:focus {
    background-color: grey;
  }
  h3 {
    font-size: 22px;
  }
  @media (max-width: 768px) {
    width: 250px;
    height: 280px;
    justify-content: center;
    vertical-align: middle;
    h3 {
      margin: 0;
      margin-bottom: 10px;
      margin-top: 10px;
      font-size: 1em;
    }
    img {
      width: 230px;
      height: 150px;
    }
  }
`;

export default StyledProjects;
