import React, { Component } from 'react'
import './Home.css'
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <>
                <h1 id="welcomeHomePageHeader">Welcome to Nutshell</h1>
                <div id="loginButton">
                <Link to={`/login`}><button className="btn btn-primary" >Login</button></Link>
                </div>
            </>
        )
    }
}

export default Home;