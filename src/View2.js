import React from "react";

class View2 extends React.Component {
  render() {
    const { count } = this.props[0];
    console.log(this.props);
    return (
      <div>
        <h1>I am a children</h1>
        <h2>and i have elapsed {count * 2}s in real world</h2>
      </div>
    );
  }
}

export default View2;
