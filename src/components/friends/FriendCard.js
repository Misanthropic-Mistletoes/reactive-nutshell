// author:  Caroline Brownlee

// This Component Returns JSX for A Single Friend
// Renders in FriendsList.js

import React, { Component } from 'react'
// import './FriendsStyles/FriendsList.css';

class FriendCard extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="friendCard">
        <div className="friendCard-content">
          <p><strong>{this.props.friend.user.name}</strong></p>
          <hr />
        </div>
      </div>

    );
  }
}

export default FriendCard;

// DELETE AND EDIT BUTTON EXAMPLES... ADD LATER //
{/* <button type="button" onClick={() => this.props.deleteEvent(this.props.event.id)}>Delete</button>
<button type="button" onClick={() => { this.props.history.push(`/events/${this.props.event.id}/edit`) }}>Edit</button> */}