import styled from "styled-components";
import Timer from "./Timer";

export const StyledTimer = styled(Timer)`
  display: flex;
  position: absolute;
  top: 50%;
  justify-content: center;
  color: white;
  user-select: none;
  background-color: rgba(41, 59, 72, 0.3);
  z-index: 2;
`;
