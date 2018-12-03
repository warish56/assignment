import React from "react";

class View extends React.Component {
  startTimer = () => {
    this.props[0].startTimer(this.props[0].id);
  };
  render() {
    const { value } = this.props[0];
    return (
      <div>
        <h1>I am {this.props.data} </h1>
        <h2>and i have elapsed {value}s in real world</h2>
        <button type="button" onClick={this.startTimer}>
          Start
        </button>
      </div>
    );
  }
}

export default View;
