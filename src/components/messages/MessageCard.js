import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MessageCard extends Component {
    render() {
        console.log("card this.props", this.props)
        const userId = localStorage.getItem("credentials")
        return (
            <div className="message-card">
                <div className="card-content">
                    <h5>{this.props.username}</h5>
                    <p>{this.props.message}</p>
                    <p>{this.props.timestamp}</p>
                </div>
                {userId === this.props.userId ? 
                <>
                <button type="button" className="btn btn-primary" onClick={() => {this.props.history.push(`/messages/${this.props.id}/edit`)}}>Edit</button>
                <button type="button" className="btn btn-primary" onClick={() => this.props.deleteMessage(this.props.id)}>Delete</button>
                </> : null }
            </div>
        )
    }
}

export default MessageCard