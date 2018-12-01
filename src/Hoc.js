import React from "react";

class HOC extends React.Component {
  state = {
    count: 0,
    listner: ""
  };

  componentDidMount() {
    // creating a interval
    const a = setInterval(() => {
      // Checking If Children is present Or Not
      if (React.Children.count(this.props.children) > 0) {
        // If present updating the counter
        this.setState({
          count: this.state.count + 1
        });
      } else {
        // else clearing the interval
        clearInterval(this.state.listner);
      }
    }, 500);

    // storing the listner in the state
    this.setState({
      listner: a
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        {this.props.children}
        {React.Children.count(this.props.children) === 0 && (
          <h1>Children Unmounted</h1>
        )}
      </div>
    );
  }
}

export default HOC;
