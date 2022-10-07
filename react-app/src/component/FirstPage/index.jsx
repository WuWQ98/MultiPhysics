import React from "react";
import MainModules from "./component/MainModules";
import componentStyle from "./index.module.css";

export default class FirstPage extends React.Component {
  render() {
    return (
      <div className={componentStyle.container}>
        {/* <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */}
        <div
          className={componentStyle["module-container"]}
          style={{ visibility: this.props.showNext ? "visible" : "hidden" }}
        >
          <MainModules />
        </div>
      </div>
    );
  }
}
