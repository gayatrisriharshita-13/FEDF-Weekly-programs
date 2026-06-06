import React, { Component } from "react";

class Student extends Component {
  render() {
    return (
      <div>
        <h2>Student Details</h2>
        <p>Name: {this.props.name}</p>
        <p>Course: {this.props.course}</p>
      </div>
    );
  }
}

export default Student;