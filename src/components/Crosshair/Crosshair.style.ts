import styled from "styled-components";

interface CrosshairStyleProps {
  /**  counts top and left space using X, Y coordinates and window size  */
  crosshairCoordinateX: number;
  crosshairCoordinateY: number;
  windowWidth: number;
  windowHeight: number;
}

export const StyledCrosshair = styled.div<CrosshairStyleProps>`
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

export const StyledCrosshairButton = styled.button`
  border: none;
  color: white;
  background-color: darkgray;
  border-radius: 5px;
  width: 150%;
  margin: 2px;
  padding: 2px;
  font-family: 'Playfair Display', serif;
  font-weight: bolder;
  cursor: pointer;
  /* z-index: 2; */
`;
