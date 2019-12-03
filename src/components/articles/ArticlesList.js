// author:  Julian garcia
// This Module Handles Setting the State of Articles, Rendering List of Article Cards to the DOM, and Delete and Edit Functionality for A Single Article 

import React, { Component } from 'react'
import ArticleCard from './ArticleCard'
import ArticleAPIManager from './ArticlesAPIManager'
import './ArticlesStyles/ArticlesList.css';

class ArticlesList extends Component {
    // defines what this component needs to render
    state = {
        articles: [],
    }

    componentDidMount() {
        //getAll from ArticlesAPIManager, hangs on to that data, and puts it into state
        ArticlesAPIManager.getAll()
            .then((articles) => {
                this.setState({
                    articles: articles
                })
            })
    }

    deleteArticle = id => {
        // handles deleting a single article from articles array and renders updated array to the DOM
        ArticlesAPIManager.delete(id)
            .then(() => {
                ArticlesAPIManager.getAll()
                    .then((updatedArticlesList) => {
                        this.setState({
                            articles: updatedArticlesList
                        })
                    })
            })
    }

    render() {
        return (
            <>
                <h1>Articles</h1>
                <section>
                    <button type="button"
                        className="newArticleButton"
                        // onClick renders articleForm.js 
                        onClick={() => { this.props.history.push("/articles/new") }}>
                        Add A New Article
                    </button>
                </section>
                <div className="articlesList">
                    {/* array function that maps over articles array and renders a single card for each article */}
                    {this.state.articles.map(article =>
                        <ArticleCard
                            key={article.id}
                            article={article}
                            deleteArticle={this.deleteArticle}
                        />
                    )}
                </div>
            </>
        )
    }
}

export default ArticlesList;
