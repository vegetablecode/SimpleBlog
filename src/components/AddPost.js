import React, { Component } from "react"
import { connect } from "react-redux"
import { addPost } from "../actions/postActions"
import axios from "axios"

class AddPost extends Component {

    state = {
        postsHaveBeenLoaded: false,
        posts: []
    }

    componentWillMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
    }

    handleAddPost = (e) => {
        e.preventDefault()
        let newPost = {
            id: Date.now().toString(),
            title: "wdwd",
            body: "wdwd"
        }
        this.props.addPost(newPost)
        this.props.history.push("/")
    }

    handleFetchData = (e, postList) => {
        e.preventDefault()
        if (postList.length) {
            postList.forEach((post) => {
                let newPost = {
                    id: post.id.toString(),
                    title: post.title,
                    body: post.body
                }
                this.props.addPost(newPost)
            })
            this.setState({
                postsHaveBeenLoaded: true
            })
        }
    }

    render() {
        const { posts } = this.state
        const postList = posts.length ? (
            posts.map(post => {
                return ({
                    id: post.id,
                    title: post.title,
                    body: post.body
                })
            })
        ) : null
        const apiPostsStatus = (this.state.postsHaveBeenLoaded) ? <div className="post card customMessage">
            Posts have been loaded!
    </div> : ""

        return (
            <div className="container">
                <h4 className="center">Add a new Post</h4>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <span>Enter a title:</span>
                        <input
                            type="text"
                            name="postTitle"
                            placeholder="Post title"
                        />
                        <span>Enter a post body:</span>
                        <textarea className="materialize-textarea"
                            name="postBody"
                            placeholder="Post body"
                        />

                        <button className="btn green modernButton" onClick={e => this.handleAddPost(e)}>
                            Add post
                        </button>

                        <button className="btn orange modernButton" onClick={e => this.handleFetchData(e, postList)}>
                            from API
                        </button>

                        {apiPostsStatus}

                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => { dispatch(addPost(post)) }
    }
}

export default connect(null, mapDispatchToProps)(AddPost)