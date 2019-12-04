// This file renders the overall Messages List for /messages
// Author: Sam Pita

import React, { Component } from 'react'
import MessageCard from './MessageCard'
import ApiManager from '../modules/ApiManager'

class MessagesList extends Component {
     //define what this component needs to render
     state = {
        messages: [],
    }

componentDidMount(){
    //getAll from ApiManager and hang on to that data; put it in state
    ApiManager.getAllWithUserNames("messages")
    .then((messagesArray) => {
        this.setState({
            messages: messagesArray
        })
        console.log(messagesArray)
    })
}

deleteMessage = id => {
    ApiManager.delete("messages", id)
    .then(() => {
      ApiManager.getAll("messages")
      .then((newMessages) => {
        this.setState({
            messages: newMessages
        })
      })
    })
  }

render(){
    return(
      <React.Fragment>
      <section>
        <button type="button"
          onClick={() => {this.props.history.push("/messages/new")}}>
          + Compose New Message
        </button>
      </section>
      <div className="container-cards">
        {this.state.messages.map(message =>
          <MessageCard
            key={message.id}
            username={message.user.name}
            message={message.message}
            timestamp={message.timestamp}
            deleteMessage={this.deleteMessage}
            {...this.props}
          />
        )}
      </div>
      </React.Fragment>
    )
  }
}

export default MessagesList