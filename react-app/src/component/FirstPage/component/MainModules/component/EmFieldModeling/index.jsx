import React from "react";
import componentStyle from "./index.module.css";

export default class MultiphysicsNumericalAlgorithms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUnfold: [false, false],
    };
  }

  content = ["几何建模", "材料参数建模"];

  render() {
    return (
      <div className={componentStyle.container}>
        <div className={componentStyle.title}>复杂电磁场建模</div>
        <div
          className={componentStyle.first}
          style={{
            opacity: this.state.isUnfold[0] ? "1" : "0",
            zIndex: this.state.isUnfold[0] ? "1" : "0",
          }}
        >
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
          <hr
            className={componentStyle["hr-solid-content"]}
            data-content="电学参数"
          />
          <div className={componentStyle["input-container"]}>
            <div>
              <div>介电常数</div>
              <input />
            </div>
            <div>
              <div>电损耗正切</div>
              <input />
            </div>
            <div>
              <div>电导率</div>
              <input />
            </div>
            <div>
              <div>电阻率</div>
              <input />
            </div>
          </div>
          <hr
            className={componentStyle["hr-solid-content"]}
            data-content="磁学参数"
          />
          <div className={componentStyle["input-container"]}>
            <div>
              <div>磁导率</div>
              <input />
            </div>
            <div>
              <div>磁损耗正切</div>
              <input />
            </div>
            <div>
              <div>居里温度</div>
              <input />
            </div>
            <div>
              <div>温度系数</div>
              <input />
            </div>
          </div>
          <hr
            className={componentStyle["hr-solid-content"]}
            data-content="热学参数"
          />
          <div className={componentStyle["input-container"]}>
            <div>
              <div>热导率</div>
              <input />
            </div>
            <div>
              <div>比热容</div>
              <input />
            </div>
            <div>
              <div>熔点</div>
              <input />
            </div>
            <div>
              <div>热膨胀系数</div>
              <input />
            </div>
          </div>
          <hr
            className={componentStyle["hr-solid-content"]}
            data-content="力学参数"
          />
          <div className={componentStyle["input-container"]}>
            <div>
              <div>杨氏模量</div>
              <input />
            </div>
            <div>
              <div>强度</div>
              <input />
            </div>
            <div>
              <div>硬度</div>
              <input />
            </div>
            <div>
              <div>剪切弹性模型</div>
              <input />
            </div>
            <div>
              <div>屈服极限</div>
              <input />
            </div>
          </div>
          <hr
            className={componentStyle["hr-solid-content"]}
            data-content="声学参数"
          />
          <div className={componentStyle["input-container"]}>
            <div>
              <div>密度</div>
              <input />
            </div>
            <div>
              <div>切变弹性模型</div>
              <input />
            </div>
            <div>
              <div>杨氏弹性模型</div>
              <input />
            </div>
            <div>
              <div>泊松比</div>
              <input />
            </div>
            <div>
              <div>声阻抗</div>
              <input />
            </div>
            <div>
              <div>声速</div>
              <input />
            </div>
          </div>
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
          isUnfold: [true, false],
        });
        break;
      case this.content[1]:
        this.setState({
          isUnfold: [false, true],
        });
        break;
      default:
        break;
    }
  };

  fold = () => {
    this.setState({
      isUnfold: [false, false],
    });
  };
}
