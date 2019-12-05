import React, { Component } from 'react';

class TaskCard extends Component {
  state = {
    checked: false
  };
// This will change the state of 'checked' when user checks box
  onChange = (event) => {
    console.log("event", event.target.checked)
    this.setState(
      {checked: event.target.checked}
    );
  }

  render() {
    return (
        <div className="taskCard">
        <div className="card-content">
          <h1>Task Name: {this.props.task.name}</h1>
          <p>Due Date: {this.props.task.dueDate}</p>
          <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
          <button type="button" onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }}>Edit</button>
          <label htmlFor="taskComplete">Task Complete:</label>
          <input type="checkbox" name="taskComplete" onChange={this.onChange}/>
          <hr />
        </div>
      </div>
    );
  }
}

export default TaskCard;