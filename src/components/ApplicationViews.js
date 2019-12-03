import { Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login";
import EventsList from "./events/EventsList";
import EventForm from "./events/EventForm";
import Registration from "./auth/RegisterAccount";
import MessagesList from "./messages/MessagesList";


export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />
        <Route
          exact path="/login" render={props => {
            return <Login
              {...props}
              {...this.props}
            />
          }}
        />
        <Route
          exact path="/register" render={props => {
            return null
            // Remove null and return the component which will handle user registration
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          exact path="/messages" render={props => {
            if (this.props.user) {
              return <MessagesList {...props} />
            } else {
              return <Login />
            }
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />
        {/* EVENTS */}
        <Route exact path="/events" render={props => {
          return <EventsList {...props} />
        }}
        />
        <Route path="/events/new" render={props => {
          return <EventForm {...props} />
        }}
        />
        {/* <Route path="/login" render={Login} /> */}
        <Route exact path="/register" render={props => {
          return <Registration {...this.props}{...props} />
        }} />


      </React.Fragment>
    );
  }
}
