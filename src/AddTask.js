import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello!'
    };
  }
  addClick = () => {
    alert(this.state.message);
  }
  render() {
    return (
      <div className="field">
        <div className="addTask">
          <h3 className="addTask__title">Add Task</h3>
          <button onClick={this.addClick} className="addTask__button addTask__button--add">Add</button>
        </div>
      </div>
    );
  }
}

export default AddTask;
