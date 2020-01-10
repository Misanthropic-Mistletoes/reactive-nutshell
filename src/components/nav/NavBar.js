import React, { Component } from "react"
import { Link } from "react-router-dom"
import Acorn from "../images/acorn.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar text-white flex-md-nowrap p-0 shadow" id="navbar">
                <ul className="nav nav-pills nav-fill" id="navFlex">
                    <li>
                        <Link to={`/`}><img src={Acorn} alt="nutshell logo" id="acorn-logo"></img></Link></li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/articles">Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/friends">Friends</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/messages">Messages</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tasks">Tasks</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/events">Events</Link>
                    </li>
                </ul>
                <span className="navbar-text">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </ul>
                </span>
            </nav>
        )
    }
}

export default NavBar
