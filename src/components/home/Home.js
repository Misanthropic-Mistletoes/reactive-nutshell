import React, { Component } from 'react'
import './Home.css'
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <>
                <h1>Welcome to Nutshell</h1>
                <img src={require('./squirrel.jpg')} alt="Squirrel" />
                <Link to={`/login`}><button>Login</button></Link>
            </>
        )
    }
}

export default Home;