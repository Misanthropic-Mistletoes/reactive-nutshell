import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MessageCard extends Component {
    render() {
        console.log("card this.props", this.props)
        return (
            <div className="message-card">
                <div className="card-content">
                    <h5>{this.props.username}</h5>
                    <p>{this.props.message}</p>
                    <p>{this.props.timestamp}</p>
                </div>
                <button type="button" onClick={() => this.props.deleteMessage(this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default MessageCard