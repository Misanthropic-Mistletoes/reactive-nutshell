import React, { Component } from 'react';
import ApiManager from '../modules/ApiManager';
// import './ArticleForm.css'

class ArticlesForm extends Component {
    state = {
        articleTitle: "",
        synopsis: "",
        url:"",
        timestamp: "",
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
        const userId = localStorage.getItem("credentials")
        const d = Date(Date.now())
        const dateTime = d.toString()
        evt.preventDefault();
        if (this.state.articleTitle === "" || this.state.synopsis === "") {
            window.alert("DON'T LEAVE ANYTHING BLANK!!");
        } else {
            this.setState({ loadingStatus: true });
            const article = {
                userId: Number(userId),
                title: this.state.articleTitle,
                synopsis: this.state.synopsis,
                url: this.state.url,
                timestamp: dateTime,
            };

            // Create the article and redirect user to article list
           return ApiManager.post("articles", article)
            .then(() => this.props.history.push("/articles"));
        }
    };

    render(){

        return(
            <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <label htmlFor="articleTitle">Name</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="articleTitle"
                        placeholder="Article Title"
                        />
                        <label htmlFor="synopsis">Synopsis</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="synopsis"
                        placeholder="synopsis"
                        />
                        <label htmlFor="url">URL</label>
                        <input
                        type="text"
                        required
                        onChange={this.handleFieldChange}
                        id="url"
                        placeholder="URL"
                        />
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