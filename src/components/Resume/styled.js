import styled from "styled-components";

const StyledResume = styled.div`
  display: flex;
  flex-flow: row nowrap;
  background-color: #fbfbfb;
  z-index: 10;

  .leftDiv {
    height: 100%;
    width: 25%;
    background-color: #fbfbfb;
  }
  .rightDiv {
    margin: 10px;
    height: 100%;
    width: 75%;
    background-color: white;
  }
`;
export default StyledResume;
