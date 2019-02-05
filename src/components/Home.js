import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Home extends Component {
    render() {
        const { posts } = this.props // get posts from props
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={"/" + post.id}>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
                <div className="center">No posts yet</div>
            )
        return (
            <div className="container">
                <h4 className="center">Home</h4>
                <div>
                    {postList}
                </div>
            </div>
        )
    }
}

// get state and map it to props
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home) // connect component to redux store