// This component will populate the input fields with the current values from the API. We will obtain the event details via a fetch call in componentDidMount.

// author: Caroline Brownlee //

import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';

class EventEditForm extends Component {
    // set the initial state
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

    // updateExistingEvent method will setState loadingStatus to true - this ensures the user cannot repeatedly click button while API is being updated
    // This method will take the updated event as an object and save to the database.
    updateExistingEvent = evt => {
        evt.preventDefault()
        this.setState({ loadingStatus: true });
        // grabs current key values and puts them onto the form
        const editedEvent = {
          id: this.props.match.params.eventId,
          title: this.state.title,
          location: this.state.location,
        //   dateTime: this.state.dateTime
        };
        // fetch call to change data in API
        ApiManager.update("events", editedEvent)
        .then(() => this.props.history.push("/events"))
      }

    //  function calls to API to get event based on the eventId in the URL
      componentDidMount() {
        // Data loads and setState() is invoked with new data (also set loadingStatus to false)
        ApiManager.get("events", this.props.match.params.eventId)
        .then(event => {
            console.log(event)
            this.setState({
              title: event.title,
              location: event.location,
              loadingStatus: false,
            });
        });
      }

    //   render() is invoked, displaying event details and ready for editing
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
                                // value puts the data into the form field
                                value={this.state.title}
                            />
                            <label htmlFor="location">Location: </label>
                            <input
                                type="text"
                                required
                                onChange={this.handleFieldChange}
                                id="location"
                                placeholder="Location"
                                // value puts the data into the form field
                                value={this.state.location}
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
                                onClick={this.updateExistingEvent}
                            >Submit</button>
                        </div>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default EventEditForm;