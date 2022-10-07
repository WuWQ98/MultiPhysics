import React from "react";
import componentStyle from "./index.module.css";

export default class MultiphysicsNumericalAlgorithms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUnfold: [false, false, false, false, false, false, false, false],
    };
  }

  content = [
    "区域分解(DDM)",
    "预条件(RC)",
    "SG算法",
    "牛顿迭代算法",
    "控制体积有限元(CV-FEM)",
    "迎风格式有限元(SUPG-FEM)",
    "时域有限元(FETD)",
    "时域有限差分(FDTD)",
  ];

  render() {
    return (
      <div className={componentStyle.container}>
        <div className={componentStyle.title}>多物理场数值算法</div>
        <div
          className={componentStyle.first}
          style={{
            opacity: this.state.isUnfold[0] ? "1" : "0",
            zIndex: this.state.isUnfold[0] ? "1" : "0",
          }}
        ></div>
        <div
          className={componentStyle.second}
          style={{
            opacity: this.state.isUnfold[1] ? "1" : "0",
            zIndex: this.state.isUnfold[1] ? "1" : "0",
          }}
        ></div>
        <div
          className={componentStyle.third}
          style={{
            opacity: this.state.isUnfold[2] ? "1" : "0",
            zIndex: this.state.isUnfold[2] ? "1" : "0",
          }}
        ></div>
        <div
          className={componentStyle.forth}
          style={{
            opacity: this.state.isUnfold[3] ? "1" : "0",
            zIndex: this.state.isUnfold[3] ? "1" : "0",
          }}
        ></div>
        <div
          className={componentStyle.fifth}
          style={{
            opacity: this.state.isUnfold[4] ? "1" : "0",
            zIndex: this.state.isUnfold[4] ? "1" : "0",
          }}
        ></div>
        <div
          className={componentStyle.sixth}
          style={{
            opacity: this.state.isUnfold[5] ? "1" : "0",
            zIndex: this.state.isUnfold[5] ? "1" : "0",
          }}
        ></div>
        <div
          className={componentStyle.seventh}
          style={{
            opacity: this.state.isUnfold[6] ? "1" : "0",
            zIndex: this.state.isUnfold[6] ? "1" : "0",
          }}
        ></div>
        <div
          className={componentStyle.eighth}
          style={{
            opacity: this.state.isUnfold[7] ? "1" : "0",
            zIndex: this.state.isUnfold[7] ? "1" : "0",
          }}
        ></div>
        <div
          className={componentStyle.select}
          style={{
            opacity: this.state.isUnfold.reduce((bool1, bool2) => {
              return bool1 || bool2;
            })
              ? "0"
              : "1",
            zIndex: this.state.isUnfold.reduce((bool1, bool2) => {
              return bool1 || bool2;
            })
              ? "0"
              : "1",
          }}
        >
          {this.content.map((value) => {
            return (
              <div
                key={value}
                onClick={(e) => {
                  this.unfold(e);
                }}
              >
                <span>{value}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  unfold = (e) => {
    switch (e.currentTarget.innerText) {
      case this.content[0]:
        this.setState({
          isUnfold: [true, false, false, false, false, false, false, false],
        });
        break;
      case this.content[1]:
        this.setState({
          isUnfold: [false, true, false, false, false, false, false, false],
        });
        break;
      case this.content[2]:
        this.setState({
          isUnfold: [false, false, true, false, false, false, false, false],
        });
        break;
      case this.content[3]:
        this.setState({
          isUnfold: [false, false, false, true, false, false, false, false],
        });
        break;
      case this.content[4]:
        this.setState({
          isUnfold: [false, false, false, false, true, false, false, false],
        });
        break;
      case this.content[5]:
        this.setState({
          isUnfold: [false, false, false, false, false, true, false, false],
        });
        break;
      case this.content[6]:
        this.setState({
          isUnfold: [false, false, false, false, false, false, true, false],
        });
        break;
      case this.content[7]:
        this.setState({
          isUnfold: [false, false, false, false, false, false, false, true],
        });
        break;
      default:
        break;
    }
  };
}
