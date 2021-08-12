import styled from "styled-components";

const StyledProjects = styled.div`
  margin-top: 20px;
  margin-left: 30px;
  text-align: center;
  .container-projects {
    display: flex;
    flex-flow: row nowrap;
  }

  div {
    margin: 0 auto;
    padding: 3px;
  }
  h3 {
    margin-top: 22px;
    font-weight: bold;
    align-self: center;
  }
  h2 {
    font-weight: bold;
    margin-bottom: 20px;
    color: #86b7f7;
    align-self: center;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    margin-top: 60px;
    text-align: center;
    margin-left: 0;
    padding-left: 0;
    .container-projects {
      margin-top: 20px;
      display: flex;
      flex-flow: column nowrap;
    }
  }
`;

export default StyledProjects;
