import React from "react";

class HOC extends React.Component {
  state = {
    intervals: {},
    children: {}
  };

  startTimer = async (id,cb) => {
    await this.setState({
      intervals: { ...this.state.intervals, [id]: { value: 0 } }
    });
    const newTimer = setInterval(() => {
      if (this.state.children[id]) {
        const newChild = { ...this.state.intervals[id] };
        newChild.value += 1;

        const newInterval = { ...this.state.intervals };
        newInterval[id] = newChild;
        this.setState({
          intervals: newInterval
        });
      } else this.clearTheTimer(id);

      cb()
    }, 1000);

    this.setState({
      intervals: {
        ...this.state.intervals,
        [id]: { ...this.state.intervals[id], timer: newTimer }
      }
    });
  };

  clearTheTimer = id => {
    if (this.state.intervals[id]) {
      clearInterval(this.state.intervals[id].timer);
      console.log("timer cleared from ", id);
      console.log(this.state.intervals);
    }
  };

  activateChild = id => {
    this.setState({
      children: { ...this.state.children, [id]: true }
    });
  };

  componentDidMount() {
    let newChildren = {};
    React.Children.toArray(this.props.children).forEach(child => {
      newChildren = { ...newChildren, [child.key]: true };
    });
    this.setState({
      children: newChildren
    });
  }

  async componentDidUpdate(prevProps) {
    if (
      React.Children.toArray(prevProps.children).length !==
      React.Children.toArray(this.props.children).length
    ) {
      await this.setState({
        children: {}
      });
      React.Children.toArray(this.props.children).forEach(child => {
        this.activateChild(child.key);
      });
    }
  }

  render() {
    return (
      <div>
        {React.Children.toArray(this.props.children).map(child => {
          return React.cloneElement(child, [
            {
              id: child.key,
              startTimer: this.startTimer,
              value: this.state.intervals[child.key]
                ? this.state.intervals[child.key].value
                : 0,
              ...this.props
            }
          ]);
        })}
      </div>
    );
  }
}

export default HOC;
