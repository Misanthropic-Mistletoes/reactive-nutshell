// author:  Caroline Brownlee

// This Module Returns JSX for A Single Event
// Functionality in EventsList.js

import React, { Component } from 'react'
// import '../EventsStyles/EventCard.css'

class EventCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="card">
        <div className="card-content">
          <h3>{this.props.event.title}</h3>
          <p>{this.props.event.dateTime}</p>
          <p>{this.props.event.location}</p>
        </div>
      </div>
    );
  }
}

export default EventCard;

// edit and delete button examples: 
// <button type="button" onClick={() => this.props.deleteOwner(this.props.owner.id)}>Get Outta Here</button>
// <button type="button" onClick={() => { this.props.history.push(`/owners/${this.props.animal.id}/edit`) }}>Edit</button>
