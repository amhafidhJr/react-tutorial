import React, { Component } from "react";

class Counter extends Component {
//   state = {
//     value: this.props.counter.value,
//     tags: ["tag1", "tag2", "tag3"],
//   };
 
//   handleIncrement = () => {
//     // console.log("Incriment clicked", this);
//     // console.log(product);
//     this.setState({ value: this.state.value + 1 });
//   };

  render() {
    console.log("props", this.props);
    return (
        
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increments
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "m-2 badge ";
    classes += this.props.counter.value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
