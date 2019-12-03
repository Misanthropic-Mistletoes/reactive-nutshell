import React, { Component } from 'react';
import EventsAPIManager from './EventsAPIManager';

class EventForm extends Component {
    // defines the key values for a single event
    state = {
        title: "",
        location: "",
        dateTime: "",
        loadingStatus: false,
    };

    // sets the state of events by reading input values on form
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    // function that constructs a new event and sets state 
    constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.title === "" || this.state.location === ""
            // || this.state.dateTime === ""
        ) {
            window.alert("Please complete all fields.");
        } else {
            this.setState({ loadingStatus: true });
            const event = {
                title: this.state.title,
                location: this.state.location,
                // dateTime: this.state.dateTime
            }
            return EventsAPIManager.post(event)
                .then(() => this.props.history.push('/events'));
        }
    }

    render() {

        return (
            <>
                <form>
                    <fieldset>
                        <div className="formgrid">
                            <label htmlFor="title">Title: </label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="title"
                                placeholder="Title"
                            />
                            <label htmlFor="location">Location: </label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="location"
                                placeholder="Location"
                            />
                            {/* <label htmlFor="dateTime">Date and Time: </label>
                            <input
                                type="text"
                                placeholder="Date and Time"
                                onChange={this.handleFieldChange}
                            /> */}
                        </div>
                        <div className="eventSubmitButton">
                            <button
                                type="button"
                                disabled={this.state.loadingStatus}
                                onClick={this.constructNewEvent}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EventForm;