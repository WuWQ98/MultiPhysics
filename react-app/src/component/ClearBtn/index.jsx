import React from "react";
import componentStyle from "./index.module.css";

export default class ClearBtn extends React.Component {
  render() {
    return (
      <div
        className={componentStyle["container"]}
        onClick={() => {
          window.location.reload();
        }}
      ></div>
    );
  }
}
