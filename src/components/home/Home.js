import React, { Component } from 'react'
import './Home.css'
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <>
            <div id="homeBackground" >
            </div>
            <div>
                <h1 id="welcomeHomePageHeader">Welcome to Nutshell</h1>
                <h3 class="subHeader">View all your articles, messages, tasks, and events... <span id="subHeader">in a nutshell</span></h3>
                {localStorage.getItem("credentials") === null ? (
                <div id="loginButton">
                <Link to={`/login`}><button className="btn btn-primary" >Login</button></Link>
                </div>
                ) : null}
            </div>
            </>
        )
    }
}

export default Home;