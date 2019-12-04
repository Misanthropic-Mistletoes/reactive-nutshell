import React, { Component } from 'react';

class TaskCard extends Component {
  render() {
    return (
        <div className="taskCard">
        <div className="card-content">
          <h1>Task Name: {this.props.task.name}</h1>
          <p>Due Date: {this.props.task.dueDate}</p>
          <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
          <button type="button" onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }}>Edit</button>
          <hr />
        </div>
      </div>
    );
  }
}

export default TaskCard;