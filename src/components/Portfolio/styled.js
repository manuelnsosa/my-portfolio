import styled from "styled-components";

const StyledProjects = styled.div`
  margin-top: 50px;
  margin-left: 30px;
  text-align: center;
  display: flex;
  flex-flow: row nowrap;
  div {
    margin: 0 auto;
    padding: 3px;
  }
  h3 {
    margin-top: 22px;
    font-weight: bold;
    color: #86b7f7;
    align-self: center;
  }
  h2 {
    margin-top: 22px;
    font-weight: bold;
    color: #86b7f7;
    align-self: center;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    margin-top: 40px;
    margin-left: 0;
  }
`;

export default StyledProjects;
