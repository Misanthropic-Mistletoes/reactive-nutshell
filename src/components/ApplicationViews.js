import { Route } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login";
import EventsList from "./events/EventsList";
import EventForm from "./events/EventForm";
import ArticlesList from "./events/EventsList";


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
            // Remove null and return the component which will show news articles
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
          path="/messages" render={props => {
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
        
        <Route exact path="/articles" render={props => {
            return <ArticlesList {...props}/>
          }}
        />

        {/* <Route path="/articles/new" render={props => {
            return <ArticlesForm {...props}/>
        }} 
        /> */}

      {/* EVENTS */}
        <Route exact path="/events" render={props => {
            return <EventsList {...props}/>
          }}
        />
        <Route path="/events/new" render={props => {
            return <EventForm {...props}/>
        }} 
        />
        

      </React.Fragment>
    );
  }
}
