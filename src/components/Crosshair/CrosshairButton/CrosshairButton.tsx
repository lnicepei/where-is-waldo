import React from "react";
import { StyledCrosshairButton } from "../Crosshair.style";

interface CrosshairButtonProps {
  name: string;
  found: boolean;
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
