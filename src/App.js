import React, { Component } from "react";
import Hoc from "./Hoc";
import View from "./View";
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
      // forcing to unmount a children after 5s
      <Hoc>{this.state.active ? <View /> : null}</Hoc>
    );
  }
}

export default App;
