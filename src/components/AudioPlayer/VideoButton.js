import React from "react";
const classNames = require("classnames");

function VideoButton({ url }) {
  return (
    <a
      className={classNames({ "video-button": url })}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {url && "Клип"}
    </a>
  );
}

export default VideoButton;
