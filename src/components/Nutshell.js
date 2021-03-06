import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";
import ApiManager from "./modules/ApiManager";

class Nutshell extends Component {
  // user doesn't exist by default
  state = {
    user: false
  }

  // isAuthenticated checks if credentials are in local storage
  // returns true/false
  isAuthenticated = () => localStorage.getItem("credentials") !== null

  setUser = (results) => {
    localStorage.setItem("credentials", results[0].id)
    this.setState({
      user: this.isAuthenticated()
    });
  }

  clearUser = () =>  {
    localStorage.removeItem("credentials")
    this.setState({user: this.isAuthenticated()})
  }

  componentDidMount(){
    this.setState({
      user: this.isAuthenticated()
    })
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews user={this.state.user}
                          setUser={this.setUser} 
                          handleLogin={this.handleLogin}/>
      </React.Fragment>
    );
  }
}

export default Nutshell;