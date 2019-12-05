// author:  Caroline Brownlee

// This Module Returns JSX for A Single Event
// Renders in EventsList.js

import React, { Component } from 'react'
import './EventsStyles/EventsList.css';

class EventCard extends Component {
  render() {
    return (
      <div className="eventCard">
        <div className="card-content">
          <p><u><strong>{this.props.event.title}</strong></u></p>
          <p>{this.props.event.location}</p>
          <p>{this.props.event.date}</p>
          <button type="button" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
          <button type="button" onClick={() => { this.props.history.push(`/events/${this.props.event.id}/edit`) }}>Edit</button>
          <hr />
        </div>
      </div>
    );
  }
}

export default EventCard;
