// import React, { Component } from "react"
// import APIManager from "../modules/ApiManager"

// class TaskEditForm extends Component {
   
//     state = {
//       taskName: "",
//       dueDate: "",
//     loadingStatus: true,
//     };

//     handleFieldChange = evt => {
//       const stateToChange = {}
//       stateToChange[evt.target.id] = evt.target.value
//       this.setState(stateToChange)
//     }

//     updateExistingTask = evt => {
//       evt.preventDefault()
//       this.setState({ loadingStatus: true });
//       const editedTask = {
//         id: this.props.match.params.taskId,
//         name: this.state.taskName,
//         date: this.state.dueDate,
//         userId: Number(this.state.userId)
//       };

//       APIManager.update("tasks", editedTask)
//       .then(() => this.props.history.push("/tasks"))
//     }

//     componentDidMount() {
//       APIManager.get("tasks", this.props.match.params.taskId)
//       .then(task => {
//         this.setState({
//           taskName: task.name,
//           dueDate: animal.dueDate,
//           userId: task.userId,
//           loadingStatus: false,
//         });
//       });

//     APIManager.getAll("tasks")
//     .then(tasks => this.setState({tasks: tasks}))
//   }

//     render() {
//       return (
//         <>
//         <form>
//           <fieldset>
//             <div className="formgrid">
//               <input
//                 type="text"
//                 required
//                 className="form-control"
//                 onChange={this.handleFieldChange}
//                 id="taskName"
//                 value={this.state.taskName}
//               />
//               <label htmlFor="taskName">Task Name</label>

//               <input
//                 type="text"
//                 required
//                 className="form-control"
//                 onChange={this.handleFieldChange}
//                 id="dueDate"
//                 value={this.state.dueDate}
//               />
//               <label htmlFor="dueDate">Due Date</label>

//               <select
//                 className="form-control"
//                 id="userId"
//                 value={this.state.userId}
//                 onChange={this.handleFieldChange}
//               >
//                 {this.state.user.map(user =>
//                   <option key={user.id} value={user.id}>
//                     {user.name}
//                   </option>
//                 )}
//               </select>
//             </div>
//             <div className="alignRight">
//               <button
//                 type="button" disabled={this.state.loadingStatus}
//                 onClick={this.updateExistingTask}
//                 className="btn btn-primary"
//               >Submit</button>
//             </div>
//           </fieldset>
//         </form>
//       </>
//     );
//   }
// }

// export default TaskEditForm