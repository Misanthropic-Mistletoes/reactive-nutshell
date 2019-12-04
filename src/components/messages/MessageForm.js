// This file renders the New Message form on the DOM.
// Author: Sam Pita

import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class MessageForm extends Component {
    // declare state for every single input field
    state = {
        name: "",
        message: "",
        timestamp: "",
        loadingStatus: false,
    };

    componentDidMount() {
        ApiManager.getAll("messages").then(messagesArray => this.setState({
            messages: messagesArray,
            messageId: messagesArray[0].id
        }))
    };
    
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        //the below function updates the state with every key press:
        this.setState(stateToChange);
    };
    

    refreshPage() {
        window.location.reload(false);
    }


    constructNewMessage = evt => {
        const userId = localStorage.getItem("credentials")
        const d = Date(Date.now());
        const dateTime = d.toString()

        evt.preventDefault();
        if (this.state.message === "") {
                window.alert("Please input a message")
            } else {
                //disable the button while the Post request is running:
                this.setState({ loadingStatus: true });
                const message = {
                    userId: userId,
                    message: this.state.message,
                    timestamp: dateTime
                }
                console.log("message", message)

                ApiManager.post("messages", message)
                .then(() => this.props.history.push("/messages"));
                //^ reload Messages list after post request is done
            }
    };

    render(){
        return (
            <>
            <form>
                <fieldset>
                    <div>
                        <textarea
                            type="text"
                            required
                            rows="8"
                            cols="50"
                            onChange={this.handleFieldChange}
                            id="message"
                            placeholder="Write your message here..."
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            disabled={this.state.loadingStatus}
                            onClick={this.constructNewMessage}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default MessageForm