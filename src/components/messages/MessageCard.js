import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MessageCard extends Component {
    render() {
        return (
            <div className="message-card">
                <div className="card-content">
                    <h5>{this.props.username}</h5>
                    <p>{this.props.message}</p>
                    <p>{this.props.timestamp}</p>

                </div>
            </div>
        )
    }
}

export default MessageCard