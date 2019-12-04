// This component will populate the input fields with the current values from the API. We will obtain the animal details via a fetch call in componentDidMount.

// Component loads - Save button should be disabled since the data is not available yet..
// componentDidMount() calls API to get the animal based on the animalId in the URL.
// Data loads and setState() is invoked with new data (also set loadingStatus to false)
// render() is invoked, displaying animal details and ready for edits.
// Make changes. As changes are made, state is updated. Select save.
// The updateExistingAnimal method will setState loadingStatus to true - this ensures the user cannot repeatedly click button while API is being updated.
// Invoke AnimalManger.put to change the API data.
// Once the API has updated, change the view to display all the animals.

import React, { Component } from 'react';
import EventsAPIManager from './EventsAPIManager';
import ApiManager from '../modules/ApiManager';

class EventForm extends Component {
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

    // function that updates existing event
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
        // fetch call to update event object in database
        ApiManager.update(editedAnimal)
        .then(() => this.props.history.push("/animals"))
      }

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