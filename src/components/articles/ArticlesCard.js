// author:  Julian Garcia

// This Module Returns JSX per article
// Functionality in ArticlesList.js

import React, { Component } from 'react'
import './ArticlesStyles/ArticlesList.css';
import './ArticlesStyles/ArticleCard.css';
import newspaper from '../images/newspaper.png'

class ArticleCard extends Component {
  render() {
    return (
      <div className="articleCard">
        <div className="card-content">
          <div>
          <img src={newspaper} alt="newspaper icon" className="newspaperIcon" />
          <h1>Title: {this.props.article.title}</h1>
          </div>
          <p>Synopsis: {this.props.article.synopsis}</p>
          <p>URL: {this.props.article.url}</p>
    <p>Post date: {this.props.article.timestamp}</p>
          <button type="button" onClick={() => this.props.deleteArticle(this.props.article.id)}>
            Delete</button>
          <button type="button" onClick={() => { this.props.history.push(`/articles/${this.props.article.id}/edit`) }}>
            Edit</button>
          <hr />
        </div>
      </div>
    );
  }
}

export default ArticleCard; 
