// author:  Julian garcia
// This Module Handles Setting the State of Articles, Rendering List of Article Cards to the DOM, and Delete and Edit Functionality for A Single Article 
import React, { Component } from 'react'
import TaskCard from './TaskCard'
import TasksAPIManager from './TasksAPIManager'
import './TasksStyles/TasksList.css';
class TasksList extends Component {
    // defines what this component needs to render
    state = {
        tasks: [],
    }
    componentDidMount() {
        //getAll from ArticlesAPIManager, hangs on to that data, and puts it into state
        TasksAPIManager.getAll()
            .then((tasks) => {
                this.setState({
                    tasks: tasks
                })
            })
    }
    deleteTask= id => {
        // handles deleting a single article from articles array and renders updated array to the DOM
        TasksAPIManager.delete(id)
            .then(() => {
                TasksAPIManager.getAll()
                    .then((updatedTasksList) => {
                        this.setState({
                            tasks: updatedTasksList
                        })
                    })
            })
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
                        />
                    )}
                </div>
            </>
        )
    }
}
export default TasksList;