import React from "react";
import Title from "./component/Title";
import ArrowBtn from "./component/ArrowBtn";
import componentStyle from "./index.module.css";

export default class FirstPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNext: false };
  }
  render() {
    return (
      <div className={componentStyle.container}>
        {/* <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */}
        <Title showNext={this.state.showNext} goAhead={this.goAhead} />
      </div>
    );
  }

  goAhead = () => {
    this.setState({ showNext: true });
  };
}
