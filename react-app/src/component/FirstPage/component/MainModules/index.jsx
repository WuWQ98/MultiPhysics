import React from "react";
import componentStyle from "./index.module.css";
import ArrowBtn from "./component/ArrowBtn";
import MultiphysicsNumericalAlgorithms from "./component/MultiphysicsNumericalAlgorithms";
import MultiphysicsFieldDistributionAndResponse from "./component/MultiphysicsFieldDistributionAndResponse";
import MultiphysicsProcessModeling from "./component/MultiphysicsProcessModeling";
import EMCAnalysis from "./component/EMCAnalysis";
import EmFieldModeling from "./component/EmFieldModeling";

export default class MainModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      moduleIndex: [1, 2, 3, 4, 5],
    };
    this.moduleStyle = {
      1: this.firstStyle,
      2: this.secondStyle,
      3: this.thirdStyle,
      4: this.forthStyle,
      5: this.fifthStyle,
    };
  }

  firstStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    width: "72%",
    height: "80%",
    left: "-144%",
    top: "10%",
    transition: "all 1s linear",
    textAlign: "center",
    fontSize: "100%",
    letterSpacing: "1px",
    visibility: "hidden",
  };

  secondStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    width: "72%",
    height: "80%",
    left: "-72%",
    top: "10%",
    transition: "all 1s linear",
    textAlign: "center",
    fontSize: "100%",
    letterSpacing: "1px",
    visibility: "hidden",
  };

  thirdStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    width: "90%",
    height: "100%",
    left: "5%",
    top: 0,
    transition: "all 1s linear",
    textAlign: "center",
    fontSize: "200%",
    letterSpacing: "5px",
  };

  forthStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    width: "72%",
    height: "80%",
    left: "100%",
    top: "10%",
    transition: "all 1s linear",
    textAlign: "center",
    fontSize: "100%",
    letterSpacing: "1px",
    visibility: "hidden",
  };

  fifthStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    width: "72%",
    height: "80%",
    left: "172%",
    top: "10%",
    transition: "all 1s linear",
    textAlign: "center",
    fontSize: "100%",
    letterSpacing: "1px",
    visibility: "hidden",
  };

  render() {
    return (
      <div className={componentStyle.container}>
        <div className={componentStyle["modules"]}>
          <div style={this.moduleStyle[this.state.moduleIndex[0]]}>
            <EmFieldModeling />
          </div>
          <div style={this.moduleStyle[this.state.moduleIndex[1]]}>
            <MultiphysicsProcessModeling />
          </div>
          <div style={this.moduleStyle[this.state.moduleIndex[2]]}>
            <MultiphysicsNumericalAlgorithms />
          </div>
          <div style={this.moduleStyle[this.state.moduleIndex[3]]}>
            <MultiphysicsFieldDistributionAndResponse />
          </div>
          <div style={this.moduleStyle[this.state.moduleIndex[4]]}>
            <EMCAnalysis />
          </div>
        </div>
        <div className={componentStyle.leftArrowBtn} onClick={this.goLeftPage}>
          <ArrowBtn />
        </div>
        <div
          className={componentStyle.rightArrowBtn}
          onClick={this.goRightPage}
        >
          <ArrowBtn />
        </div>
      </div>
    );
  }

  goLeftPage = () => {
    this.setState({
      moduleIndex: this.state.moduleIndex.map((idx) => {
        if (idx !== 5) {
          return ++idx;
        } else {
          return 1;
        }
      }),
    });
  };

  goRightPage = () => {
    this.setState({
      moduleIndex: this.state.moduleIndex.map((idx) => {
        if (idx !== 1) {
          return --idx;
        } else {
          return 5;
        }
      }),
    });
  };
}
