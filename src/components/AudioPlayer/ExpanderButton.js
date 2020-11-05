import React from "react";

function ExpanderButton(props) {
  
  return (
    <button
      className={"expander-button " + (props.isExpanded ? "expander-button_type-cross" : "expander-button_type-arrow")}
      onClick={props.onClick}
    ></button>
  );
}

export default ExpanderButton;
