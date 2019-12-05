import React, { Component } from "react"
import ApiManager from "../modules/ApiManager"

class MessageEditForm extends Component {
    //set the initial state
    state = {
        message: "",
        timestamp: "",
        loadingStatus: true
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };

    editMessage = evt => {
        const userId = localStorage.getItem("credentials")
        evt.preventDefault()
        this.setState({ loadingStatus: true })
        const editedMessage = {
            userId: userId,
            id: this.props.match.params.messageId,
            message: this.state.message,
            timestamp: this.state.timestamp
        }

        ApiManager.update("messages", editedMessage)
            .then(() => this.props.history.push("/messages"))
    }

    componentDidMount() {
        ApiManager.get("messages", this.props.match.params.messageId)
        .then(message => {
            this.setState({
                message: message.message,
                timestamp: message.timestamp,
                loadingStatus: false
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <input
                                type="text"
                                required
                                className="form-control"
                                onChange={this.handleFieldChange}
                                id="message"
                                value={this.state.message}
                            />
                        </div>
                        <div>
                        <button
                                type="button" disabled={this.state.loadingStatus}
                                onClick={this.editMessage}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }

}

export default MessageEditForm