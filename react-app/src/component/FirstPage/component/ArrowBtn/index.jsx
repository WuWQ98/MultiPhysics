import React from "react";
import componentStyle from "./index.module.css";

export default class ArrowBtn extends React.Component {
  render() {
    return (
      <div className={componentStyle["btn-arrow"]}>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    );
  }
}
