import React, { Component, Fragment } from "react";
import Hoc from "./Hoc";
import View from "./View";
import "./App.css";

class App extends Component {
  state = {
    active: true,
    active1: true
  };

  componentDidMount() {
    // setting a timeout to unmount a children
    setTimeout(() => {
      this.setState({
        active: false
      });
    }, 10000);

    setTimeout(() => {
      this.setState({
        active1: false
      });
    }, 15000);
  }
  render() {
    return (
      <Fragment>
        {/* forcing to unmount a children after 5s */}
        <Hoc>
          <View data="one" />
          {this.state.active && <View data="two" />}
          {this.state.active1 && <View data="threee" />}
        </Hoc>
      </Fragment>
    );
  }
}

export default App;
