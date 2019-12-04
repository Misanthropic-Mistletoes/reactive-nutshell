import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./auth/Login";
import EventsList from "./events/EventsList";
import EventForm from "./events/EventForm";
import ArticlesForm from "./articles/ArticlesForm";
import ArticlesList from "./articles/ArticlesList";
import Registration from "./auth/RegisterAccount";
import TasksList from "./tasks/TasksList"
import TaskForm from './tasks/TaskForm';
// import ArticlesEditForm from "./articles/ArticlesEditForm";
import Home from "./home/Home";
import MessagesList from "./messages/MessagesList";
import MessageForm from "./messages/MessageForm";

import EventEditForm from "./events/EventEditForm";

export default class ApplicationViews extends Component {

  render() {
    return (
      <React.Fragment>
        {/* Home and Authentication */}
        <Route exact path="/" render={(props) => {
          return <Home {...props} />
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
        <Route exact path="/register" render={props => {
          return <Registration {...this.props}{...props} />
        }}
        />
        {/* FRIENDS */}
        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />
        {/* MESSAGES */}
        <Route
          path="/messages" render={props => {
            if (this.props.user) {
              return <MessagesList
                {...props}
                {...this.props}
              />
            } else {
              return <Redirect to="login" />
            }
          }}
        />

        <Route
          exact path="/messages/new" render={props => {
            return <MessageForm {...props} />
          }}
        />

        <Route
          path="/messages/:"
        {/* TASKS */}
        <Route
          exact path="/tasks" render={props => {
            return <TasksList {...props} />

          }}
        />
        <Route path="/tasks/new" render={props => {
          return <TaskForm {...props} />
        }}
        />


        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
          />
        {/* ARTICLES */}
        <Route exact path="/articles" render={props => {
          return <ArticlesList {...props} />
        }}
        />
        <Route path="/articles/new" render={props => {
          return <ArticlesForm {...props} />
        }}
        />
        {/* EVENTS */}
        <Route
          exact path="/events" render={props => {
            if (this.props.user) {
              return <EventsList
                {...props}
                {...this.props}
              />
            } else {
              return <Redirect to="login" />
            }
          }}
        />
        <Route path="/events/new" render={props => {
          return <EventForm {...props} />
        }}
        />
        <Route path="/events/:eventId(\d+)/edit" render={props => {
          return <EventEditForm {...props} />
        }}
        />
      </React.Fragment>
    );
  }
}
