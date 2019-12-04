import React, { Component } from "react"
import TasksAPIManager from "./TasksAPIManager"

class TaskEditForm extends Component {
    state = {
        taskName: "",
        dueDate: "",
        loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {};
      stateToChange[evt.target.id] = evt.target.value;
      this.setState(stateToChange);
    };

    updateExistingTask = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedTask = {
        id: this.props.match.params.taskId,
        name: this.state.taskName,
        dueDate: this.state.dueDate,
      };

      TasksAPIManager.update(editedTask)
      .then(() => this.props.history.push("/tasks"))
    }

    componentDidMount() {
      TasksAPIManager.get(this.props.match.params.taskId)
      .then(task => {
        this.setState({
          taskName: task.name,
          dueDate: task.dueDate,
          loadingStatus: false,
        });
      });

    // TasksAPIManager.getAll("tasks")
    // .then(tasks => this.setState({tasks: tasks}))
  }

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
                <label htmlFor="taskName">Task Name</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="taskName"
                value={this.state.taskName}
              />

                <label htmlFor="dueDate">Due Date</label>
              <input
                type="date"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="dueDate"
                value={this.state.dueDate}
              />
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingTask}
                className="btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default TaskEditForm