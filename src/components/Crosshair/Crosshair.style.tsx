import styled from "styled-components";

interface CrosshairProps {
  crosshairCoordinateX: number;
  crosshairCoordinateY: number;
  windowWidth: number;
  windowHeight: number;
}

export const StyledCrosshair = styled.div<CrosshairProps>`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: transparent;
  box-sizing: border-box;
  left: ${(props) => (props.crosshairCoordinateX / props.windowWidth) * 100}%;
  top: ${(props) => (props.crosshairCoordinateY / props.windowHeight) * 100}%;
`;

export const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20%;
  padding-left: 20%;
`;

export const StyledOption = styled.button`
  border: 3px solid black;
  border-radius: 5px;
  width: 150%;
`;
