import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  list-style: none;
  margin-right: 0;
  margin-top: 0;
  vertical-align: middle;
  li {
    padding: 18px 10px;
  }
  h3 {
    color: white;
    margin: 15px 15px 15px 15px;
    padding: 15px;
    font-size: 20px;
    vertical-align: middle;
  }
  h3:hover {
    text-decoration: 3px white underline;
    border-bottom-width: 5px;
  }
  @media (min-width: 769px) {
    margin-top: 15px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100%;
    padding-top: 3.5rem;
    background-color: black;
    transition: transform 0.3 ease-in-out;
    z-index: 10;

    h3 {
      color: white;
    }
  }
`;

export default Ul;
