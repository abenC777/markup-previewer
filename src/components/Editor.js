import React from "react";

export default function Editor(props) {
  return (
    <textarea
      name="editor"
      id="editor"
      cols="100"
      rows="10"
      type="text"
      onChange={props.onChange}
      value={props.markdown}
    ></textarea>
  );
}
