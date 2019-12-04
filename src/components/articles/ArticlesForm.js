import React, { Component } from 'react';
import ArticlesAPIManager from './ArticlesAPIManager';
// import './ArticleForm.css'

class ArticlesForm extends Component {
    state = {
        articleTitle: "",
        synopsis: "",
        url:"",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    /*  Local method for validation, set loadingStatus, create article      
    object, invoke the ArticlesAPIManager post method, and redirect to the full article list
    */
    constructNewArticle = evt => {
        evt.preventDefault();
        if (this.state.articleTitle === "" || this.state.synopsis === "") {
            window.alert("DON'T LEAVE ANYTHING BLANK!!");
        } else {
            this.setState({ loadingStatus: true });
            const article = {
                title: this.state.articleTitle,
                synopsis: this.state.synopsis,
            };

            // Create the article and redirect user to article list
            ArticlesAPIManager.post(article)
            .then(() => this.props.history.push("/articles"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="articleTitle"
                        placeholder="Article Title"
                        />
                        <label htmlFor="articleTitle">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="synopsis"
                        placeholder="synopsis"
                        />
                        <label htmlFor="synopsis">Synopsis</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="url"
                        placeholder="URL"
                        />
                        <label htmlFor="url">URL</label>
                    </div>
                    <div className="alignRight">
                        <button
                        type="button"
                        className="button2"
                        disabled={this.state.loadingStatus}
                        onClick={this.constructNewArticle}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
        )
    }
}

export default ArticlesForm