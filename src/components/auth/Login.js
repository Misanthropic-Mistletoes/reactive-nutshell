import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class Login extends Component {

    // Set initial state
    state = {
        email: "",
        password: "",
        confirmPassword: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }


    handleLogin = e => {
    e.preventDefault()
    ApiManager.checkUser(this.state.email, this.state.password)
    .then(results=>{
        if(results.length>0) {
<<<<<<< HEAD
            localStorage.setItem("credentials", results[0].id)
            this.props.history.push("/events")
=======
            this.props.setUser(results)
            this.props.history.push("/events");
>>>>>>> master
        } else {
            alert("Incorrect username, email, or password")
        } 
    })
}


    render() {
        console.log(this.props)
        return (
            <div className="login-card">
                <form onSubmit={this.handleLogin}>
                    <div>
                        <fieldset>
                            <h3>Please sign in</h3>
                            <div className="formgrid">
                                <label htmlFor="inputEmail">Email: </label>
                                <input onChange={this.handleFieldChange} type="email"
                                    id="email"
                                    placeholder="Email address"
                                    required="" autoFocus="" />

                                <label htmlFor="inputPassword">Password: </label>
                                <input className="inputs" onChange={this.handleFieldChange} type="password"
                                    id="password"
                                    placeholder="Password"
                                    required="" />

                                <label htmlFor="inputConfirmPassword">Confirm Password: </label>
                                <input className="inputs" onChange={this.handleFieldChange} type="password"
                                    id="confirmPassword"
                                    placeholder="Confirm Password"
                                    required="" />

                            </div>
                            <button type="submit">
                                Sign in
                    </button>
                        </fieldset>
                    </div>
                </form>
            </div>
        )
    }


}

export default Login;

// import React, { Component } from "react"
// import AdminManager from "../../modules/AdminManager";
// import './Login.css'

// class Login extends Component {

//     // Set initial state
//     state = {
//         username: "",
//         email: "",
//         password: ""
//     }

//     // Update state whenever an input field is edited
//     handleFieldChange = (evt) => {
//         const stateToChange = {}
//         stateToChange[evt.target.id] = evt.target.value
//         this.setState(stateToChange)
//     }

//     handleLogin = (e) => {
//         e.preventDefault()
//         AdminManager.checkAdmin(this.state.username, this.state.email, this.state.password)
//         .then(results=>{
//             if(results.length>0) {
//                 sessionStorage.setItem("credentials", results[0].id)
//                 this.props.history.push("/");
//             } else {
//                 alert("Incorrect username, email, or password")
//             } 
//         })
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleLogin}>
//                 <fieldset>
//                     <h3>Please Login</h3>
//                     <div className="formgrid">
//                         <label htmlFor="inputUsername">Username</label>
//                         <input onChange={this.handleFieldChange} type="username"
//                             id="username"
//                             placeholder="Username"
//                             required="" autoFocus="" />

//                         <label htmlFor="inputEmail">Email address</label>
//                         <input onChange={this.handleFieldChange} type="email"
//                             id="email"
//                             placeholder="Email address"
//                             required="" autoFocus="" />

//                         <label htmlFor="inputPassword">Password</label>
//                         <input onChange={this.handleFieldChange} type="password"
//                             id="password"
//                             placeholder="Password"
//                             required="" />
//                     </div>

//                     <button type="submit">
//                         Login
//                     </button>
//                 </fieldset>
//             </form>
//         )
//     }
// }


// export default Login