// author:  Caroline Brownlee

// This Module Returns JSX for A Single Event
// Functionality in EventsList.js

import React, { Component } from 'react'
import './EventsStyles/EventsList.css';

class EventCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="eventCard">
        <div className="card-content">
          <p>Title: {this.props.event.title}</p>
          <p>Date and Time: {this.props.event.dateTime}</p>
          <p>Location: {this.props.event.location}</p>
          <button type="button" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
          <button type="button" onClick={() => { this.props.history.push(`/events/${this.props.event.id}/edit`) }}>Edit</button>
          <hr />
        </div>
      </div>

    );
  }
}

export default EventCard;
