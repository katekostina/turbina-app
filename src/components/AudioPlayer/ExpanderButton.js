import React from "react";
import ExpanderBtnCross from '../svg/ExpanderBtnCross';
import ExpanderBtnArrow from '../svg/ExpanderBtnArrow';

const ExpanderButton = ({ onClick, isExpanded }) =>
  <button className="expander-button" onClick={onClick}>
    {isExpanded ? <ExpanderBtnCross /> : <ExpanderBtnArrow />}
  </button>

export default ExpanderButton;
