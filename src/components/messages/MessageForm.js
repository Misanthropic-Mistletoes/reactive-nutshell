// This file renders the New Message form on the DOM.
// Author: Sam Pita

import React, { Component } from 'react';

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
    }

    render(){
        return (
            <>
            <form>
                <fieldset>
                    <div>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="name"
                            placeholder="Name"
                        />

                        <label htmlFor="message">
                            Message
                        </label>
                        <input
                            type="text"
                            required
                            onChange={this.handleFieldChange}
                            id="message"
                            placeholder="Your message"
                        />


                    </div>
                </fieldset>
            </form>
            </>
        )
    }
}

export default MessageForm