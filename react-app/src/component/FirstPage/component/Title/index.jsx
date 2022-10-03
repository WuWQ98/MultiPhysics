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
          <span
            onClick={() => {
              this.props.goAhead();
            }}
          >
            复杂电磁系统中多物理过程数值模拟软件
          </span>
        </h2>
      </div>
    );
  }
}
