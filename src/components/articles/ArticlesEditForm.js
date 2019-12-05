// Author: Julian Garcia

import React, { Component } from "react"
import ApiManager from "../modules/ApiManager"
// import "./ArticleForm.css"

class ArticlesEditForm extends Component {
    //set the initial state
    state = {
      articleTitle: "",
      synopsis: "",
      url: "",
      loadingStatus: true,
    };

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    };

    updateExistingArticle = evt => {
      evt.preventDefault()
      this.setState({ loadingStatus: true });
      const editedArticle = {
        id: this.props.match.params.articleId,
        title: this.state.articleTitle,
        synopsis: this.state.synopsis,
        url: this.state.url
      };

      ApiManager.update("articles", editedArticle)
      .then(() => this.props.history.push("/articles"))
    };

    componentDidMount() {
      ApiManager.get("articles", this.props.match.params.articleId)
      .then(article => {
          this.setState({
            articleTitle: article.title,
            synopsis: article.synopsis,
            url: article.url,
            loadingStatus: false,
          });
      });
    };

    render() {
      return (
        <>
        <form>
          <fieldset>
            <div className="formgrid">
              <label htmlFor="articleTitle">Title</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="articleTitle"
                value={this.state.articleTitle}
              />

              <label htmlFor="synopsis">Synopsis</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="synopsis"
                value={this.state.synopsis}
              />

              <label htmlFor="synopsis">URL</label>
              <input
                type="text"
                required
                className="form-control"
                onChange={this.handleFieldChange}
                id="url"
                value={this.state.url}
              />
            </div>
            <div className="alignRight">
              <button
                type="button" disabled={this.state.loadingStatus}
                onClick={this.updateExistingArticle}
                className="btn btn-primary"
              >Submit</button>
            </div>
          </fieldset>
        </form>
        </>
      );
    }
}

export default ArticlesEditForm