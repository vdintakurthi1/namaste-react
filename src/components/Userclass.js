import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 2,
    };
  }

  render() {
    const { name, location } = this.props;

    return (
      <div className="user-card">
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Updated Count
        </button>
        <div>count : {this.state.count}</div>
        <div>Name: {name}</div>
        <div>Location: {location} </div>
      </div>
    );
  }
}

export default Userclass;
