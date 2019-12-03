import React, { Component } from 'react';

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


    handleLogin = (e) => {
    e.preventDefault()
        if (this.state.password === this.state.confirmPassword){

            this.props.setUser({
                email: this.state.email,
                password: this.state.password
            })
            // change events to home page as we get further
            this.props.history.push("/events");
        } else {
            window.alert("Your passwordz must match 🙃")
        }

    }

      render() {
          
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

export default Login