// author:  Caroline Brownlee
// This Module Handles Setting the State of Events, Rendering List of Event Cards to the DOM, and Delete and Edit Functionality for A Single Event 

import React, { Component } from 'react'
import FriendCard from './FriendCard'
// import './FriendsStyles/FriendsList.css';
import ApiManager from '../modules/ApiManager';


class FriendsList extends Component {
    // defines what this component needs to render
    state = {
        friends: [],
    }

    componentDidMount() {
        //getAll from ApiManager, hangs on to that data, and puts it into state
        ApiManager.getAllWithUserNames("friends")
        .then((friends) => {
            
            
                this.setState({
                    friends: friends
                })
                

            })
    }

    // {userId === this.props.userId ? 
    //     <>
    //     <button type="button" className="btn btn-primary" onClick={() => {this.props.history.push(`/messages/${this.props.id}/edit`)}}>Edit</button>
    //     <button type="button" className="btn btn-primary" onClick={() => this.props.deleteMessage(this.props.id)}>Delete</button>
    //     </> : null }
    
    // deleteFriend = id => {
    //     // handles deleting a single event from events array and renders updated array to the DOM
    //     ApiManager.delete("friends", id)
    //         .then(() => {
    //             ApiManager.getAll("friends")
    //                 .then((updatedFriendsList) => {
    //                     this.setState({
    //                         friends: updatedFriendsList
    //                     })
    //                 })
    //         })
    // }

    render() {
        console.log(this.state.friends)
        const activeUser = localStorage.getItem("credentials")
        console.log(activeUser)
        return (
            <>
                <h1>Friends</h1>
                <section>
                    <button type="button"
                        className="findFriendsButton"
                        // onClick renders search for users by username
                        onClick={() => { this.props.history.push("/friends/new") }}>
                        Find Friends
                    </button>
                </section>
                <div className="friendsList">
                    {/* array method that maps over events array and renders a single card for each event */}
                    
                    {this.state.friends.map(friend =>
                        <FriendCard
                            key={friend.id}
                            friend={friend}
                            // deleteFriend={this.deleteFriend}
                            // The router props need to be passed through <EventsList> to <EventCard> component. Spread operator copies properties from a provided object onto a new object.
                            {...this.props}
                        />)}

                </div>
            </>
        )
    }
}

export default FriendsList;
