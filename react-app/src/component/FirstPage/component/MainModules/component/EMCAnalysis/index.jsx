import React from "react";
import componentStyle from "./index.module.css";

export default class MultiphysicsNumericalAlgorithms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUnfold: [false, false, false, false],
    };
  }

  content = ["瞬态辐射干扰", "瞬态传导干扰", "电磁干扰评估", "信号完整性评估"];

  render() {
    return (
      <div className={componentStyle.container}>
        <div className={componentStyle.title}>非周期瞬态系统EMC分析</div>
        <div
          className={componentStyle.first}
          style={{
            opacity: this.state.isUnfold[0] ? "1" : "0",
            zIndex: this.state.isUnfold[0] ? "1" : "0",
          }}
        >
          <div>浪涌电压</div>
          <input />
          <br />
          <div>浪涌电流</div>
          <input />
          <br />
          <div>串扰</div>
          <input />
          <br />
          <button>前进</button>
          <button
            onClick={() => {
              this.fold();
            }}
          >
            返回
          </button>
        </div>
        <div
          className={componentStyle.second}
          style={{
            opacity: this.state.isUnfold[1] ? "1" : "0",
            zIndex: this.state.isUnfold[1] ? "1" : "0",
          }}
        >
          <div>浪涌电压</div>
          <input />
          <br />
          <div>浪涌电流</div>
          <input />
          <br />
          <div>串扰</div>
          <input />
          <br />
          <button>前进</button>
          <button
            onClick={() => {
              this.fold();
            }}
          >
            返回
          </button>
        </div>
        <div
          className={componentStyle.third}
          style={{
            opacity: this.state.isUnfold[2] ? "1" : "0",
            zIndex: this.state.isUnfold[2] ? "1" : "0",
          }}
        >
          <div>频谱</div>
          <input />
          <br />
          <div>幅值</div>
          <input />
          <br />
          <div>干扰阈值</div>
          <input />
          <br />
          <button>前进</button>
          <button
            onClick={() => {
              this.fold();
            }}
          >
            返回
          </button>
        </div>
        <div
          className={componentStyle.forth}
          style={{
            opacity: this.state.isUnfold[3] ? "1" : "0",
            zIndex: this.state.isUnfold[3] ? "1" : "0",
          }}
        >
          <div>延迟</div>
          <input />
          <br />
          <div>衰减</div>
          <input />
          <br />
          <div>畸变</div>
          <input />
          <br />
          <button>前进</button>
          <button
            onClick={() => {
              this.fold();
            }}
          >
            返回
          </button>
        </div>
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
          isUnfold: [true, false, false, false],
        });
        break;
      case this.content[1]:
        this.setState({
          isUnfold: [false, true, false, false],
        });
        break;
      case this.content[2]:
        this.setState({
          isUnfold: [false, false, true, false],
        });
        break;
      case this.content[3]:
        this.setState({
          isUnfold: [false, false, false, true],
        });
        break;
      default:
        break;
    }
  };

  fold = () => {
    this.setState({
      isUnfold: [false, false, false, false],
    });
  };
}
