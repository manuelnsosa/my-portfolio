import styled from "styled-components";

export const StyledNav = styled.div`
  display: flex;
  background-color: black;
  position: relative;
  align-items: center;
  justify-content: space-around;
  height: 3.5em;

  @media (max-width: 768px) {
    height: auto;
    top: 0;
  }
`;

/*   display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Lato", sans-serif;
  background-color: black;
  overflow: hidden;
  font-weight: bold;
  color: white;
  position: relative;
  width: 100%;
  align-content: center;
  height: 4em;
  justify-content: space-around;
   */

export default StyledNav;
