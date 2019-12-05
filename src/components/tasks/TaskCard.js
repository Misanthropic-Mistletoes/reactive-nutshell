import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class TaskCard extends Component {
    
    updateTaskStatus = evt => {
      const editedTaskId = this.props.task.id
      evt.preventDefault()
      const editedTask = {
        completed: evt.target.checked,
        id: editedTaskId
      };
      
      ApiManager.patch("tasks", editedTask)   
      .then(this.props.getAllTasks)
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
          <input type="checkbox" name="taskComplete" checked={this.props.task.completed} onChange={this.updateTaskStatus}/>
          <hr />
        </div>
      </div>
    );
  }
}

export default TaskCard;