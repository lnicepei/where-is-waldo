import React from "react";

interface CrosshairButtonProps {
  name: string;
  found: boolean;
  handleChoiceClick: (name: string) => void;
}

const CrosshairButton = (props: CrosshairButtonProps) => {
  return (
    <>
      {!props.found && (
        <button
          onClick={() => props.handleChoiceClick(props.name)}
          className="option"
        >
          {props.name}
        </button>
      )}
    </>
  );
};

export default CrosshairButton;
