import React from "react";
import { StyledCrosshairButton } from "../Crosshair.style";

interface CrosshairButtonProps {
  /** text to show inside the button*/
  name: string;
  /** if false -> return empty react fragment*/
  found: boolean;
  /** callback function passed to the onClick handler*/
  handleChoiceClick: (name: string) => void;
}

const CrosshairButton: React.FC<CrosshairButtonProps> = (props) => {
  return (
    <>
      {!props.found && (
        <StyledCrosshairButton
          onClick={() => props.handleChoiceClick(props.name)}
          className="option"
        >
          {props.name}
        </StyledCrosshairButton>
      )}
    </>
  );
};

export default CrosshairButton;
