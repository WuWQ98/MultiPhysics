import React from "react";
import componentStyle from "./index.module.css";

export default class Title extends React.Component {
  render() {
    return (
      <div
        className={componentStyle["heading-primary"]}
        style={{ top: this.props.showNext ? "5%" : "40%" }}
      >
        <h2>
          <span>复杂电磁系统中多物理过程数值模拟软件</span>
        </h2>
        <div
          className={componentStyle["btn-arrow"]}
          onClick={() => {
            this.props.goAhead();
          }}
          style={{ display: this.props.showNext ? "none" : "auto" }}
        >
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
