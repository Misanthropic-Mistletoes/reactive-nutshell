import { Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login";
import EventsList from "./events/EventsList";
import EventForm from "./events/EventForm";
import Registration from "./auth/RegisterAccount";
import Home from "./home/Home";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <Home {...props} />
        }} />
        <Route
          path="/login" render={props => {
            return <Login setUser={this.props.setUser}
              {...props}
              {...this.props}
            />
          }}
        />
        <Route path="/register" render={props => {
          return <Registration setUser={this.props.setUser}
            {...this.props}
            {...props}
          />
        }} />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />
        <Route
          path="/articles" render={props => {
            return null
            // Remove null and return the component which will show the messages
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
      </React.Fragment>
    );
  }
}
