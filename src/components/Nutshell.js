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

  // Check if credentials are in local storage
  //returns true/false
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


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// PUT LOGOUT CLEARUSER() IN THIS FOLDER

// import React, { Component } from "react"
// import NavBar from "./nav/NavBar"
// import ApplicationViews from "./ApplicationViews"
// import "./Kennel.css"

// class Kennel extends Component {
  
//   state = {
//     user: false
//   }

//   // Check if credentials are in local storage
//   // Returns true/false
//   // Want NavBar and App Views to be dependent on logged in user
//   isAuthenticated = () => localStorage.getItem("credentials") !== null

//   setUser = (authObj) => {
//     /*
//       For now, just store the email and password that
//       the customer enters into local storage.
//     */
//     localStorage.setItem(
//       "credentials",
//       JSON.stringify(authObj)
//     )
//     this.setState({
    
//         user: this.isAuthenticated()
      
//     });
//   }

//   clearUser = () =>  {
//     localStorage.removeItem("credentials")
//     this.setState({user: this.isAuthenticated()})
//   }

//   componenetDidMount() {

//     this.setState({
//       user: this.isAuthenticated()
//     })

//   }

//   componentWillMount() {
//     this.setState({
//       user: this.isAuthenticated()
//     })
//   }

//   render() {
//     return (
//       <>

//         {/* Want NavBar and App Views to be dependent on logged in user */}

//         {/* value of user in state is passed as props to the NavBar  */}
//         <NavBar user={this.state.user} clearUser={this.clearUser} />
//         {/* gets the value as well as the set user method which it passes onto the login component */}
//         <ApplicationViews user={this.state.user} setUser={this.setUser} />
//       </>
//     )
//   }
// }

// export default Kennel
