import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';
import './TasksStyles/TaskCard.css'

class TaskCard extends Component {
  state = {
    completed: "",
}
    
    updateTaskStatus = evt => {
      const userId = localStorage.getItem("credentials")
      const editedTaskId = this.props.task.id
      evt.preventDefault()
      const editedTask = {
        completed: evt.target.checked,
        id: editedTaskId
      };
      
      ApiManager.patch("tasks", editedTask)   
      .then(() => ApiManager.getAllOnlyForUser("tasks", userId))
    }

  render() {
    return (
        <div className="taskCard">
        <div className="card-content">
          <div id="checkboxContainer">
            <input type="checkbox" id="taskCheckbox" name="taskComplete" checked={this.props.task.completed} onChange={this.updateTaskStatus}/>
          </div>
          <h3>Task Name: {this.props.task.name}</h3>
          <p>Due Date: {this.props.task.dueDate}</p>
          <button type="button" onClick={() => this.props.deleteTask(this.props.task.id)}>Delete</button>
          <button type="button" onClick={() => { this.props.history.push(`/tasks/${this.props.task.id}/edit`) }}>Edit</button>
        </div>
      </div>
    );
  }
}

export default TaskCard;