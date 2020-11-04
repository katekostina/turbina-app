import React from "react";
import "../blocks/content-box/content-box.css";
import Articles from "./Articles.js";
import Form from "./Form.js";

function ContentBox() {
  return (
    <section className="content-box">
      <Articles />
      <Form />
    </section>
  );
}

export default ContentBox;
