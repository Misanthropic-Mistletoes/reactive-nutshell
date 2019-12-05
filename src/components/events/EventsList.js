// author:  Caroline Brownlee
// This Module Handles Setting the State of Events, Rendering List of Event Cards to the DOM, and Delete and Edit Functionality for A Single Event 

import React, { Component } from 'react'
import EventCard from './EventCard'
import './EventsStyles/EventsList.css';
import ApiManager from '../modules/ApiManager';

const userId = localStorage.getItem("credentials")
console.log(userId)

class EventsList extends Component {
    // defines what this component needs to render
    state = {
        events: [],
    }

    componentDidMount() {
        //getAll from ApiManager, hangs on to that data, and puts it into state
        ApiManager.getAllforLoggedInUser(userId, "events")
            .then((events) => {
                events.sort((a,b) => new Date(...a.date.split('/').reverse()) - new Date(...b.date.split('/').reverse()));
                this.setState({
                    events: events
                })
            })
    }
    
    deleteEvent = id => {
        // handles deleting a single event from events array and renders updated array to the DOM
        ApiManager.delete("events", id)
            .then(() => {
                ApiManager.getAllforLoggedInUser(userId, "events")
                    .then((updatedEventsList) => {
                        updatedEventsList.sort((a,b) => new Date(...a.date.split('/').reverse()) - new Date(...b.date.split('/').reverse()))
                        this.setState({
                            events: updatedEventsList
                        })
                    })
            })
    }

    render() {
        return (
            <>
                <h1>Events</h1>
                <section>
                    <button type="button"
                        className="newEventButton"
                        // onClick renders eventForm.js 
                        onClick={() => { this.props.history.push("/events/new") }}>
                        Add A New Event
                    </button>
                </section>
                <div className="eventsList">
                    {/* array method that maps over events array and renders a single card for each event */}
                    {this.state.events.map(event =>
                        <EventCard
                            key={event.id}
                            event={event}
                            deleteEvent={this.deleteEvent}
                            // The router props need to be passed through <EventsList> to <EventCard> component. Spread operator copies properties from a provided object onto a new object.
                            {...this.props}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default EventsList;
