import React from "react";
const classNames = require("classnames");

function Cover({ cover }) {
  return <img className={classNames({ cover: cover })} src={cover} alt="" />;
}

export default Cover;
