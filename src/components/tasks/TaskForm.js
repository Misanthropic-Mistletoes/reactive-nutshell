import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class TaskForm extends Component {
    state = {
        taskName: "",
        dueDate: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };
    /*  Local method for validation, set loadingStatus, create task      object, invoke the TaskManager post method, and redirect to the full task list
    */
    constructNewTask = evt => {
        const userId = localStorage.getItem("credentials")
        evt.preventDefault();
        if (this.state.taskName === "" || this.state.dueDate === "") {
            window.alert("Please input a F***ing Due Date!");
        } else {
            this.setState({ loadingStatus: true });
            const task = {
                name: this.state.taskName,
                dueDate: this.state.dueDate,
                completed: false,
                userId: Number(userId)
            }
            // Create the task and redirect user to task list
            
           return  ApiManager.post("tasks", task)
            .then(() => this.props.history.push("/tasks"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="taskName">Task Name:</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="taskName"
                        placeholder="Task Name"
                        />
                        <label htmlFor="dueDate">Due Date:</label>
                        <input
                        type="date"
                        required
                        onChange={this.handleFieldChange}
                        id="dueDate"
                        placeholder="Due Date"
                        />
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewTask}
                        >Save</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default TaskForm