import React, { Component } from "react"
import ApiManager from "../modules/ApiManager"

class MessageEditForm extends Component {
    //set the initial state
    state = {
        message: "",
        loadingStatus: true
    };

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    };

    updateExistingOwner = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true })
        const editedMessage = {
            id: this.props.match.params.id,
            message: this.state.message
        }
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
                                onClick={this.updateExistingOwner}
                                className="btn btn-primary"
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </React.Fragment>
        )
    }

}