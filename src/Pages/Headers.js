import styled from "styled-components";
import github from "../imgs/github.png";

const HeaderPrincipal = styled.header`
  background: black;
  padding: 0.5em 1em;
  text-align: center;
  color: white;
`;
const Github = styled.img`
    height= 70px;
    width: 70px;
    border-radius: 50%;
`;
export const Headers = () => {
  return (
    <HeaderPrincipal>
      <Github src={github} />
    </HeaderPrincipal>
  );
};
