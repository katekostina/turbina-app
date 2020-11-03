import React from "react";
import "../blocks/content-box/content-box.css";
import Articles from "./Articles.js";

function ContentBox() {
  return (
    <section className="content-box">
      <Articles />
      {/*  тут будет компонент Form */}
    </section>
  );
}

export default ContentBox;
