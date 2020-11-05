import React from "react";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="audioplayer__play" onClick={() => handleClick()}></button>
  );
}
