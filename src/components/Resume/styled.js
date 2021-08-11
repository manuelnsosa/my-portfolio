import styled from "styled-components";

const StyledResume = styled.div`
  .img-container {
  }
  img {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 70%;
  }
  .btn-container {
    margin-top: 40px;
    margin-bottom: 5px;
    padding: 10px;
  }
  .btn {
    border-radius: 5px;
    padding: 5px;
    background: #91b3f6;
    color: white;
    font-weight: bold;
  }

  .btn:hover {
    background: #ffb588;
  }
  @media (min-width: 768px) {
    justify-content: space-around;
    text-align: center;
  }
  @media (max-width: 768px) {
    .img-container {
      display: flex;
      flex-flow: column wrap;
    }
    img {
      width: 100%;
    }
    .btn-container {
      margin-top: 55px;
      padding: 10px;
      width: 100%;
      text-align: center;
    }
    .btn {
      border-radius: 5px;
      padding: 5px;
      font-size: 14px;
      background: #91b3f6;
      color: white;
      font-weight: bold;
    }
  }

  /* @media (max-width: 768px) {
    align-self: inherit;
    width: auto;
    .react-pdf__Page__canvas {
      margin-top: 45px;
      width: 100%;
      display: inline;
    }
    .btn-container {
      align-self: center;
      margin-left: auto;
      margin-right: auto;
    }
    .btn {
      align-self: center;
      margin-left: auto;
      margin-right: auto;
    }
  } */
`;
export default StyledResume;

/*import styled from "styled-components";

const StyledResume = styled.div`
  justify-content: space-around;
  text-align: center;
  .react-pdf__Page__canvas {
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
  }
  .btn-container {
    margin-top: 40px;
    margin-bottom: 5px;
    padding: 10px;
  }
  .btn {
    border-radius: 5px;
    padding: 5px;
    background: #91b3f6;
    color: white;
    font-weight: bold;
  }

  .btn:hover {
    background: #ffb588;
  }

  @media (max-width: 768px) {
    align-self: inherit;
    width: auto;
    .react-pdf__Page__canvas {
      margin-top: 45px;
      width: auto;
    }
    .btn-container {
      align-self: center;
      margin-left: auto;
      margin-right: auto;
    }
    .btn {
      align-self: center;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
export default StyledResume;
*/
