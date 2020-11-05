import React from "react";
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
