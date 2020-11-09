import React from "react";

function ExpanderButton({onClick, isExpanded}) {

  return (
    <button
      className={"expander-button " + (isExpanded ? "expander-button_type-cross" : "expander-button_type-arrow")}
      onClick={onClick}
    ></button>
  );
}

export default ExpanderButton;
