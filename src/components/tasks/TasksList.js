// author:  Julian garcia
// This Module Handles Setting the State of Articles, Rendering List of Article Cards to the DOM, and Delete and Edit Functionality for A Single Article 
import React, { Component } from 'react'
import TaskCard from './TaskCard'
import './TasksStyles/TasksList.css';
import ApiManager from '../modules/ApiManager';
class TasksList extends Component {
    // defines what this component needs to render
    state = {
        tasks: [],
    }
    componentDidMount() {
        //getAll from ArticlesAPIManager, hangs on to that data, and puts it into state
        ApiManager.getAll("tasks")
            .then((tasks) => {
                this.setState({
                    tasks: tasks
                })
            })
    }
    deleteTask= id => {
        // handles deleting a single article from articles array and renders updated array to the DOM
        ApiManager.delete("tasks", id)
            .then(() => {
                ApiManager.getAll("tasks")
                    .then((updatedTasksList) => {
                        this.setState({
                            tasks: updatedTasksList
                        })
                    })
            })
    }
     handleInputChange(complete) {
        const target = complete.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    }
    
    render() {
        return (
            <>
                <h1>Tasks</h1>
                <section>
                    <button type="button"
                        className="newTaskButton"
                        // onClick renders articleForm.js 
                        onClick={() => { this.props.history.push("/tasks/new") }}>
                        New Task
                    </button>
                </section>
                <div className="taskList">
                    {/* array function that maps over articles array and renders a single card for each article */}
                    {this.state.tasks.map(task =>
                        <TaskCard
                        key={task.id}
                        task={task}
                        deleteTask={this.deleteTask}
                        {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}
export default TasksList;