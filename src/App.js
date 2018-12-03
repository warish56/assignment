import React, { Component, Fragment } from "react";
import Hoc from "./Hoc";
import View from "./View";
import View2 from "./View2";
import "./App.css";

class App extends Component {
  state = {
    active: true
  };

  componentDidMount() {
    // setting a timeout to unmount a children
    setTimeout(() => {
      this.setState({
        active: false
      });
    }, 5000);
  }
  render() {
    return (
      <Fragment>
        {/* forcing to unmount a children after 5s */}
        <Hoc>{this.state.active ? <View /> : null}</Hoc>
        <Hoc>{this.state.active ? <View2 /> : null}</Hoc>
      </Fragment>
    );
  }
}

export default App;
