import React from "react";

const classNames = require('classnames');

const ExpanderButton = ({ onClick, isExpanded }) =>
  <button
  className={classNames("expander-button", {
    "expander-button_type-cross": isExpanded,
    "expander-button_type-arrow": !isExpanded,
  })}
  onClick={onClick}
  />

export default ExpanderButton;
