import "./App.css";
import Title from "./component/Title";
import FirstPage from "./component/FirstPage";
import ClearBtn from "./component/ClearBtn";
import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNext: false };
  }

  render() {
    return (
      <div className="App">
        <div
          className="heading-primary"
          style={{
            top: this.state.showNext ? "2%" : "40%",
            fontSize: this.state.showNext ? "150%" : "250%",
          }}
        >
          <Title goAhead={this.goAhead} />
        </div>
        <div className="firstPage">
          <FirstPage showNext={this.state.showNext} />
        </div>
        <div className="clearBtn">
          <ClearBtn />
        </div>
      </div>
    );
  }

  goAhead = () => {
    this.setState({ showNext: true });
  };
}
