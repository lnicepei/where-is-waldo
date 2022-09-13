import React from "react";
import { StyledOption } from "../Crosshair.style";

interface CrosshairButtonProps {
  name: string;
  found: boolean;
  handleChoiceClick: (name: string) => void;
}

const CrosshairButton: React.FC<CrosshairButtonProps> = (props) => {
  return (
    <>
      {!props.found && (
        <StyledOption
          onClick={() => props.handleChoiceClick(props.name)}
          className="option"
        >
          {props.name}
        </StyledOption>
      )}
    </>
  );
};

export default CrosshairButton;
